"use client"

import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ShoppingCart, Leaf, Recycle, Zap, Package, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { getProductById, getRelatedProducts, formatPrice } from "@/lib/data"
import { cn } from "@/lib/utils"
import { ProductCard } from "@/components/product-card"

function getSustainabilityColor(score: number) {
  if (score >= 80) return "text-eco-high"
  if (score >= 50) return "text-eco-medium"
  return "text-eco-low"
}

function getSustainabilityBgColor(score: number) {
  if (score >= 80) return "bg-eco-high"
  if (score >= 50) return "bg-eco-medium"
  return "bg-eco-low"
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(id, 4)

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-square bg-card rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-4 right-4">
              <span className={cn(
                "px-3 py-1.5 rounded-full text-sm font-semibold text-primary-foreground",
                getSustainabilityBgColor(product.sustainabilityScore)
              )}>
                {product.sustainabilityScore}% Eco Score
              </span>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-2">
              <span className="text-sm font-medium text-primary">{product.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {product.description}
            </p>

            {/* Price and Add to Cart */}
            <div className="flex items-center gap-6 mb-8">
              <span className="text-4xl font-bold text-foreground">
                {formatPrice(product.price)}
              </span>
              <AddToCartButton productId={product.id} />
            </div>

            {/* Materials */}
            <div className="mb-8">
              <h3 className="font-semibold text-foreground mb-3">Materials</h3>
              <div className="flex flex-wrap gap-2">
                {product.materials.map(material => (
                  <span
                    key={material}
                    className="px-3 py-1.5 bg-secondary rounded-full text-sm text-secondary-foreground"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>

            {/* CO2 Saved */}
            <div className="p-4 bg-primary/10 rounded-xl flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{product.co2Saved} kg</div>
                <div className="text-sm text-muted-foreground">CO2 saved compared to standard products</div>
              </div>
            </div>
          </div>
        </div>

        {/* Eco Impact Breakdown */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Eco-Impact Breakdown</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Carbon Footprint</h3>
              <p className="text-sm text-muted-foreground">{product.ecoImpact.carbonFootprint}</p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Recycle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Recyclability</h3>
              <p className="text-sm text-muted-foreground">{product.ecoImpact.recyclability}</p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Energy Efficiency</h3>
              <p className="text-sm text-muted-foreground">{product.ecoImpact.energyEfficiency}</p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Packaging</h3>
              <p className="text-sm text-muted-foreground">{product.ecoImpact.packaging}</p>
            </div>
          </div>
        </section>

        {/* Sustainability Score Breakdown */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Sustainability Score</h2>
          <div className="bg-card rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-6 mb-6">
              <div className={cn(
                "text-5xl font-bold",
                getSustainabilityColor(product.sustainabilityScore)
              )}>
                {product.sustainabilityScore}
              </div>
              <div>
                <div className="font-semibold text-card-foreground">out of 100</div>
                <div className="text-sm text-muted-foreground">
                  {product.sustainabilityScore >= 80
                    ? "Eco Leader - Exceptional environmental performance"
                    : product.sustainabilityScore >= 50
                    ? "Eco Friendly - Good environmental choice"
                    : "Standard - Meets basic eco requirements"}
                </div>
              </div>
            </div>
            <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-500",
                  getSustainabilityBgColor(product.sustainabilityScore)
                )}
                style={{ width: `${product.sustainabilityScore}%` }}
              />
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Verified sustainable materials</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Carbon neutral shipping</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Eco-friendly packaging</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">End-of-life recycling program</span>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

function AddToCartButton({ productId }: { productId: string }) {
  const { addToCart, openCart } = useCart()
  const product = getProductById(productId)

  const handleClick = () => {
    if (product) {
      addToCart(product)
      openCart()
    }
  }

  return (
    <Button size="lg" className="gap-2" onClick={handleClick}>
      <ShoppingCart className="h-5 w-5" />
      Add to Cart
    </Button>
  )
}
