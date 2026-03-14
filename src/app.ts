import { runAetherScan } from "./logic/runAetherScan";

const demoAnswers = {
  founderCount: "solo",
  location: "us",
  revenueStage: "none",
  expectedRevenue: "moderate",
  liabilityConcern: "high",
  investorIntent: "maybe",
  hiringPlan: "contractors",
  priority: "protection"
};

const result = runAetherScan(demoAnswers);

export function startAether() {
  console.log("AETHER V3 TESTER BUILD");
  console.log(result);
}
