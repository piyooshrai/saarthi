import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type {
  UserPreferences,
  OnboardingContextType,
  UserRole,
  CareerPath,
  TimeCommitment,
  Goal
} from '../types';

const defaultPreferences: UserPreferences = {
  role: null,
  careerPath: null,
  timeCommitment: null,
  goal: null,
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences);

  const setRole = (role: UserRole) => {
    setPreferences(prev => ({ ...prev, role }));
  };

  const setCareerPath = (careerPath: CareerPath) => {
    setPreferences(prev => ({ ...prev, careerPath }));
  };

  const setTimeCommitment = (timeCommitment: TimeCommitment) => {
    setPreferences(prev => ({ ...prev, timeCommitment }));
  };

  const setGoal = (goal: Goal) => {
    setPreferences(prev => ({ ...prev, goal }));
  };

  const resetPreferences = () => {
    setPreferences(defaultPreferences);
  };

  return (
    <OnboardingContext.Provider
      value={{
        preferences,
        setRole,
        setCareerPath,
        setTimeCommitment,
        setGoal,
        resetPreferences
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
}
