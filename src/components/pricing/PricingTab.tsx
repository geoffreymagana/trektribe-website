"use client"

import { motion } from "framer-motion"

interface PricingTabProps {
  text: string
  selected: boolean
  setSelected: (text: string) => void
  discount?: boolean
}

export function PricingTab({ text, selected, setSelected, discount = false }: PricingTabProps) {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`relative w-28 rounded-full p-2 text-sm transition-colors ${
        selected ? "text-primary-foreground" : "text-muted-foreground"
      }`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {text}
        {discount && (
          <span className="rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
            -15%
          </span>
        )}
      </span>

      {selected && (
        <motion.div
          layoutId="pricing-tab"
          className="absolute inset-0 rounded-full bg-primary"
          transition={{
            type: "spring",
            duration: 0.5,
          }}
        />
      )}
    </button>
  )
}
