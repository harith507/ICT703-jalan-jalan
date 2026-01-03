"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Attraction {
  name: string;
  status: "Open" | "Closed";
  distance: string;
}

interface AttractionCardProps {
  filter?: "All" | "Open";
  onFilterChange?: (filter: "All" | "Open") => void;
}

const attractions: Attraction[] = [
  { name: "Petrosains", status: "Open", distance: "0.4 KM" },
  { name: "Muzium Negara", status: "Open", distance: "3.0 KM" },
  { name: "Aquaria", status: "Closed", distance: "1.0 KM" },
  { name: "KL Tower", status: "Closed", distance: "5.0 KM" },
];

export function AttractionCard({
  filter = "All",
  onFilterChange,
}: AttractionCardProps) {
  const filteredAttractions =
    filter === "Open"
      ? attractions.filter((a) => a.status === "Open")
      : attractions;

  return (
    <Card className="border-[#9333EA] shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold text-[#334155]">
            Attraction Operating Status
          </CardTitle>
          
          {/* Tabs */}
          <div className="flex items-center bg-[#F1F5F9] rounded-lg p-[3px]">
            <button
              onClick={() => onFilterChange?.("All")}
              className={`px-2 py-1 text-xs font-semibold rounded-lg ${
                filter === "All"
                  ? "bg-white text-[#334155] shadow-sm"
                  : "text-[#334155]"
              }`}
            >
              All
            </button>
            <button
              onClick={() => onFilterChange?.("Open")}
              className={`px-2 py-1 text-xs font-semibold rounded-lg ${
                filter === "Open"
                  ? "bg-white text-[#334155] shadow-sm"
                  : "text-[#334155]"
              }`}
            >
              Open
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {filteredAttractions.map((attraction, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 p-2 px-3 rounded-lg border ${
              attraction.status === "Open"
                ? "border-[#34D399]"
                : "border-[#F87171]"
            } bg-white`}
          >
            <div
              className={`w-[3px] h-8 rounded-sm ${
                attraction.status === "Open" ? "bg-[#34D399]" : "bg-[#F87171]"
              }`}
            />
            <div className="flex-1">
              <p className="text-xs font-semibold text-[#334155]">
                {attraction.name}
              </p>
              <div className="flex items-center gap-2 text-xs">
                <span
                  className={`font-semibold ${
                    attraction.status === "Open"
                      ? "text-[#34D399]"
                      : "text-[#F87171]"
                  }`}
                >
                  {attraction.status}
                </span>
                <span className="text-[#334155]">{attraction.distance}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
