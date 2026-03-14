export type Answers = {
  founderCount: string;
  location: string;
  revenueStage: string;
  expectedRevenue: string;
  liabilityConcern: string;
  investorIntent: string;
  hiringPlan: string;
  priority: string;
};

export type Recommendation = {
  structure: string;
  score: number;
  reasons: string[];
};

export function getRecommendation(answers: Answers) {
  const scores: Record<string, Recommendation> = {
    soleProp: { structure: "Sole Proprietorship", score: 0, reasons: [] },
    llc: { structure: "LLC", score: 0, reasons: [] },
    partnership: { structure: "Partnership", score: 0, reasons: [] },
    corporation: { structure: "Corporation (C-Corp path)", score: 0, reasons: [] }
  };

  if (answers.founderCount === "solo") {
    scores.soleProp.score += 1;
    scores.llc.score += 2;
  }

  if (answers.founderCount === "two" || answers.founderCount === "multiple") {
    scores.partnership.score += 2;
    scores.llc.score += 2;
  }

  if (answers.liabilityConcern === "high") {
    scores.llc.score += 3;
    scores.corporation.score += 2;
    scores.llc.reasons.push("You indicated strong concern about personal liability.");
  }

  if (answers.investorIntent === "yes") {
    scores.corporation.score += 4;
    scores.corporation.reasons.push("You plan to raise investor funding.");
  }

  if (answers.priority === "simplicity") {
    scores.soleProp.score += 2;
  }

  if (answers.priority === "growth") {
    scores.corporation.score += 2;
  }

  if (answers.priority === "protection") {
    scores.llc.score += 2;
  }

  const sorted = Object.values(scores).sort((a, b) => b.score - a.score);

  return {
    primary: sorted[0],
    alternative: sorted[1]
  };
}
