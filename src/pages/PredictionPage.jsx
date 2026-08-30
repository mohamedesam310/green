import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock3, ShieldCheck, Trophy } from 'lucide-react';
import { mockMatches } from '../data/mockMatches';

const featuredStats = [
  { label: 'مستخدمون يشاركون', value: '1,284', icon: Trophy },
  { label: 'مباريات اليوم', value: '18', icon: CalendarDays },
  { label: 'توقعات مسجلة', value: '96%', icon: ShieldCheck },
];

const PredictionPage = () => {
  return (
    <div className="min-h-screen bg-[#f4f4f1] text-[#1c1c1c]">
      <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8">
        <section className="mb-8 pt-2 text-center">
          <div className="inline-flex items-center justify-center gap-3 rounded-full border-b border-[#1d9d4c] pb-2">
            <span className="text-[11px] text-[#1c1c1c] opacity-80">شارك توقعك</span>
          </div>
          <h1 className="mt-3 text-3xl font-bold text-[#0d0d0d] md:text-5xl">اختر المباراة وادخل توقعك</h1>
          <div className="mx-auto mt-4 h-[2px] w-28 bg-[#1d9d4c]" />
        </section>

        <div className="mb-8">
          <div className="grid gap-5 md:grid-cols-3">
            {featuredStats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="rounded-[26px] border border-[#dbe9e0] bg-white p-5 text-center shadow-[0_8px_18px_rgba(20,117,61,0.06)]">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#ecf8f0] text-[#1d9d4c]">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-2xl font-extrabold text-[#0d0d0d]">{value}</div>
                <div className="mt-1 text-sm text-[#5a5a5a]">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {mockMatches.map((match, index) => (
            <article
              key={match.id}
              className="rounded-[30px] border-[3px] border-[#1a9e58] bg-white p-4 shadow-[0_8px_18px_rgba(20,117,61,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(20,117,61,0.12)] sm:p-5"
            >
              <Link to={`/prediction/${match.id}`} className="block">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="rounded-full bg-[#eef9f1] px-3 py-1 text-xs font-bold text-[#1d9d4c]">
                    {match.league}
                  </div>
                  <div className="text-right text-base font-bold leading-relaxed text-[#1a1a1a] md:text-[1.1rem]">
                    {index + 1} · المباراة القادمة
                  </div>
                </div>

                <div className="mb-5 rounded-[24px] bg-[#f5faf6] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-1 flex-col items-center">
                      <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-[#e7f7ed] text-lg font-black text-[#1d9d4c] shadow-sm">
                        {match.homeTeamAbbr}
                      </div>
                      <span className="text-center text-base font-bold text-[#1a1a1a]">{match.homeTeam}</span>
                    </div>

                    <div className="px-3 text-2xl font-black text-[#8a8a8a]">VS</div>

                    <div className="flex flex-1 flex-col items-center">
                      <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-[#f2f3f4] text-lg font-black text-[#505050] shadow-sm">
                        {match.awayTeamAbbr}
                      </div>
                      <span className="text-center text-base font-bold text-[#1a1a1a]">{match.awayTeam}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-5 space-y-2 rounded-[20px] bg-[#fbfbfa] p-3 text-sm text-[#4b4b4b]">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">التاريخ</span>
                    <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-[#1d9d4c]" />{match.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">الوقت</span>
                    <span className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#1d9d4c]" />{match.time}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center justify-center gap-2 rounded-[16px] bg-[#1a9b58] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#147d48]">
                    سجل توقعك
                    <ArrowLeft className="h-4 w-4" />
                  </span>
                  <div className="rounded-full bg-[#f3f4f1] px-3 py-2 text-xs font-bold text-[#0d0d0d]">
                    توقع العميل
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="my-10 flex justify-center">
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1a9b58] px-6 py-3 text-lg font-bold text-white shadow-sm transition hover:bg-[#147d48]">
            عرض جميع المباريات
            <ArrowLeft className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PredictionPage;
