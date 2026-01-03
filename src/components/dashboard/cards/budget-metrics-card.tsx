"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDownNarrowWide, Car, Plane, BedDouble, Utensils } from "lucide-react";

interface BudgetMetric {
  icon: React.ElementType;
  label: string;
  percentage: number;
  color: string;
  borderColor: string;
}

interface BudgetMetricsCardProps {
  sortOrder?: "asc" | "desc";
  onSortChange?: () => void;
}

const metrics: BudgetMetric[] = [
  { icon: Car, label: "Ride-hailing Prices", percentage: 120, color: "#F87171", borderColor: "#F87171" },
  { icon: Plane, label: "Flight Price Trends", percentage: 90, color: "#FBBF24", borderColor: "#FBBF24" },
  { icon: BedDouble, label: "Hotel Price Volatility", percentage: 70, color: "#FBBF24", borderColor: "#FBBF24" },
  { icon: Utensils, label: "Food Price Ranges", percentage: 20, color: "#34D399", borderColor: "#34D399" },
];

export function BudgetMetricsCard({
  sortOrder = "desc",
  onSortChange,
}: BudgetMetricsCardProps) {
  const sortedMetrics = [...metrics].sort((a, b) =>
    sortOrder === "desc" ? b.percentage - a.percentage : a.percentage - b.percentage
  );

  return (
    <Card className="border-[#9333EA] shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold text-[#334155]">
            Budget Level Metrics
          </CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={onSortChange}
            className="text-xs font-semibold text-[#334155] border-[#9333EA] gap-2"
          >
            <ArrowDownNarrowWide className="size-4" />
            {sortOrder === "desc" ? "High to Low" : "Low to High"}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {sortedMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2 px-2 py-[3px] rounded-lg border"
              style={{ borderColor: metric.borderColor }}
            >
              <Icon className="size-3" style={{ color: metric.color }} />
              <span className="text-xs text-[#334155]">
                {metric.label}: {metric.percentage}%
              </span>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
