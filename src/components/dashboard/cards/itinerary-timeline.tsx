"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  time: string;
  title: string;
}

const timelineItems: TimelineItem[] = [
  { time: "8:00 AM", title: "Petronas Twin Towers (photo + park walk)" },
  { time: "9:00 AM", title: "Suria KLCC Mall (breakfast / coffee)" },
  { time: "11:00 AM", title: "KL Tower (sky deck or observation deck)" },
  { time: "12:30 AM", title: "Lunch at Jalan Alor (local food)" },
  { time: "2:30 PM", title: "Bukit Bintang (shopping & street vibes)" },
  { time: "4:00 PM", title: "Pavilion KL / Lot 10" },
  { time: "8:00 PM", title: "Night walk around Saloma Bridge" },
];

export function ItineraryTimeline() {
  return (
    <Card className="border-[#9333EA] shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold text-[#334155]">
          Suggested Itinerary Schedule
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {timelineItems.map((item, index) => {
            const isLast = index === timelineItems.length - 1;

            return (
              <div key={index} className="relative flex gap-4 pb-4 last:pb-0">
                {/* Timeline line */}
                {!isLast && (
                  <div className="absolute left-[5px] top-3 w-[2px] h-full bg-[#C084FC]" />
                )}

                {/* Timeline dot */}
                <div className="relative z-10 w-3 h-3 rounded-full bg-[#C084FC] mt-1 shrink-0" />

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#334155]">
                      {item.title}
                    </span>
                    <span className="text-xs text-[#334155]">
                      {item.time}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
