"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, ThumbsUp } from "lucide-react";

interface TrafficUpdate {
  icon: "closure" | "subside" | "clear";
  message: string;
}

const trafficUpdates: TrafficUpdate[] = [
  { icon: "closure", message: "Road closure at Jalan Memand (30 Mins)" },
  { icon: "subside", message: "Traffic subside at Seksyen 1 (10 Mins)" },
  { icon: "clear", message: "Road clear at Jalan Indah" },
];

const getIconAndColor = (type: TrafficUpdate["icon"]) => {
  switch (type) {
    case "closure":
      return { Icon: TrendingUp, color: "#F87171", borderColor: "#F87171" };
    case "subside":
      return { Icon: TrendingDown, color: "#FBBF24", borderColor: "#FBBF24" };
    case "clear":
      return { Icon: ThumbsUp, color: "#34D399", borderColor: "#34D399" };
  }
};

export function TrafficCard() {
  return (
    <Card className="border-[#9333EA] shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold text-[#334155]">
          Traffic Movement
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {trafficUpdates.map((update, index) => {
          const { Icon, color, borderColor } = getIconAndColor(update.icon);
          return (
            <div
              key={index}
              className="flex items-center gap-2 px-2 py-[3px] rounded-lg border"
              style={{ borderColor }}
            >
              <Icon className="size-3" style={{ color }} />
              <span className="text-xs text-[#334155]">{update.message}</span>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
