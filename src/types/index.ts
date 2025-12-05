export type UserRole = 'learner' | 'recruiter' | null;

export type CareerPath =
  | 'software-development'
  | 'cloud-engineering'
  | 'data-analytics'
  | 'ai-ml'
  | 'ui-ux-design'
  | 'healthcare-support'
  | 'customer-service'
  | 'digital-marketing';

export type TimeCommitment = 5 | 15 | 30;

export type Goal =
  | 'first-job'
  | 'switch-role'
  | 'learn-skills';

export interface UserPreferences {
  role: UserRole;
  careerPath: CareerPath | null;
  timeCommitment: TimeCommitment | null;
  goal: Goal | null;
}

export interface OnboardingContextType {
  preferences: UserPreferences;
  setRole: (role: UserRole) => void;
  setCareerPath: (path: CareerPath) => void;
  setTimeCommitment: (time: TimeCommitment) => void;
  setGoal: (goal: Goal) => void;
  resetPreferences: () => void;
}
