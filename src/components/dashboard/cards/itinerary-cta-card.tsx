"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ItineraryCTACard() {
  return (
    <Card className="border-[#9333EA] shadow-sm bg-white">
      <CardContent className="p-5">
        <p className="font-semibold text-[#334155] text-[16px] leading-[1.5em] mb-3">
          Check the itinerary that we plan for you!
        </p>
        <Link href="/dashboard/schedule">
          <Button
            size="sm"
            className="bg-[#7C3AED] text-white px-4"
          >
            Schedule & Updates
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
