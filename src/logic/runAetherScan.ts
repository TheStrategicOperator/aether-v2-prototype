import { getRecommendation, Answers } from "./recommendationEngine";
import { buildExplanation } from "./explanationEngine";
export function runAetherScan(answers: Answers) {

  const result = getRecommendation(answers);
const explanation = buildExplanation(result.primary);
  return {
    recommendedStructure: result.primary.structure,
    alternativeStructure: result.alternative.structure,
    explanation
  };

}
