"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud } from "lucide-react";

export function WeatherCard() {
  return (
    <Card className="border-[#9333EA] shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-[16px] font-semibold text-[#334155]">
          Weather
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center py-4">
        <Cloud className="size-16 text-[#CBD5E1]" />
        <div className="flex items-baseline gap-1 mt-2">
          <span className="text-4xl font-bold text-[#334155]">28</span>
          <span className="text-xl text-[#64748B]">°C</span>
        </div>
        <p className="text-xs text-[#F97316] mt-3 text-center">
          Moderate rain expected at 5PM
        </p>
      </CardContent>
    </Card>
  );
}
