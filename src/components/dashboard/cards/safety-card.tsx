"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";

export function SafetyCard() {
  return (
    <Card className="border-[#9333EA] shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold text-[#334155]">
          Safety Level
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center py-4">
        <ShieldAlert className="size-20 text-[#FBBF24]" />
        <span className="text-5xl font-semibold text-[#334155] mt-2">60 %</span>
        <p className="text-xs text-[#334155] mt-3 text-center">
          Caution: History of Pickpockets
        </p>
      </CardContent>
    </Card>
  );
}
