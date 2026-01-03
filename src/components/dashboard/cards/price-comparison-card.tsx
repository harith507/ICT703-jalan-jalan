"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDownNarrowWide } from "lucide-react";

interface PriceItem {
  rank: number;
  name: string;
  source: string;
  price: string;
  priceColor: string;
}

interface PriceComparisonCardProps {
  sortOrder?: "asc" | "desc";
  onSortChange?: () => void;
}

const priceItems: PriceItem[] = [
  { rank: 1, name: "OYO Hotel", source: "Agoda.com", price: "RM 50/ Night", priceColor: "#34D399" },
  { rank: 2, name: "Boutique Hotel", source: "Booking.com", price: "RM 80/ Night", priceColor: "#FBBF24" },
  { rank: 3, name: "Swiss Garden", source: "Booking.com", price: "RM 150/ Night", priceColor: "#F87171" },
];

export function PriceComparisonCard({
  sortOrder = "asc",
  onSortChange,
}: PriceComparisonCardProps) {
  return (
    <Card className="border-[#9333EA] shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold text-[#334155]">
            Price Comparison
          </CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={onSortChange}
            className="text-xs font-semibold text-[#334155] border-[#9333EA] gap-2"
          >
            <ArrowDownNarrowWide className="size-4" />
            {sortOrder === "asc" ? "Low to High" : "High to Low"}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-0">
          {priceItems.map((item) => (
            <div
              key={item.rank}
              className="flex items-center border-b border-[#E2E8F0] last:border-b-0"
            >
              <div className="w-6 py-2 text-xs text-[#334155]">
                {item.rank}
              </div>
              <div className="flex-1 py-2 text-xs text-[#334155]">
                {item.name}
              </div>
              <div className="py-2 text-xs text-[#334155] text-right">
                {item.source}
              </div>
              <div className="py-2 pl-4">
                <span
                  className="text-xs font-semibold px-2 py-[3px] rounded-lg border"
                  style={{ 
                    color: item.priceColor,
                    borderColor: item.priceColor 
                  }}
                >
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
