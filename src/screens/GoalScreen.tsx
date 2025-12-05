import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScreenLayout } from '../components/ScreenLayout';
import { useOnboarding } from '../context/OnboardingContext';
import type { Goal } from '../types';

const goals: { id: Goal; label: string }[] = [
  { id: 'first-job', label: 'Get my first job' },
  { id: 'switch-role', label: 'Switch to a better role' },
  { id: 'learn-skills', label: 'Learn new skills for current job' },
];

export function GoalScreen() {
  const navigate = useNavigate();
  const { setGoal } = useOnboarding();
  const [selected, setSelected] = useState<Goal | null>(null);

  const handleSelect = (goal: Goal) => {
    setSelected(goal);
    setGoal(goal);
  };

  const handleContinue = () => {
    if (selected) {
      navigate('/account-creation');
    }
  };

  return (
    <ScreenLayout backgroundImage="/assets/mascot/mascot-goal.png">
      {/* Top content - headline */}
      <div className="text-center animate-fade-in pt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight text-shadow-lg italic">
          What's your goal?
        </h1>
        <p className="text-lg md:text-xl text-white/95 mt-3 font-medium text-shadow">
          You can change this anytime.
        </p>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom content - options and button */}
      <div className="w-full max-w-md animate-slide-up pb-8">
        <div className="flex flex-col gap-3 mb-6">
          <div className="flex gap-3">
            {goals.slice(0, 2).map((goal) => (
              <button
                key={goal.id}
                onClick={() => handleSelect(goal.id)}
                className={`btn-secondary flex-1 py-4 text-base font-bold ${
                  selected === goal.id ? 'selected' : ''
                }`}
              >
                {goal.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => handleSelect(goals[2].id)}
            className={`btn-secondary w-full py-4 text-base font-bold ${
              selected === goals[2].id ? 'selected' : ''
            }`}
          >
            {goals[2].label}
          </button>
        </div>

        <button
          onClick={handleContinue}
          disabled={!selected}
          className={`btn-primary w-full ${
            !selected ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Continue
        </button>
      </div>
    </ScreenLayout>
  );
}
