"use client"

import { useState } from "react"
import { X, Plus, Minus, Trash2, Leaf, ShoppingBag, Loader2, CheckCircle, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { useAuth } from "@/contexts/auth-context"
import { formatPrice } from "@/lib/data"
import Image from "next/image"
import { AuthModal } from "./auth-modal"

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    totalPrice,
    totalCO2Saved,
    clearCart,
  } = useCart()
  const { isAuthenticated, user } = useAuth()
  
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "signup">("login")
  const [checkoutState, setCheckoutState] = useState<"idle" | "processing" | "success">("idle")

  if (!isOpen) return null

  const handleCheckout = async () => {
    if (!isAuthenticated) {
      setShowAuthModal(true)
      return
    }

    setCheckoutState("processing")
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2500))
    
    setCheckoutState("success")
  }

  const handleDownloadReceipt = () => {
    const receipt = `
====================================
       VERDANT ELECTRONICS
       Order Receipt
====================================

Date: ${new Date().toLocaleDateString("en-PK", { dateStyle: "full" })}
Customer: ${user?.name || "Guest"}
Email: ${user?.email || "N/A"}

------------------------------------
ITEMS:
${items.map(item => `
${item.product.name}
  Qty: ${item.quantity} x ${formatPrice(item.product.price)}
  Subtotal: ${formatPrice(item.product.price * item.quantity)}
`).join("")}
------------------------------------

TOTAL: ${formatPrice(totalPrice)}

------------------------------------
ENVIRONMENTAL IMPACT:
Total CO2 Saved: ${totalCO2Saved} kg

Thank you for choosing sustainable!
====================================

Block 5, Gulshan-e-Iqbal
Karachi, Pakistan
Phone: +92 321 4567890
    `.trim()

    const blob = new Blob([receipt], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `verdant-receipt-${Date.now()}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleCloseSuccess = () => {
    setCheckoutState("idle")
    clearCart()
    closeCart()
  }

  return (
    <>
      <div className="fixed inset-0 z-50">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
          onClick={checkoutState === "idle" ? closeCart : undefined}
        />

        {/* Drawer */}
        <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-card shadow-2xl flex flex-col">
          {checkoutState === "success" ? (
            // Success Overlay
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-in zoom-in duration-300">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground mb-2">
                Order Successful!
              </h2>
              <p className="text-muted-foreground mb-6">
                Thank you for your purchase, {user?.name}!
              </p>
              
              <div className="bg-primary/10 rounded-2xl p-6 mb-8 w-full max-w-sm">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <p className="text-lg font-semibold text-card-foreground mb-1">
                  Thank You for Saving
                </p>
                <p className="text-4xl font-bold text-primary">
                  {totalCO2Saved} kg
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  of CO2 emissions
                </p>
              </div>

              <div className="space-y-3 w-full max-w-sm">
                <Button 
                  onClick={handleDownloadReceipt} 
                  variant="outline" 
                  className="w-full gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download Receipt
                </Button>
                <Button onClick={handleCloseSuccess} className="w-full">
                  Continue Shopping
                </Button>
              </div>
            </div>
          ) : checkoutState === "processing" ? (
            // Processing Animation
            <div className="flex-1 flex flex-col items-center justify-center p-8">
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                <Leaf className="h-8 w-8 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h2 className="text-xl font-bold text-card-foreground mb-2">
                Processing Payment
              </h2>
              <p className="text-muted-foreground text-center">
                Please wait while we process your eco-friendly order...
              </p>
            </div>
          ) : (
            // Normal Cart View
            <>
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Your Cart
                </h2>
                <button
                  onClick={closeCart}
                  className="text-muted-foreground hover:text-card-foreground transition-colors"
                  aria-label="Close cart"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingBag className="h-16 w-16 text-muted-foreground/50 mb-4" />
                    <p className="text-lg font-medium text-card-foreground">Your cart is empty</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Add some eco-friendly products to get started
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map(item => (
                      <div
                        key={item.product.id}
                        className="flex gap-4 p-4 bg-secondary/50 rounded-xl"
                      >
                        <div className="relative w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-card-foreground truncate">
                            {item.product.name}
                          </h3>
                          <p className="text-sm text-primary font-semibold">
                            {formatPrice(item.product.price)}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            CO2 saved: {item.product.co2Saved * item.quantity} kg
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 ml-auto text-destructive hover:text-destructive"
                              onClick={() => removeFromCart(item.product.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-6 border-t border-border space-y-4">
                  {/* CO2 Saved */}
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Leaf className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-card-foreground">Total CO2 Saved</span>
                    </div>
                    <span className="text-lg font-bold text-primary">{totalCO2Saved} kg</span>
                  </div>

                  {/* Total */}
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-card-foreground">Subtotal</span>
                    <span className="text-2xl font-bold text-card-foreground">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>

                  <Button className="w-full" size="lg" onClick={handleCheckout}>
                    {isAuthenticated ? "Checkout" : "Login to Checkout"}
                  </Button>
                  {!isAuthenticated && (
                    <p className="text-xs text-center text-muted-foreground">
                      Please login or sign up to complete your purchase
                    </p>
                  )}
                  <p className="text-xs text-center text-muted-foreground">
                    Shipping and taxes calculated at checkout
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </>
  )
}
