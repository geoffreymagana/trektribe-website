
"use client"

import * as React from "react"
import { PricingCard, type PricingTier } from "@/components/pricing/PricingCard"

interface PricingSectionProps {
  title: string
  subtitle: string
  tiers: PricingTier[]
}

export function PricingSection({
  title,
  subtitle,
  tiers,
}: PricingSectionProps) {

  return (
    <section className="flex flex-col items-center gap-10 py-16 md:py-24">
      <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">{title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
      </div>

      <div className="grid w-full max-w-6xl gap-8 sm:grid-cols-1 lg:grid-cols-3 items-stretch">
        {tiers.map((tier) => (
          <PricingCard
            key={tier.name}
            tier={tier}
          />
        ))}
      </div>
    </section>
  )
}
