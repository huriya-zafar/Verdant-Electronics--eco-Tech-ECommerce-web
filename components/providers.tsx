"use client"

import { ReactNode } from "react"
import { AuthProvider } from "@/contexts/auth-context"
import { CartProvider } from "@/contexts/cart-context"
import { ThemeProvider } from "@/contexts/theme-context"
import { Navbar } from "@/components/navbar"
import { CartDrawer } from "@/components/cart-drawer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="pt-16">
            {children}
          </main>
          <WhatsAppButton />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
