import React from 'react';
import { MessageCircle, Leaf } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-[#dfe3df] bg-[#f5f5f2] pt-8">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 pb-6 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#1d9d4c] px-3 py-2 text-sm font-medium text-white shadow-sm">
          <MessageCircle className="h-4 w-4" />
          <span>المكالمات</span>
        </div>

        <div className="text-center text-sm text-[#5e5e5e]">Go Green © 2022</div>

        <div className="flex items-center gap-2 rounded-full border border-[#dfe3df] bg-white px-3 py-2 shadow-sm">
          <Leaf className="h-5 w-5 text-[#1d9d4c]" />
          <span className="text-sm font-bold text-[#1d9d4c]">Go Green</span>
        </div>
      </div>

      <div className="fixed bottom-4 left-4 z-50">
        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1d9d4c] text-white shadow-lg shadow-green-500/30 transition hover:scale-105">
          <MessageCircle className="h-7 w-7" />
        </button>
      </div>
    </footer>
  );
};
