"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CrowdLevelCard() {
  const data = [30, 45, 60, 55, 70, 65, 50, 45, 55, 60, 75, 80];
  const maxValue = Math.max(...data);
  const chartHeight = 120;

  return (
    <Card className="border-[#9333EA] shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold text-[#334155]">
          Crowd Level
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Area Chart */}
        <div className="relative h-32 mt-2">
          <svg
            width="100%"
            height={chartHeight}
            viewBox={`0 0 ${data.length * 28} ${chartHeight}`}
            preserveAspectRatio="none"
            className="overflow-visible"
          >
            {/* Grid lines */}
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="0"
                y1={i * (chartHeight / 4)}
                x2={data.length * 28}
                y2={i * (chartHeight / 4)}
                stroke="#F1F5F9"
                strokeWidth="1"
              />
            ))}
            
            {/* Area fill - Purple gradient */}
            <defs>
              <linearGradient id="crowdGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DAB2FF" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#F0E0FF" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <path
              d={`
                M 0 ${chartHeight}
                ${data
                  .map(
                    (value, index) =>
                      `L ${index * 28 + 14} ${
                        chartHeight - (value / maxValue) * (chartHeight - 10)
                      }`
                  )
                  .join(" ")}
                L ${(data.length - 1) * 28 + 14} ${chartHeight}
                Z
              `}
              fill="url(#crowdGradient)"
            />
            {/* Line */}
            <path
              d={`
                M 14 ${chartHeight - (data[0] / maxValue) * (chartHeight - 10)}
                ${data
                  .slice(1)
                  .map(
                    (value, index) =>
                      `L ${(index + 1) * 28 + 14} ${
                        chartHeight - (value / maxValue) * (chartHeight - 10)
                      }`
                  )
                  .join(" ")}
              `}
              fill="none"
              stroke="#C67EFF"
              strokeWidth={1}
            />
          </svg>
        </div>
        <div className="flex justify-between text-xs text-[#64748B] mt-1">
          <span>8AM</span>
          <span>10AM</span>
          <span>12PM</span>
          <span>2PM</span>
          <span>4PM</span>
          <span>6PM</span>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-xs text-[#334155]">Crowd Level:</span>
          <span className="text-xs font-semibold text-[#FBBF24] border border-[#FBBF24] px-2 py-[3px] rounded-lg">
            Moderate
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
