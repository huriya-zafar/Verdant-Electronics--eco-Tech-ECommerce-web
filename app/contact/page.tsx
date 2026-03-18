"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, Leaf, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success state after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000)
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Mail className="h-4 w-4" />
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our eco-friendly products? We&apos;d love to hear from you. 
            Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">support@verdant.pk</p>
                <p className="text-muted-foreground">sales@verdant.pk</p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground">+92 321 4567890</p>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Mon-Sat, 10am-7pm PKT</span>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Address</h3>
                <p className="text-muted-foreground">
                  Block 5, Gulshan-e-Iqbal<br />
                  Karachi, Pakistan<br />
                  75300
                </p>
              </div>

              <div className="bg-primary/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Leaf className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-foreground">Carbon Neutral Support</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our customer support operations are 100% carbon neutral. 
                  Every email and call is offset through our tree planting program in Northern Pakistan.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={e => handleChange("name", e.target.value)}
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={e => handleChange("email", e.target.value)}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={e => handleChange("subject", e.target.value)}
                      className={errors.subject ? "border-destructive" : ""}
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={e => handleChange("message", e.target.value)}
                      className={`w-full px-3 py-2 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none ${
                        errors.message ? "border-destructive" : "border-input"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-card-foreground mb-2">
                What is your return policy?
              </h3>
              <p className="text-sm text-muted-foreground">
                We offer a 30-day satisfaction guarantee on all products. 
                If you&apos;re not happy, we&apos;ll take it back and recycle it responsibly.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-card-foreground mb-2">
                How is the sustainability score calculated?
              </h3>
              <p className="text-sm text-muted-foreground">
                Our score considers materials, manufacturing process, energy efficiency, 
                packaging, and end-of-life recyclability.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-card-foreground mb-2">
                Do you deliver across Pakistan?
              </h3>
              <p className="text-sm text-muted-foreground">
                Yes! We deliver nationwide with carbon-neutral shipping. 
                Free delivery on orders above Rs. 5,000 in Karachi, Lahore, and Islamabad.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-card-foreground mb-2">
                Can I recycle my old electronics with you?
              </h3>
              <p className="text-sm text-muted-foreground">
                Absolutely! We have a take-back program for any electronics. 
                Drop off at our Karachi office or contact us for pickup.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
