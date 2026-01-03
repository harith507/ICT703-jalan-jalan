import { TrendingDown, TrendingUp, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface WatchlistCardProps {
  destination: string;
  country: string;
  priceStatus: "rising" | "falling";
  change: number;
  avgPrice: string;
}

export function WatchlistCard({ destination, country, priceStatus, change, avgPrice }: WatchlistCardProps) {
  const isRising = priceStatus === "rising";

  return (
    <Card className="p-4 mb-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{destination}</h3>
            <p className="text-xs text-muted-foreground">{country}</p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-sm font-medium text-foreground">{avgPrice}</p>
          <div className={`flex items-center gap-1 text-xs ${isRising ? "text-yellow-600" : "text-green-600"}`}>
            {isRising ? (
              <TrendingUp className="w-3 h-3" />
            ) : (
              <TrendingDown className="w-3 h-3" />
            )}
            <span>{Math.abs(change)}% {isRising ? "rising" : "falling"}</span>
          </div>
        </div>
      </div>

      {/* Price Trend Bar */}
      <Progress
        value={50 + change}
        className="mt-3 h-1.5"
      />
    </Card>
  );
}

