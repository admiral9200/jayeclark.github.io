interface Milestone {
  date: string;
  weight: number;
  topics: string;
}

interface MilestoneGroup {
  name: string;
  fullname: string;
  description: string;
  completed: string;
  milestones: Array<Milestone>;
}

type TrainingMatrix = Array<MilestoneGroup>;
declare module "@/scripts/training.js" {
  const trainingMatrix: TrainingMatrix;
}
