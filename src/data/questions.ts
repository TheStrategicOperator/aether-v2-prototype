export type QuestionOption = {
  label: string;
  value: string;
};

export type Question = {
  id: string;
  question: string;
  options: QuestionOption[];
};

export const questions: Question[] = [
  {
    id: "founderCount",
    question: "Are you starting this business alone or with others?",
    options: [
      { label: "Just me", value: "solo" },
      { label: "Two founders", value: "two" },
      { label: "Three or more founders", value: "multiple" }
    ]
  },
  {
    id: "location",
    question: "Where will this business operate?",
    options: [
      { label: "United States", value: "us" },
      { label: "Outside the US", value: "international" }
    ]
  },
  {
    id: "revenueStage",
    question: "Are you already making money?",
    options: [
      { label: "No revenue yet", value: "none" },
      { label: "Some early revenue", value: "early" },
      { label: "Consistent revenue", value: "established" }
    ]
  },
  {
    id: "expectedRevenue",
    question: "What revenue range do you expect in the next 12 months?",
    options: [
      { label: "Under $10k", value: "low" },
      { label: "$10k–$50k", value: "moderate" },
      { label: "$50k+", value: "high" },
      { label: "Not sure yet", value: "unknown" }
    ]
  },
  {
    id: "liabilityConcern",
    question: "How important is personal liability protection?",
    options: [
      { label: "Not very important", value: "low" },
      { label: "Moderately important", value: "medium" },
      { label: "Very important", value: "high" }
    ]
  },
  {
    id: "investorIntent",
    question: "Do you plan to raise money from investors?",
    options: [
      { label: "No", value: "no" },
      { label: "Maybe later", value: "maybe" },
      { label: "Yes, definitely", value: "yes" }
    ]
  },
  {
    id: "hiringPlan",
    question: "Do you expect to hire people soon?",
    options: [
      { label: "No hiring planned", value: "none" },
      { label: "Contractors only", value: "contractors" },
      { label: "Employees likely", value: "employees" }
    ]
  },
  {
    id: "priority",
    question: "What matters most to you right now?",
    options: [
      { label: "Simplicity", value: "simplicity" },
      { label: "Liability protection", value: "protection" },
      { label: "Flexibility", value: "flexibility" },
      { label: "Growth and fundraising", value: "growth" }
    ]
  }
];
