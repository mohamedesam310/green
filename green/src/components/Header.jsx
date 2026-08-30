import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Heart, Globe, Menu, Leaf, MessageCircle } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-[#f5f5f2] border-b border-[#dfdfdb]">
      <div className="bg-[#1f9d5a] px-4 py-2 text-center text-sm font-medium text-white">
        زجاجة ... هذا ما نضيفه، هذا ما نضيفه، هذا ما نضيفه
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3 md:py-4">
          <div className="flex items-center gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe3df] bg-white text-[#2e2e2e] shadow-sm">
              <Globe className="h-4 w-4" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe3df] bg-white text-[#2e2e2e] shadow-sm">
              <Heart className="h-4 w-4" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe3df] bg-white text-[#2e2e2e] shadow-sm">
              <ShoppingCart className="h-4 w-4" />
            </button>
          </div>

          <div className="hidden md:flex flex-1 justify-center px-4">
            <div className="relative w-full max-w-[620px]">
              <input
                type="text"
                placeholder="إبحث عن منتج..."
                className="w-full rounded-full border border-[#d9d9d6] bg-white px-14 py-3 text-right text-sm text-[#3b3b3b] shadow-sm outline-none placeholder:text-[#7b7b7b]"
              />
              <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#5d5d5d]" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex items-center justify-center rounded-full bg-[#1d9d4c] px-5 py-2 text-sm font-medium text-white shadow-sm">
              ابحث عن منتجك
            </button>
            <Link to="/" className="flex items-center justify-center rounded-full bg-[#0d9b52] p-2 shadow-sm ring-2 ring-white">
              <Leaf className="h-8 w-8 text-white" />
            </Link>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe3df] bg-white text-[#2e2e2e] shadow-sm md:hidden">
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
