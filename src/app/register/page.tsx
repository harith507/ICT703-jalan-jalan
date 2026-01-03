"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="px-12 py-6">
        <Link href="/" className="text-[23px] font-semibold text-black">
          Jalan²
        </Link>
      </header>

      {/* Main Content - Two Column Layout */}
      <main className="flex-1 flex">
        {/* Left Column - Register Form */}
        <div className="w-[692px] flex items-center justify-center">
          <div className="w-[588px] border-4 border-[#3B0764] rounded-[20px] p-16">
            <div className="flex flex-col items-center gap-4">
              {/* Title */}
              <h1 className="text-[30px] font-semibold text-black text-center tracking-tight leading-none">
                Welcome to Jalan²
              </h1>

              {/* Name Field */}
              <div className="w-[355px] flex flex-col gap-1">
                <label className="text-base font-semibold text-slate-700">
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="Name"
                  className="border-[#3B0764] shadow-sm"
                />
              </div>

              {/* Email Field */}
              <div className="w-[355px] flex flex-col gap-1">
                <label className="text-base font-semibold text-slate-700">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Email"
                  className="border-[#3B0764] shadow-sm"
                />
              </div>

              {/* Password Field */}
              <div className="w-[355px] flex flex-col gap-1">
                <label className="text-base font-semibold text-slate-700">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="Password"
                  className="border-[#3B0764] shadow-sm"
                />
              </div>

              {/* City of Residence Field */}
              <div className="w-[355px] flex flex-col gap-1">
                <label className="text-base font-semibold text-slate-700">
                  City of Residence
                </label>
                <Input
                  type="text"
                  placeholder="City of Residence"
                  className="border-[#3B0764] shadow-sm"
                />
              </div>

              {/* Frequent Visited City Field */}
              <div className="w-[355px] flex flex-col gap-1">
                <label className="text-base font-semibold text-slate-700">
                  Frequent Visited City
                </label>
                <Input
                  type="text"
                  placeholder="Frequent Visited City"
                  className="border-[#3B0764] shadow-sm"
                />
              </div>

              {/* Confirm Button */}
              <Button className="w-[354px] bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-slate-50 text-sm font-semibold">
                Confirm
              </Button>

              {/* Back Link */}
              <Link href="/login" className="w-[355px]">
                <Input
                  type="button"
                  value="Back"
                  className="w-full border-[#3B0764] shadow-sm text-center text-slate-500 cursor-pointer hover:bg-slate-50"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column - Illustration */}
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-50">
          {/* Placeholder for illustration */}
          <div className="w-[723px] h-[680px] flex items-center justify-center">
            <div className="text-slate-400 text-center">
              <svg
                className="w-64 h-64 mx-auto mb-4 text-purple-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <p className="text-lg font-medium text-purple-400">Travel Illustration</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

