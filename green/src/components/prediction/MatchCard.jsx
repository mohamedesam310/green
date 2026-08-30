import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

export const MatchCard = ({ match }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    const months = [
      'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
      'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
    ];
    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
  };

  return (
    <Link to={`/prediction/${match.id}`}>
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg p-6 cursor-pointer group transition-all hover:border-go-green-200">
        {/* League */}
        <div className="text-xs text-gray-500 mb-4 font-medium group-hover:text-go-green-600 transition-colors">
          {match.league}
        </div>

        {/* Teams */}
        <div className="flex items-center justify-between mb-6">
          {/* Home Team */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-12 h-12 bg-go-green-50 rounded-full flex items-center justify-center mb-2 group-hover:bg-go-green-100 transition-colors">
              <span className="text-sm font-bold text-go-green-700 group-hover:scale-110 transition-transform">
                {match.homeTeamAbbr}
              </span>
            </div>
            <span className="text-sm font-semibold text-gray-900 text-center group-hover:text-go-green-700 transition-colors">
              {match.homeTeam}
            </span>
          </div>

          {/* VS */}
          <div className="px-4 text-gray-400 font-medium group-hover:text-go-green-500 transition-colors">VS</div>

          {/* Away Team */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-go-green-50 transition-colors">
              <span className="text-sm font-bold text-gray-600 group-hover:text-go-green-700 group-hover:scale-110 transition-all">
                {match.awayTeamAbbr}
              </span>
            </div>
            <span className="text-sm font-semibold text-gray-900 text-center group-hover:text-go-green-700 transition-colors">
              {match.awayTeam}
            </span>
          </div>
        </div>

        {/* Date and Time */}
        <div className="space-y-2 mb-4 pb-4 border-t border-gray-100 pt-4">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-600 group-hover:text-go-green-600 transition-colors">
            <Calendar className="w-3.5 h-3.5" />
            <span>{formatDate(match.date)}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-600 group-hover:text-go-green-600 transition-colors">
            <Clock className="w-3.5 h-3.5" />
            <span>{match.time}</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full px-6 py-2.5 bg-go-green-700 text-white rounded-lg font-medium hover:bg-go-green-800 transition-all text-sm group-hover:shadow-md">
          توقع الآن
        </button>
      </div>
    </Link>
  );
};
