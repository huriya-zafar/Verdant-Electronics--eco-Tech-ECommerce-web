import Link from "next/link"
import { ArrowRight, Leaf, Recycle, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { getTopRatedProducts } from "@/lib/data"

export default function HomePage() {
  const topProducts = getTopRatedProducts(4)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background">
          <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Leaf className="h-4 w-4" />
            Sustainable Technology for Tomorrow
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            Technology that grows
            <span className="text-primary"> with nature</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
            Discover premium eco-friendly electronics designed to reduce your carbon footprint 
            without compromising on performance or style.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2 text-base">
              <Link href="/shop">
                Shop Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link href="#mission">
                Our Mission
              </Link>
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Top Rated Products */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Top Rated Eco Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our highest-rated sustainable electronics, chosen by eco-conscious customers like you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/shop" className="gap-2">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-4 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Globe className="h-4 w-4" />
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building a sustainable future, one device at a time
              </h2>
              <p className="text-muted-foreground mb-6">
                At Verdant Electronics, we believe technology and sustainability can coexist. 
                Every product in our collection is carefully selected based on its environmental impact, 
                from materials sourcing to end-of-life recyclability.
              </p>
              <p className="text-muted-foreground mb-8">
                Our mission is to make eco-conscious choices easy and accessible. 
                By choosing Verdant, you&apos;re not just buying a product—you&apos;re 
                investing in a greener future for generations to come.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Tons CO2 Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Recyclable Products</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Eco Materials</h3>
                <p className="text-sm text-muted-foreground">
                  All products use sustainable, recycled, or biodegradable materials.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-lg mt-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Recycle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Full Lifecycle</h3>
                <p className="text-sm text-muted-foreground">
                  We track and minimize environmental impact from production to disposal.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Energy Efficient</h3>
                <p className="text-sm text-muted-foreground">
                  Our products are designed to minimize energy consumption.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-lg mt-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Carbon Neutral</h3>
                <p className="text-sm text-muted-foreground">
                  We offset 100% of our shipping and operational carbon emissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to make the switch?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of eco-conscious consumers who have already made the 
            switch to sustainable technology.
          </p>
          <Button asChild size="lg" className="gap-2 text-base">
            <Link href="/shop">
              Explore Our Collection
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg text-card-foreground">Verdant</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Premium eco-friendly electronics for a sustainable future.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/shop" className="hover:text-primary transition-colors">All Products</Link></li>
                <li><Link href="/shop?category=Computers" className="hover:text-primary transition-colors">Computers</Link></li>
                <li><Link href="/shop?category=Accessories" className="hover:text-primary transition-colors">Accessories</Link></li>
                <li><Link href="/shop?category=Audio" className="hover:text-primary transition-colors">Audio</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#mission" className="hover:text-primary transition-colors">Our Mission</Link></li>
                <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Block 5, Gulshan-e-Iqbal</li>
                <li>Karachi, Pakistan</li>
                <li>+92 321 4567890</li>
                <li>Mon-Sat, 10am-7pm PKT</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Verdant Electronics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
