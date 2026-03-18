"use client"

import { useState, useMemo } from "react"
import { Filter, X, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { products, categories } from "@/lib/data"
import { cn } from "@/lib/utils"

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [ecoOnly, setEcoOnly] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = products

    if (selectedCategory !== "All") {
      result = result.filter(p => p.category === selectedCategory)
    }

    if (ecoOnly) {
      result = result.filter(p => p.sustainabilityScore > 80)
    }

    return result
  }, [selectedCategory, ecoOnly])

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Sustainability Filter */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Sustainability</h3>
        <button
          onClick={() => setEcoOnly(!ecoOnly)}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition-colors",
            ecoOnly
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          <Leaf className="h-5 w-5" />
          <div className="text-left">
            <div className="font-medium">Eco Leaders Only</div>
            <div className={cn(
              "text-xs",
              ecoOnly ? "text-primary-foreground/70" : "text-muted-foreground"
            )}>
              Score 80+
            </div>
          </div>
        </button>
      </div>

      {/* Reset Filters */}
      {(selectedCategory !== "All" || ecoOnly) && (
        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            setSelectedCategory("All")
            setEcoOnly(false)
          }}
        >
          Reset Filters
        </Button>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Shop Eco Electronics
          </h1>
          <p className="text-muted-foreground">
            Browse our collection of sustainable technology
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-card rounded-2xl p-6 shadow-lg">
              <FilterSidebar />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6 flex items-center gap-4">
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              {(selectedCategory !== "All" || ecoOnly) && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Active filters:</span>
                  {selectedCategory !== "All" && (
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                      {selectedCategory}
                    </span>
                  )}
                  {ecoOnly && (
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                      Eco Only
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
              </p>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Leaf className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  No products found
                </h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters to find what you&apos;re looking for.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("All")
                    setEcoOnly(false)
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-full bg-card shadow-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-card-foreground">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-muted-foreground hover:text-card-foreground"
                aria-label="Close filters"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </div>
      )}
    </div>
  )
}
