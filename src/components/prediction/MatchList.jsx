import React, { useState } from 'react';
import { Trophy, AlertCircle, Loader } from 'lucide-react';
import { MatchCard } from './MatchCard';
import { mockMatches } from '../../data/mockMatches';

export const MatchList = () => {
  const [isLoading] = useState(false);
  const [matches] = useState(mockMatches);

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <Loader className="w-8 h-8 text-go-green-700 animate-spin mx-auto mb-4" />
        <p className="text-gray-600">جاري تحميل المباريات...</p>
      </div>
    );
  }

  if (matches.length === 0) {
    return (
      <div className="text-center py-12">
        <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">لا توجد مباريات متاحة حالياً</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};
