/**
 * Prediction Service
 * 
 * This service handles prediction submissions.
 * Currently uses localStorage for demo purposes.
 * 
 * TODO: Replace with actual backend API call to:
 * POST /api/predictions
 * {
 *   matchId: number,
 *   winner: 'home' | 'draw' | 'away',
 *   homeScore: number,
 *   awayScore: number
 * }
 */

export const submitPrediction = async (prediction) => {
  // TODO: Replace with actual backend API call
  // const response = await fetch('/api/predictions', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`,
  //   },
  //   body: JSON.stringify(prediction),
  // });
  // return response.json();

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'تم تسجيل توقعك بنجاح',
        data: prediction,
      });
    }, 500);
  });
};

export const validatePrediction = (prediction) => {
  const errors = [];

  if (!prediction.winner) {
    errors.push('يرجى اختيار الفريق المتوقع فوزه');
  }

  if (prediction.homeScore === null || prediction.homeScore === undefined) {
    errors.push('يرجى إدخال نتيجة الفريق الأول');
  }

  if (prediction.awayScore === null || prediction.awayScore === undefined) {
    errors.push('يرجى إدخال نتيجة الفريق الثاني');
  }

  if (prediction.homeScore < 0 || prediction.awayScore < 0) {
    errors.push('النتائج يجب أن تكون أرقام موجبة');
  }

  if (!Number.isInteger(prediction.homeScore) || !Number.isInteger(prediction.awayScore)) {
    errors.push('النتائج يجب أن تكون أرقام صحيحة');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
