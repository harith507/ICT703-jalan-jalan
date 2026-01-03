"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TrendingItem {
  rank: number;
  text: string;
}

const trendingItems: TrendingItem[] = [
  { rank: 1, text: "#LangkawiSunset" },
  { rank: 2, text: "Penang Hot Air Balloon Fiesta" },
  { rank: 3, text: "Viral Char Kuey Teaw" },
];

export function TrendingCard() {
  return (
    <Card className="border-[#9333EA] shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold text-[#334155]">
          Now Trending
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {trendingItems.map((item) => (
          <div
            key={item.rank}
            className="flex items-center border-b border-[#E2E8F0] last:border-b-0 py-2"
          >
            <div className="w-6 text-xs text-[#334155]">{item.rank}</div>
            <div className="flex-1 text-xs text-[#334155]">{item.text}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
