"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SpendingCategory {
  name: string;
  percentage: number;
  color: string;
}

const defaultCategories: SpendingCategory[] = [
  { name: "Accommodation", percentage: 50, color: "#8B5CF6" },
  { name: "Transportation", percentage: 10, color: "#3B82F6" },
  { name: "Food", percentage: 10, color: "#F59E0B" },
  { name: "Shopping", percentage: 10, color: "#10B981" },
  { name: "Others", percentage: 10, color: "#94A3B8" },
];

export function SpendingBreakdownCard() {
  return (
    <Card className="border-[#9333EA] shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-[16px] font-semibold text-[#334155]">
          My Spending
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {defaultCategories.map((category, index) => (
          <div key={index} className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#64748B]">{category.name}</span>
              <span className="text-sm font-semibold text-[#334155]">
                {category.percentage}%
              </span>
            </div>
            <div className="h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${category.percentage}%`, backgroundColor: category.color }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
