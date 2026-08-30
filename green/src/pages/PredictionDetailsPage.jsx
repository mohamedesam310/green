import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockMatches } from '../data/mockMatches';
import { PredictionForm } from '../components/prediction/PredictionForm';

const PredictionDetailsPage = () => {
  const { matchId } = useParams();
  const navigate = useNavigate();
  const match = mockMatches.find(m => m.id === parseInt(matchId));

  if (!match) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            المباراة غير موجودة
          </h1>
          <p className="text-gray-600 mb-6">
            عذراً، المباراة التي تبحث عنها لم تعد متاحة
          </p>
          <button
            onClick={() => navigate('/prediction')}
            className="px-8 py-3 bg-[#1a9b58] text-white rounded-lg font-medium hover:bg-[#147d48] transition-colors"
          >
            العودة إلى التوقعات
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PredictionForm
          match={match}
          onBack={() => navigate('/prediction')}
        />
      </div>
    </div>
  );
};

export default PredictionDetailsPage;
