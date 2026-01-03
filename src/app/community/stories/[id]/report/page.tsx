"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronLeft,
  ChevronRight,
  PlaneTakeoff,
  X,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

// Mock data for the story detail (same as story detail page)
const storyData = {
  location: "Club Med Finolhu, Maldives",
  address: "N 2051, Gasfinolhu, Kaafu Atoll, Maldives",
  author: {
    name: "Alif Haikal",
    badge: "Frequent Traveller",
    avatar: "AH",
  },
  title: "The Finolhu Villas: All-inclusive Resort in Maldives",
  content: `Club Med Maldives is an excellent choice for travelers seeking a relaxing yet well-organized all-inclusive island getaway. The resort is located on a private island with crystal-clear waters, white sandy beaches, and beautiful marine life, creating a truly tropical and peaceful atmosphere. Guests frequently praise the friendly and professional staff, who provide attentive service while maintaining a warm and welcoming environment. The all-inclusive concept is a major advantage, offering a good variety of international and Asian cuisine, quality drinks, and snacks throughout the day, allowing guests to enjoy their stay without worrying about additional costs. Activities such as snorkeling, water sports, fitness classes, and evening entertainment add to the overall experience, while the calm setting also makes it ideal for couples and honeymooners.`,
  images: [
    { id: 1, src: "/placeholder.svg" },
    { id: 2, src: "/placeholder.svg" },
    { id: 3, src: "/placeholder.svg" },
  ],
  experiences: [
    {
      id: 1,
      author: {
        name: "Shazwanie",
        badge: "Frequent Traveller",
        avatar: "SH",
      },
      content:
        "The island is absolutely beautiful with clear blue water and soft white sand. The snorkeling is amazing, and we saw many fish right near the villa. Staff were very friendly and always smiling, making us feel welcome throughout our stay. Food variety was good and drinks were included, which made the holiday very relaxing.",
    },
  ],
};

export default function ReportPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [confirmed, setConfirmed] = useState(false);

  const handleClose = () => {
    router.back();
  };

  const handleConfirm = () => {
    router.push(`/community/stories/${params.id}/report/success`);
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Header */}
      <header className="flex items-center justify-between px-[90px] py-4 border-b border-gray-100">
        <span className="text-xl font-semibold">Jalan²</span>
        <nav className="flex items-center gap-2">
          <Button variant="ghost" className="text-slate-600 text-sm font-semibold">
            My Trip
          </Button>
          <Button variant="ghost" className="text-slate-600 text-sm font-semibold">
            AI
          </Button>
          <Button variant="ghost" className="text-slate-600 text-sm font-semibold">
            Contact Us
          </Button>
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-sm font-semibold text-slate-600">
            CN
          </div>
        </nav>
      </header>

      {/* Main Content (Background - Story Detail) */}
      <main className="px-[56px] py-8">
        {/* Page Title */}
        <div className="flex items-end justify-between mb-6">
          <h1 className="text-[30px] font-semibold tracking-tight text-slate-700">
            Community Stories
          </h1>
          <Link href="/community/stories/create">
            <Button className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-slate-50 text-sm font-semibold">
              Create Community Story
            </Button>
          </Link>
        </div>

        {/* Two Column Layout */}
        <div className="flex gap-8">
          {/* Left Column - Image & Story Info */}
          <div className="w-[675px]">
            {/* Location Header */}
            <div className="p-6">
              <h2 className="text-base font-semibold text-slate-700">
                {storyData.location}
              </h2>
              <p className="text-sm text-slate-500">{storyData.address}</p>
            </div>

            {/* Main Image Placeholder */}
            <div className="w-full h-[450px] bg-gradient-to-br from-purple-900 to-purple-600 rounded-lg" />

            {/* Image Carousel */}
            <div className="flex items-center gap-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-lg border border-white shadow-sm bg-white/10"
              >
                <ChevronLeft className="h-4 w-4 text-slate-700" />
              </Button>

              <div className="flex-1 flex gap-4">
                {storyData.images.map((image) => (
                  <div
                    key={image.id}
                    className="flex-1 h-[245px] bg-gradient-to-br from-sky-200 to-sky-400 rounded-lg border border-white shadow-sm"
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-lg border border-white shadow-sm bg-white/10"
              >
                <ChevronRight className="h-4 w-4 text-slate-700" />
              </Button>
            </div>
          </div>

          {/* Right Column - Story Content */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Author Info */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-purple-900 flex items-center justify-center">
                    <span className="text-[10px] font-semibold text-white">
                      {storyData.author.avatar}
                    </span>
                  </div>
                  <span className="text-base font-semibold text-slate-700">
                    {storyData.author.name}
                  </span>
                  <div className="relative ml-2">
                    <PlaneTakeoff className="w-6 h-6 text-purple-900 drop-shadow-md" />
                  </div>
                  <span className="ml-2 px-2 py-[3px] text-xs font-semibold text-slate-700 border border-purple-900 rounded-lg bg-slate-50">
                    {storyData.author.badge}
                  </span>
                </div>
              </div>

              {/* Story Title & Content */}
              <h2 className="text-base font-semibold text-slate-700">
                {storyData.title}
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                {storyData.content}
              </p>
            </div>

            {/* Comment Input */}
            <div className="flex items-center gap-0 bg-slate-700 rounded-[10px] overflow-hidden">
              <div className="flex-1" />
              <Button className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-slate-50 text-sm font-semibold m-3">
                Send
              </Button>
            </div>

            {/* Traveler Experiences */}
            <div className="flex flex-col gap-5">
              <h3 className="text-base font-semibold text-slate-700">
                Traveler Experiences
              </h3>

              {storyData.experiences.map((experience) => (
                <div key={experience.id} className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-900 flex items-center justify-center">
                      <span className="text-[10px] font-semibold text-white">
                        {experience.author.avatar}
                      </span>
                    </div>
                    <span className="text-base font-semibold text-slate-700">
                      {experience.author.name}
                    </span>
                    <span className="px-2 py-[3px] text-xs font-semibold text-slate-700 border border-purple-900 rounded-lg bg-slate-50">
                      {experience.author.badge}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {experience.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Add Comment */}
            <div className="flex gap-12">
              <Input
                placeholder="Add Comment"
                className="border-purple-900 shadow-sm"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Modal Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={handleClose} />

      {/* Report Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[593px] bg-white rounded-[20px] z-50 p-0">
        <div className="px-[35px] py-[22px]">
          {/* Modal Header */}
          <div className="flex flex-col gap-7">
            <div className="flex items-center justify-between">
              <h2 className="text-[30px] font-semibold tracking-tight text-slate-700">
                Report
              </h2>
              <button
                onClick={handleClose}
                className="w-[37px] h-[37px] flex items-center justify-center"
              >
                <X className="w-[18px] h-[18px] text-slate-700 stroke-[2px]" />
              </button>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col gap-[7px]">
              {/* Report Category */}
              <div className="flex flex-col h-[69px]">
                <label className="text-base font-semibold text-slate-700 mb-2">
                  Report category
                </label>
                <div className="relative">
                  <div className="w-[503px] h-[36px] border border-purple-900 rounded-lg shadow-sm flex items-center px-3 bg-white">
                    <span className="text-sm text-slate-700 opacity-60 flex-1">
                      Misinformation
                    </span>
                    <ChevronDown className="w-6 h-6 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Justification */}
              <div className="flex flex-col h-[133px]">
                <label className="text-base font-semibold text-slate-700 mb-2">
                  Justification
                </label>
                <div className="w-[503px] h-[96px] border border-purple-900 rounded-lg shadow-sm bg-white" />
              </div>
            </div>
          </div>

          {/* Confirmation Checkbox */}
          <div className="flex items-center gap-[6px] mt-6">
            <div
              className={`w-[14px] h-[14px] border border-black/40 rounded-sm cursor-pointer ${
                confirmed ? "bg-purple-900" : "bg-white"
              }`}
              onClick={() => setConfirmed(!confirmed)}
            />
            <span className="text-sm text-slate-500">
              I confirm that this report is not false, misleading, or intended to harass.
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-[17px] mt-[13px]">
            <Button
              variant="outline"
              className="w-[243px] h-[36px] border border-purple-900 text-neutral-500 text-sm shadow-sm"
              onClick={handleClose}
            >
              Back
            </Button>
            <Button
              className="w-[243px] h-[36px] bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-slate-50 text-sm font-semibold"
              onClick={handleConfirm}
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

