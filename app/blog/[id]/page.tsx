"use client"

import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, User, Share2, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getBlogPostById, blogPosts } from "@/lib/data"

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const post = getBlogPostById(id)

  if (!post) {
    notFound()
  }

  const otherPosts = blogPosts.filter(p => p.id !== id).slice(0, 2)

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-PK", { dateStyle: "long" })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{post.author}</p>
                  <p className="text-sm text-muted-foreground">Verdant Electronics Team</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-10">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                    {paragraph.replace(/\*\*/g, "")}
                  </h2>
                )
              }
              if (paragraph.includes("**")) {
                const parts = paragraph.split(/\*\*(.*?)\*\*/)
                return (
                  <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                    {parts.map((part, i) => 
                      i % 2 === 1 ? <strong key={i} className="text-foreground font-semibold">{part}</strong> : part
                    )}
                  </p>
                )
              }
              if (paragraph.startsWith("- ") || paragraph.startsWith("✓ ")) {
                const items = paragraph.split("\n").filter(item => item.trim())
                return (
                  <ul key={index} className="list-none space-y-2 mb-4">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <Leaf className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item.replace(/^[-✓]\s*/, "")}</span>
                      </li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                Sustainability
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                Green Tech
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                Pakistan
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                Environment
              </span>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {otherPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">More Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {otherPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  href={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <div className="bg-card rounded-2xl overflow-hidden shadow-lg">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="px-2 py-1 rounded bg-primary/10 text-primary font-medium">
                          {relatedPost.category}
                        </span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
