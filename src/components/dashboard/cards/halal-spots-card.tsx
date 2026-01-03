"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ArrowDownNarrowWide } from "lucide-react";

interface HalalSpot {
  rank: number;
  name: string;
  distance: string;
  rating: number;
}

interface HalalSpotsCardProps {
  sortBy?: "rating" | "distance";
  onSortChange?: () => void;
}

const spots: HalalSpot[] = [
  { rank: 1, name: "Wagyu Ramen", distance: "3.2 KM", rating: 4.8 },
  { rank: 2, name: "Hajj Chinese Muslim", distance: "1.0 KM", rating: 2.5 },
  { rank: 3, name: "Kapitan Tandoori House", distance: "0.2 KM", rating: 1.2 },
];

const getRatingColor = (rating: number) => {
  if (rating >= 4) return { text: "#34D399", border: "#34D399" };
  if (rating >= 2.5) return { text: "#FBBF24", border: "#FBBF24" };
  return { text: "#F87171", border: "#F87171" };
};

export function HalalSpotsCard({
  sortBy = "rating",
  onSortChange,
}: HalalSpotsCardProps) {
  return (
    <Card className="border-[#9333EA] shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold text-[#334155]">
            Halal Spots Nearby
          </CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={onSortChange}
            className="text-xs font-semibold text-[#334155] border-[#9333EA] gap-2"
          >
            <ArrowDownNarrowWide className="size-4" />
            By {sortBy === "rating" ? "Rating" : "Distance"}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {spots.map((spot) => {
          const colors = getRatingColor(spot.rating);
          return (
            <div
              key={spot.rank}
              className="flex items-center border-b border-[#E2E8F0] last:border-b-0 py-2"
            >
              <div className="w-6 text-xs text-[#334155]">{spot.rank}</div>
              <div className="flex-1 text-xs text-[#334155]">{spot.name}</div>
              <div className="text-xs text-[#334155] pr-4">{spot.distance}</div>
              <div
                className="flex items-center gap-1 px-2 py-[3px] rounded-lg border"
                style={{ borderColor: colors.border }}
              >
                <Star className="size-3" style={{ color: colors.text }} fill="currentColor" />
                <span className="text-xs font-semibold" style={{ color: colors.text }}>
                  {spot.rating}
                </span>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
