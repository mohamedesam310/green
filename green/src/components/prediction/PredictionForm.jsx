import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { submitPrediction } from '../../services/predictionService';
import { savePredictionToStorage } from '../../data/mockMatches';

export const PredictionForm = ({ match, onBack }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [winner, setWinner] = useState(null);
  const [homeScore, setHomeScore] = useState('');
  const [awayScore, setAwayScore] = useState('');
  const [errors, setErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const newErrors = [];
    
    if (!name.trim()) newErrors.push('يرجى إدخال اسمك');
    if (!email.trim()) newErrors.push('يرجى إدخال بريدك الإلكتروني');
    if (!email.includes('@')) newErrors.push('البريد الإلكتروني غير صحيح');
    if (!phone.trim()) newErrors.push('يرجى إدخال رقم هاتفك');
    if (!winner) newErrors.push('يرجى اختيار الفريق المتوقع فوزه');
    if (homeScore === '' || homeScore === null) newErrors.push('يرجى إدخال نتيجة الفريق الأول');
    if (awayScore === '' || awayScore === null) newErrors.push('يرجى إدخال نتيجة الفريق الثاني');
    
    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    const prediction = {
      matchId: match.id,
      name,
      email,
      phone,
      winner,
      homeScore: parseInt(homeScore),
      awayScore: parseInt(awayScore),
    };

    setIsSubmitting(true);
    try {
      const result = await submitPrediction(prediction);
      if (result.success) {
        savePredictionToStorage('current-user', match.id, prediction);
        setShowSuccess(true);

        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    } catch (error) {
      setErrors(['حدث خطأ أثناء تسجيل التوقع']);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="text-center py-12">
        <div className="mb-4 flex justify-center">
          <CheckCircle className="w-16 h-16 text-go-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          تم تسجيل توقعك بنجاح
        </h2>
        <p className="text-gray-600 mb-6">
          شكراً لمشاركتك! نتمنى لك التوفيق
        </p>
        <div className="text-sm text-gray-500">
          سيتم إعادة توجيهك الآن...
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="text-go-green-700 hover:text-go-green-800 font-medium mb-4 transition-colors"
        >
          ← العودة
        </button>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          توقع نتيجة المباراة
        </h1>
      </div>

      {/* Match Info */}
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 mb-6">
        <div className="text-center mb-4 text-sm text-gray-600">
          {match.league}
        </div>

        <div className="flex items-center justify-between mb-6">
          {/* Home Team */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-16 h-16 bg-go-green-50 rounded-full flex items-center justify-center mb-3 hover:bg-go-green-100 transition-colors">
              <span className="text-lg font-bold text-go-green-700">
                {match.homeTeamAbbr}
              </span>
            </div>
            <span className="text-lg font-semibold text-gray-900">
              {match.homeTeam}
            </span>
          </div>

          {/* VS */}
          <div className="px-4 text-gray-400 font-bold text-2xl">VS</div>

          {/* Away Team */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3 hover:bg-go-green-100 transition-colors">
              <span className="text-lg font-bold text-gray-600">
                {match.awayTeamAbbr}
              </span>
            </div>
            <span className="text-lg font-semibold text-gray-900">
              {match.awayTeam}
            </span>
          </div>
        </div>

        <div className="text-center text-sm text-gray-600">
          {match.date} الساعة {match.time}
        </div>
      </div>

      {/* Errors */}
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="text-sm text-red-800">
            {errors.map((error, idx) => (
              <div key={idx} className="flex gap-2">
                <span>•</span>
                <span>{error}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* User Info Section */}
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">بيانات المتنبئ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                الاسم الكامل
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="أدخل اسمك الكامل"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-go-green-600 focus:ring-2 focus:ring-go-green-100 transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-go-green-600 focus:ring-2 focus:ring-go-green-100 transition-all"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              رقم الهاتف
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="05xxxxxxxx"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-go-green-600 focus:ring-2 focus:ring-go-green-100 transition-all"
            />
          </div>
        </div>

        {/* Prediction Section */}
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 mb-6">
          {/* Winner Selection */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              من تتوقع أن يفوز؟
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'home', label: match.homeTeam },
                { value: 'draw', label: 'تعادل' },
                { value: 'away', label: match.awayTeam },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setWinner(option.value)}
                  className={`py-3 px-4 rounded-lg font-medium transition-all ${
                    winner === option.value
                      ? 'bg-go-green-700 text-white shadow-md scale-105'
                      : 'bg-gray-100 text-gray-900 hover:bg-go-green-50 hover:text-go-green-700 hover:scale-102'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Score Input */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              النتيجة المتوقعة
            </label>
            <div className="grid grid-cols-3 gap-4 items-center">
              {/* Home Score */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  {match.homeTeam}
                </label>
                <input
                  type="number"
                  min="0"
                  value={homeScore}
                  onChange={(e) => setHomeScore(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl font-bold focus:outline-none focus:border-go-green-600 focus:ring-2 focus:ring-go-green-100 transition-all"
                  placeholder="0"
                />
              </div>

              {/* Dash */}
              <div className="text-center text-2xl font-bold text-gray-400">
                -
              </div>

              {/* Away Score */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  {match.awayTeam}
                </label>
                <input
                  type="number"
                  min="0"
                  value={awayScore}
                  onChange={(e) => setAwayScore(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl font-bold focus:outline-none focus:border-go-green-600 focus:ring-2 focus:ring-go-green-100 transition-all"
                  placeholder="0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-6 py-3 bg-go-green-700 text-white rounded-lg font-medium hover:bg-go-green-800 transition-all text-lg ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
          }`}
        >
          {isSubmitting ? 'جاري التسجيل...' : 'تأكيد التوقع'}
        </button>
      </form>
    </div>
  );
};
