// src/app/components/BackButton.tsx
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 mb-6 px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
    >
      <ArrowLeft size={18} />
      ย้อนกลับ
    </button>
  );
}