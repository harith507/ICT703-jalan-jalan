"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Booking {
  id: number;
  name: string;
  status: "confirmed" | "cancelled";
  date: string;
}

const bookings: Booking[] = [
  { id: 1, name: "Museum Ticket", status: "cancelled", date: "9/11/25" },
  { id: 2, name: "Hotel", status: "confirmed", date: "9/11/25" },
  { id: 3, name: "Flight", status: "confirmed", date: "9/11/25" },
];

export function BookingListCard() {
  return (
    <Card className="border-[#9333EA] shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold text-[#000000]">
          Booking List & Updates
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Tab buttons */}
        <div className="flex gap-1 p-1 bg-[#F1F5F9] rounded-lg w-fit mb-4">
          <button className="px-3 py-1 text-sm font-semibold text-[#334155] bg-white rounded-lg shadow-sm">
            All
          </button>
          <button className="px-3 py-1 text-sm font-semibold text-[#334155] rounded-lg">
            Confirmed
          </button>
        </div>

        {/* Table */}
        <div className="w-full">
          {/* Header */}
          <div className="flex border-b border-[#E2E8F0]">
            <div className="flex-1 px-2 py-2 text-base font-semibold text-[#334155]">
              Booking List
            </div>
            <div className="w-[140px] px-2 py-2 text-base font-semibold text-[#334155]">
              Status Updates
            </div>
            <div className="w-[80px] px-2 py-2 text-base font-semibold text-[#334155] text-right">
              Date
            </div>
          </div>

          {/* Rows */}
          {bookings.map((booking) => (
            <div key={booking.id} className="flex border-b border-[#E2E8F0]">
              <div className="w-[35px] px-2 py-2 text-base text-[#334155]">
                {booking.id}
              </div>
              <div className="flex-1 px-2 py-2 text-base text-[#334155]">
                {booking.name}
              </div>
              <div className="w-[140px] px-2 py-2">
                <span
                  className={`px-2 py-0.5 text-xs font-semibold border rounded-lg ${
                    booking.status === "cancelled"
                      ? "text-[#F87171] border-[#F87171]"
                      : "text-[#34D399] border-[#34D399]"
                  }`}
                >
                  {booking.status === "cancelled" ? "Cancelled" : "Confirmed"}
                </span>
              </div>
              <div className="w-[80px] px-2 py-2 text-base text-[#334155] text-right">
                {booking.date}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
