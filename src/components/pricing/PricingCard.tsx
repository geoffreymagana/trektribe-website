
"use client"
import { Check, Info } from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export type PricingTier = {
  name: string
  price: {
    monthly: string
    yearly: string
  }
  description: string
  features: string[]
  cta: string
  ctaVariant?: "default" | "outline"
  featured?: boolean,
  fee: string
}

interface PricingCardProps {
  tier: PricingTier
}

export function PricingCard({ tier }: PricingCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border bg-card p-7 shadow-sm relative",
        tier.featured && "border-primary ring-2 ring-primary"
      )}
    >
      {tier.featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <div className="rounded-full border border-primary bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                Most Popular
            </div>
        </div>
      )}
      <div className="flex-1 space-y-5">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">{tier.name}</h3>
          <p className="text-muted-foreground">{tier.description}</p>
        </div>

        <div className="border-t pt-4">
            <p className="font-semibold text-foreground">Ticketing Fee</p>
            <div className="text-muted-foreground text-sm flex items-center gap-1">
                {tier.fee}
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Info className="h-3.5 w-3.5 cursor-help"/>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>This fee is charged to the ticket buyer by default. You can also absorb it.</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>

         <div className="border-t pt-4">
            <p className="font-semibold text-foreground">Subscription</p>
            <div className="flex items-baseline gap-1">
                <p className="text-4xl font-bold">
                    {tier.price.monthly}
                </p>
                <span className="text-muted-foreground">
                    {tier.price.monthly !== "Custom" && tier.price.monthly !== "Free"
                    ? "/ month"
                    : ""}
                </span>
            </div>
        </div>


        <ul className="space-y-3 pt-4">
          {tier.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="size-5 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground">{feature}</p>
            </li>
          ))}
        </ul>
      </div>

      <Button
        className="mt-8 w-full"
        size="lg"
        variant={tier.ctaVariant}
        asChild
      >
        <Link href="/contact?subject=Pricing">{tier.cta}</Link>
      </Button>
    </div>
  )
}
