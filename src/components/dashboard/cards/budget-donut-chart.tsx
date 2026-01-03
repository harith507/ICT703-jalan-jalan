"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BudgetDonutChartProps {
  expected?: number;
  actual?: number;
}

export function BudgetDonutChart({
  expected = 1000,
  actual = 650,
}: BudgetDonutChartProps) {
  const percentage = Math.round((actual / expected) * 100);

  // SVG donut chart calculations
  const size = 160;
  const strokeWidth = 20;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <Card className="border-[#9333EA] shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-[16px] font-semibold text-[#334155]">
          Actual & Expected Budget
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center py-4">
        {/* Donut Chart */}
        <div className="relative">
          <svg width={size} height={size} className="transform -rotate-90">
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#E2E8F0"
              strokeWidth={strokeWidth}
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#8B5CF6"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-[#334155]">{percentage}%</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex gap-8 mt-6">
          <div className="text-center">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 rounded-full bg-[#E2E8F0]" />
              <span className="text-xs text-[#64748B]">Expected</span>
            </div>
            <span className="text-lg font-semibold text-[#334155]">
              RM {expected.toLocaleString()}
            </span>
          </div>
          <div className="text-center">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 rounded-full bg-[#8B5CF6]" />
              <span className="text-xs text-[#64748B]">Actual</span>
            </div>
            <span className="text-lg font-semibold text-[#7C3AED]">
              RM {actual.toLocaleString()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
