"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { Product, formatPrice } from "@/lib/data"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
}

function getSustainabilityColor(score: number) {
  if (score >= 80) return "bg-eco-high text-primary-foreground"
  if (score >= 50) return "bg-eco-medium text-foreground"
  return "bg-eco-low text-primary-foreground"
}

function getSustainabilityLabel(score: number) {
  if (score >= 80) return "Eco Leader"
  if (score >= 50) return "Eco Friendly"
  return "Standard"
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <div className="group bg-card rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link href={`/shop/${product.id}`}>
        <div className="relative aspect-square bg-muted overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3">
            <span className={cn(
              "px-2 py-1 rounded-full text-xs font-semibold",
              getSustainabilityColor(product.sustainabilityScore)
            )}>
              {product.sustainabilityScore}% Eco
            </span>
          </div>
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/shop/${product.id}`}>
          <div className="mb-2">
            <span className={cn(
              "inline-block px-2 py-0.5 rounded-md text-xs font-medium",
              getSustainabilityColor(product.sustainabilityScore)
            )}>
              {getSustainabilityLabel(product.sustainabilityScore)}
            </span>
          </div>
          <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {product.description}
          </p>
        </Link>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-card-foreground">
            {formatPrice(product.price)}
          </span>
          <Button
            size="sm"
            onClick={() => addToCart(product)}
            className="gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </div>
  )
}
