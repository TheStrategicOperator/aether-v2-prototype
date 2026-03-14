import { runAetherScan } from "./logic/runAetherScan";

const founderAnswers = {
  founderCount: "solo",
  location: "us",
  revenueStage: "none",
  expectedRevenue: "moderate",
  liabilityConcern: "high",
  investorIntent: "maybe",
  hiringPlan: "contractors",
  priority: "protection"
};

const result = runAetherScan(founderAnswers);

console.log("AETHER Recommendation:");
console.log(result);
