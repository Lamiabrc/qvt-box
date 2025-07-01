
import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface BrandedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'famille' | 'entreprise' | 'boutique' | 'gradient'
  children: React.ReactNode
}

const BrandedCard = React.forwardRef<HTMLDivElement, BrandedCardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variantClasses = {
      default: "bg-white border-gray-200 hover:shadow-lg transition-all duration-300",
      famille: "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:shadow-xl hover:shadow-purple-100 transition-all duration-300",
      entreprise: "bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200 hover:shadow-xl hover:shadow-teal-100 transition-all duration-300",
      boutique: "bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200 hover:shadow-xl hover:shadow-orange-100 transition-all duration-300",
      gradient: "bg-gradient-to-br from-white via-teal-50 to-cyan-50 border-teal-200 hover:shadow-xl hover:shadow-teal-100 transition-all duration-300"
    }

    return (
      <Card
        ref={ref}
        className={cn(
          variantClasses[variant],
          "hover:scale-105 transform transition-all duration-300",
          className
        )}
        {...props}
      >
        {children}
      </Card>
    )
  }
)
BrandedCard.displayName = "BrandedCard"

const BrandedCardHeader = CardHeader
const BrandedCardContent = CardContent
const BrandedCardTitle = CardTitle
const BrandedCardDescription = CardDescription

export { BrandedCard, BrandedCardHeader, BrandedCardContent, BrandedCardTitle, BrandedCardDescription }
