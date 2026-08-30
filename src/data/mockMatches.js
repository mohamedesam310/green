export const mockMatches = [
  {
    id: 1,
    homeTeam: "الهلال",
    awayTeam: "الاتحاد",
    homeTeamAbbr: "AHU",
    awayTeamAbbr: "AAU",
    date: "2024-09-02",
    time: "21:00",
    league: "الدوري السعودي",
  },
  {
    id: 2,
    homeTeam: "النصر",
    awayTeam: "الشباب",
    homeTeamAbbr: "ANS",
    awayTeamAbbr: "ASH",
    date: "2024-09-03",
    time: "19:30",
    league: "الدوري السعودي",
  },
  {
    id: 3,
    homeTeam: "الفيحاء",
    awayTeam: "الأهلي",
    homeTeamAbbr: "AFH",
    awayTeamAbbr: "AAH",
    date: "2024-09-04",
    time: "18:00",
    league: "الدوري السعودي",
  },
  {
    id: 4,
    homeTeam: "العين",
    awayTeam: "الرياض",
    homeTeamAbbr: "AEN",
    awayTeamAbbr: "ARD",
    date: "2024-09-05",
    time: "20:00",
    league: "الدوري السعودي",
  },
  {
    id: 5,
    homeTeam: "الفتح",
    awayTeam: "التعاون",
    homeTeamAbbr: "AFT",
    awayTeamAbbr: "ATP",
    date: "2024-09-06",
    time: "19:00",
    league: "الدوري السعودي",
  },
  {
    id: 6,
    homeTeam: "أبها",
    awayTeam: "الخليج",
    homeTeamAbbr: "ABH",
    awayTeamAbbr: "AKL",
    date: "2024-09-07",
    time: "18:30",
    league: "الدوري السعودي",
  },
];

// Simulated predictions storage (in real app, would come from backend)
export const getPredictionsFromStorage = () => {
  const stored = localStorage.getItem('predictions');
  return stored ? JSON.parse(stored) : {};
};

export const savePredictionToStorage = (userId, matchId, prediction) => {
  const predictions = getPredictionsFromStorage();
  if (!predictions[userId]) {
    predictions[userId] = {};
  }
  predictions[userId][matchId] = prediction;
  localStorage.setItem('predictions', JSON.stringify(predictions));
};

export const getUserPredictionForMatch = (userId, matchId) => {
  const predictions = getPredictionsFromStorage();
  return predictions[userId]?.[matchId] || null;
};
