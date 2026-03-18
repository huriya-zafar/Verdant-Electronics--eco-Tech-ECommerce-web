export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  sustainabilityScore: number
  image: string
  co2Saved: number
  materials: string[]
  ecoImpact: {
    carbonFootprint: string
    recyclability: string
    energyEfficiency: string
    packaging: string
  }
}

export const products: Product[] = [
  // Computers
  {
    id: "solar-laptop",
    name: "Solar Laptop Pro",
    description: "A powerful laptop with integrated solar panels for sustainable charging. Perfect for remote work and outdoor professionals.",
    price: 280000,
    category: "Computers",
    sustainabilityScore: 92,
    image: "/products/solar-laptop.jpg",
    co2Saved: 45,
    materials: ["Recycled Aluminum", "Bio-plastic", "Solar Cells"],
    ecoImpact: {
      carbonFootprint: "75% less than traditional laptops",
      recyclability: "95% recyclable components",
      energyEfficiency: "Solar charging reduces grid dependency by 60%",
      packaging: "100% plastic-free packaging"
    }
  },
  {
    id: "green-monitor",
    name: "Green Display 27\"",
    description: "Energy-efficient 4K monitor with automatic brightness adjustment and eco-mode for reduced power consumption.",
    price: 125000,
    category: "Computers",
    sustainabilityScore: 82,
    image: "/products/green-monitor.jpg",
    co2Saved: 35,
    materials: ["Recycled Plastics", "Low-mercury LED", "Aluminum Stand"],
    ecoImpact: {
      carbonFootprint: "40% less than standard monitors",
      recyclability: "85% recyclable",
      energyEfficiency: "Energy Star certified, 30% less power",
      packaging: "FSC-certified cardboard"
    }
  },
  // Accessories
  {
    id: "bamboo-mouse",
    name: "Bamboo Mouse",
    description: "Ergonomic wireless mouse crafted from sustainable bamboo. Biodegradable and comfortable for all-day use.",
    price: 4500,
    category: "Accessories",
    sustainabilityScore: 88,
    image: "/products/bamboo-mouse.jpg",
    co2Saved: 8,
    materials: ["Bamboo", "Recycled Electronics", "Plant-based Plastics"],
    ecoImpact: {
      carbonFootprint: "80% less than plastic mice",
      recyclability: "85% biodegradable",
      energyEfficiency: "Low-power Bluetooth 5.0",
      packaging: "Compostable packaging"
    }
  },
  {
    id: "eco-keyboard",
    name: "Eco Mechanical Keyboard",
    description: "Tactile mechanical keyboard with keys made from recycled keycaps and a sustainable wood frame.",
    price: 12000,
    category: "Accessories",
    sustainabilityScore: 78,
    image: "/products/eco-keyboard.jpg",
    co2Saved: 15,
    materials: ["Reclaimed Wood", "Recycled ABS", "Eco-friendly Switches"],
    ecoImpact: {
      carbonFootprint: "50% less than standard keyboards",
      recyclability: "80% recyclable",
      energyEfficiency: "USB-C with low power consumption",
      packaging: "Minimal recyclable packaging"
    }
  },
  {
    id: "cork-tablet-case",
    name: "Cork Tablet Case",
    description: "Stylish and protective tablet case made from sustainable Portuguese cork. Naturally water-resistant and durable.",
    price: 5500,
    category: "Accessories",
    sustainabilityScore: 91,
    image: "/products/cork-tablet-case.jpg",
    co2Saved: 5,
    materials: ["Portuguese Cork", "Organic Cotton Lining", "Metal Clasps"],
    ecoImpact: {
      carbonFootprint: "90% less than leather cases",
      recyclability: "100% biodegradable cork",
      energyEfficiency: "N/A",
      packaging: "Plastic-free packaging"
    }
  },
  // Audio
  {
    id: "recycled-headphones",
    name: "Recycled Headphones",
    description: "Premium noise-canceling headphones made from ocean-recycled plastics. Crystal clear audio with a clear conscience.",
    price: 18000,
    category: "Audio",
    sustainabilityScore: 85,
    image: "/products/recycled-headphones.jpg",
    co2Saved: 12,
    materials: ["Ocean Plastic", "Recycled Aluminum", "Organic Cotton"],
    ecoImpact: {
      carbonFootprint: "60% less than standard headphones",
      recyclability: "90% recyclable",
      energyEfficiency: "40-hour battery life",
      packaging: "Recycled cardboard packaging"
    }
  },
  {
    id: "wind-speaker",
    name: "Wind-Powered Speaker",
    description: "Portable Bluetooth speaker with a built-in wind turbine for outdoor charging. Perfect for eco-conscious adventurers.",
    price: 14000,
    category: "Audio",
    sustainabilityScore: 58,
    image: "/products/wind-speaker.jpg",
    co2Saved: 10,
    materials: ["Recycled ABS", "Mini Wind Turbine", "Waterproof Fabric"],
    ecoImpact: {
      carbonFootprint: "35% less than standard speakers",
      recyclability: "70% recyclable",
      energyEfficiency: "Wind + solar charging options",
      packaging: "Recycled materials"
    }
  },
  // Power
  {
    id: "solar-charger",
    name: "Solar Power Bank",
    description: "Portable solar charger with high-efficiency panels. Never run out of power while reducing your carbon footprint.",
    price: 7500,
    category: "Power",
    sustainabilityScore: 95,
    image: "/products/solar-charger.jpg",
    co2Saved: 20,
    materials: ["Recycled Aluminum", "Monocrystalline Solar Cells", "Bio-plastic"],
    ecoImpact: {
      carbonFootprint: "Zero emissions during use",
      recyclability: "90% recyclable",
      energyEfficiency: "25W solar input, fast charging",
      packaging: "Hemp-based packaging"
    }
  },
  {
    id: "hand-crank-charger",
    name: "Hand-Crank Phone Charger",
    description: "Emergency phone charger with hand-crank generator. Perfect for outdoor adventures and emergency preparedness.",
    price: 3500,
    category: "Power",
    sustainabilityScore: 89,
    image: "/products/hand-crank-charger.jpg",
    co2Saved: 15,
    materials: ["Recycled ABS", "Steel Mechanism", "Rubber Grip"],
    ecoImpact: {
      carbonFootprint: "100% human-powered charging",
      recyclability: "85% recyclable",
      energyEfficiency: "1 min cranking = 3 min talk time",
      packaging: "Recyclable cardboard"
    }
  },
  // Eco-Appliances
  {
    id: "solar-fan",
    name: "Solar Ceiling Fan",
    description: "Energy-efficient ceiling fan powered by solar panels. Keeps your home cool without the electricity bill.",
    price: 28000,
    category: "Eco-Appliances",
    sustainabilityScore: 94,
    image: "/products/solar-fan.jpg",
    co2Saved: 50,
    materials: ["Bamboo Blades", "Recycled Aluminum Motor", "Solar Panel"],
    ecoImpact: {
      carbonFootprint: "Zero grid electricity needed",
      recyclability: "90% recyclable",
      energyEfficiency: "Runs entirely on solar power",
      packaging: "Minimal plastic-free packaging"
    }
  },
  {
    id: "led-bulb-pack",
    name: "Eco LED Bulb Pack (6)",
    description: "Pack of 6 energy-efficient LED bulbs. Last 25 years and use 80% less energy than traditional bulbs.",
    price: 2800,
    category: "Eco-Appliances",
    sustainabilityScore: 90,
    image: "/products/led-bulb-pack.jpg",
    co2Saved: 30,
    materials: ["Recycled Glass", "Lead-free Components", "Bio-plastic Base"],
    ecoImpact: {
      carbonFootprint: "80% less than incandescent",
      recyclability: "95% recyclable",
      energyEfficiency: "Only 9W for 60W equivalent",
      packaging: "100% recycled cardboard"
    }
  },
  // Mobile
  {
    id: "recycled-phone-case",
    name: "Recycled Plastic Phone Case",
    description: "Durable phone case made from 100% recycled ocean plastic. Protects your phone and the planet.",
    price: 1800,
    category: "Mobile",
    sustainabilityScore: 87,
    image: "/products/recycled-phone-case.jpg",
    co2Saved: 3,
    materials: ["Ocean Plastic", "Recycled TPU", "Plant-based Dyes"],
    ecoImpact: {
      carbonFootprint: "Made from ocean waste",
      recyclability: "100% recyclable",
      energyEfficiency: "N/A",
      packaging: "Compostable packaging"
    }
  },
  {
    id: "bamboo-phone-stand",
    name: "Bamboo Phone Stand",
    description: "Elegant phone stand crafted from sustainable bamboo. Perfect for video calls and desk organization.",
    price: 1500,
    category: "Mobile",
    sustainabilityScore: 93,
    image: "/products/bamboo-phone-stand.jpg",
    co2Saved: 2,
    materials: ["Bamboo", "Natural Wood Oil Finish"],
    ecoImpact: {
      carbonFootprint: "Carbon negative material",
      recyclability: "100% biodegradable",
      energyEfficiency: "N/A",
      packaging: "Zero-waste packaging"
    }
  },
  // Office
  {
    id: "bamboo-desk",
    name: "Sustainable Bamboo Desk",
    description: "Beautiful standing desk made from fast-growing bamboo. Adjustable height for ergonomic comfort.",
    price: 45000,
    category: "Office",
    sustainabilityScore: 96,
    image: "/products/bamboo-desk.jpg",
    co2Saved: 80,
    materials: ["Bamboo", "Recycled Steel Frame", "Natural Finish"],
    ecoImpact: {
      carbonFootprint: "Bamboo absorbs more CO2 than trees",
      recyclability: "100% recyclable",
      energyEfficiency: "Manual height adjustment",
      packaging: "Minimal flat-pack design"
    }
  },
  {
    id: "eco-notebook",
    name: "Eco-Paper Notebook (3 Pack)",
    description: "Set of 3 notebooks made from 100% post-consumer recycled paper. Tree-free and beautiful.",
    price: 1200,
    category: "Office",
    sustainabilityScore: 98,
    image: "/products/eco-notebook.jpg",
    co2Saved: 5,
    materials: ["Recycled Paper", "Soy-based Ink", "Cardboard Cover"],
    ecoImpact: {
      carbonFootprint: "Saves trees and reduces waste",
      recyclability: "100% recyclable",
      energyEfficiency: "N/A",
      packaging: "Paper band only"
    }
  },
  {
    id: "recycled-pen-set",
    name: "Recycled Pen Set (10)",
    description: "Set of 10 pens made from recycled plastic bottles. Smooth writing with a sustainable twist.",
    price: 800,
    category: "Office",
    sustainabilityScore: 84,
    image: "/products/recycled-pen-set.jpg",
    co2Saved: 1,
    materials: ["Recycled PET Bottles", "Recycled Aluminum Clip"],
    ecoImpact: {
      carbonFootprint: "Each pen = 1 recycled bottle",
      recyclability: "Fully recyclable",
      energyEfficiency: "N/A",
      packaging: "Recycled paper sleeve"
    }
  }
]

export const categories = ["All", "Computers", "Accessories", "Audio", "Power", "Eco-Appliances", "Mobile", "Office"]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products
  return products.filter(p => p.category === category)
}

export function getTopRatedProducts(limit: number = 4): Product[] {
  return [...products]
    .sort((a, b) => b.sustainabilityScore - a.sustainabilityScore)
    .slice(0, limit)
}

export function getRelatedProducts(productId: string, limit: number = 4): Product[] {
  const product = getProductById(productId)
  if (!product) return []
  
  return products
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit)
}

export function formatPrice(price: number): string {
  return `Rs. ${price.toLocaleString("en-PK")}`
}

// Blog data
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  date: string
  readTime: string
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "green-tech-pakistan",
    title: "Why Green Tech Matters in Pakistan",
    excerpt: "Discover how sustainable technology is transforming Pakistan's future and why adopting eco-friendly electronics is crucial for our environment.",
    content: `Pakistan faces significant environmental challenges, from air pollution in major cities to water scarcity and deforestation. Green technology offers a path forward that balances economic growth with environmental responsibility.

The electronics industry is one of the fastest-growing sectors in Pakistan, and with it comes the challenge of e-waste. Traditional electronics contain harmful materials like lead, mercury, and cadmium that can contaminate soil and water when improperly disposed of.

By choosing eco-friendly electronics, Pakistani consumers can:
- Reduce their carbon footprint by up to 60%
- Support local recycling initiatives
- Save money on electricity bills
- Contribute to a cleaner environment for future generations

The government has also introduced initiatives like the Clean Green Pakistan Movement, which aligns perfectly with the adoption of sustainable technology. When you choose Verdant Electronics, you're not just buying a product – you're investing in Pakistan's sustainable future.`,
    image: "/blog/green-tech-pakistan.jpg",
    author: "Fatima Hassan",
    date: "2026-03-15",
    readTime: "5 min read",
    category: "Sustainability"
  },
  {
    id: "reduce-carbon-footprint",
    title: "How to Reduce Your Carbon Footprint by 20%",
    excerpt: "Simple, actionable steps every Pakistani household can take to significantly reduce their environmental impact through smart technology choices.",
    content: `Reducing your carbon footprint doesn't require drastic lifestyle changes. With smart technology choices and small daily habits, you can achieve a 20% reduction in your personal carbon emissions.

**1. Switch to Solar-Powered Devices**
Pakistan receives abundant sunlight year-round. Solar chargers and solar-powered gadgets can reduce your reliance on grid electricity, which in Pakistan often comes from fossil fuels.

**2. Choose Energy-Efficient Electronics**
When shopping for new electronics, look for Energy Star ratings. LED bulbs, for example, use 80% less energy than traditional incandescent bulbs and last up to 25 times longer.

**3. Proper E-Waste Disposal**
Don't throw old electronics in regular trash. Verdant Electronics offers a take-back program where we responsibly recycle your old devices.

**4. Work From Home When Possible**
Reducing commute days can significantly cut transportation emissions. Invest in quality home office equipment made from sustainable materials.

**5. Support Sustainable Brands**
Every purchase is a vote for the kind of world you want to live in. Choose brands committed to sustainability.

By implementing these changes, the average Pakistani household can reduce their carbon footprint by 20% or more within a year.`,
    image: "/blog/reduce-carbon-footprint.jpg",
    author: "Ahmed Khan",
    date: "2026-03-10",
    readTime: "7 min read",
    category: "Tips & Guides"
  },
  {
    id: "sustainable-office-guide",
    title: "The Ultimate Guide to a Sustainable Home Office",
    excerpt: "Transform your workspace into an eco-friendly haven with our comprehensive guide to sustainable office equipment and practices.",
    content: `As remote work becomes more common in Pakistan, setting up a sustainable home office is both economically smart and environmentally responsible.

**Sustainable Desk Setup**
Start with a bamboo desk – bamboo grows 30 times faster than trees and absorbs more CO2. Pair it with an ergonomic bamboo mouse and eco-keyboard made from reclaimed wood.

**Energy Management**
- Use a smart power strip to eliminate phantom energy drain
- Position your desk near natural light to reduce artificial lighting needs
- Choose a Green Display monitor with automatic brightness adjustment

**Paper-Free Practices**
- Use digital note-taking apps instead of paper
- When paper is necessary, choose 100% recycled notebooks
- Invest in a quality tablet with a cork case for reading documents

**Air Quality**
Indoor plants not only improve air quality but also boost productivity. Consider adding 2-3 low-maintenance plants to your office space.

**The Complete Eco-Office Checklist:**
✓ Bamboo desk and furniture
✓ Energy-efficient LED lighting
✓ Solar-powered chargers for devices
✓ Recycled paper products
✓ Plants for air purification
✓ Proper e-waste recycling plan

Your home office can be a model of sustainability without sacrificing functionality or style.`,
    image: "/blog/sustainable-office.jpg",
    author: "Sara Malik",
    date: "2026-03-05",
    readTime: "6 min read",
    category: "Home Office"
  }
]

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find(p => p.id === id)
}
