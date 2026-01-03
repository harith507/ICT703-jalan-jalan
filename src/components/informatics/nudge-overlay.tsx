"use client";

import { Bell, MapPin, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface NudgeOverlayProps {
  onIgnore: () => void;
  onAccept: () => void;
}

const hotels = [
  { name: "Budget Inn Express", distance: "18km from center", price: "RM 180", rating: 3.5 },
  { name: "Outskirts Hotel", distance: "22km from center", price: "RM 165", rating: 3.8 },
  { name: "Suburban Stay", distance: "20km from center", price: "RM 195", rating: 4.0 },
];

export function NudgeOverlay({ onIgnore, onAccept }: NudgeOverlayProps) {
  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative">
      {/* Background Hotel List (Dimmed) */}
      <div className="px-6 pt-8 pb-24 blur-sm opacity-50">
        <h1 className="text-xl font-bold text-foreground mb-4">Hotels in London</h1>

        {hotels.map((hotel, index) => (
          <Card key={index} className="p-4 mb-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-xl bg-secondary" />
                <div>
                  <h3 className="font-medium text-foreground">{hotel.name}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {hotel.distance}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs text-muted-foreground">{hotel.rating}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-foreground">{hotel.price}</p>
                <p className="text-xs text-muted-foreground">/night</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Nudge Overlay */}
      <div className="fixed inset-0 bg-foreground/30 backdrop-blur-sm flex items-center justify-center p-6 z-50 max-w-md mx-auto">
        <Card className="p-6 w-full max-w-sm border-2 border-yellow-500/30">
          {/* Warning Icon */}
          <div className="flex justify-between items-start mb-4">
            <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center">
              <Bell className="w-7 h-7 text-yellow-600" />
            </div>
            <button
              onClick={onIgnore}
              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-secondary/80 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Nudge Content */}
          <h2 className="text-xl font-bold text-foreground mb-2">
            Spending Pattern Alert
          </h2>

          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            <span className="text-yellow-600 font-medium">Wait!</span> You typically regret booking hotels 20km outside the city center. History shows this adds{" "}
            <span className="font-semibold text-foreground">RM50/day</span> in transport fees.
          </p>

          {/* Recommendation */}
          <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-3 mb-6">
            <p className="text-sm text-green-600 font-medium">
              💡 Recommended: Search within City Center
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button onClick={onAccept} className="w-full" size="lg">
              <MapPin className="w-4 h-4 mr-2" />
              View Central Hotels
            </Button>
            <Button onClick={onIgnore} variant="ghost" className="w-full">
              Ignore Warning
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

