export function checkEligibility(data) {
  const { age, education, language } = data;

  const isEligible =
    parseInt(age) >= 19 &&
    ['Bachelor’s Degree', 'Master’s Degree'].includes(education) &&
    language === 'Yes';

  return {
    eligible: isEligible,
    message: isEligible
      ? 'You are likely eligible for a Canadian Student Visa! Please consult an immigration expert for confirmation.'
      : 'Based on your inputs, you may not meet the eligibility criteria for a Canadian Student Visa. Contact an immigration expert for detailed advice.',
  };
}