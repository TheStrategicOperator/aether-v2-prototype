import { getRecommendation, Answers } from "./recommendationEngine";

export function runAetherScan(answers: Answers) {

  const result = getRecommendation(answers);

  return {
    recommendedStructure: result.primary.structure,
    alternativeStructure: result.alternative.structure,
    reasons: result.primary.reasons
  };

}
