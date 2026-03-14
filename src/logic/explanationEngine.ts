import { Recommendation } from "./recommendationEngine";

export function buildExplanation(result: Recommendation) {

  const explanations: Record<string,string> = {
    "LLC":
      "An LLC provides liability protection while remaining simple to operate. It is often the best balance for early-stage founders.",
    "Sole Proprietorship":
      "A sole proprietorship is the simplest structure but offers no liability protection. It can work for very small or experimental ventures.",
    "Partnership":
      "A partnership may work when multiple founders are involved and the business remains small and collaborative.",
    "Corporation (C-Corp path)":
      "A corporation structure is typically chosen when raising outside investment or planning for rapid scale."
  };

  return explanations[result.structure] || "AETHER recommends this structure based on your answers.";
}
