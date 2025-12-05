import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScreenLayout } from '../components/ScreenLayout';
import { Mascot } from '../components/Mascot';
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
      navigate('/lesson-intro');
    }
  };

  return (
    <ScreenLayout>
      <div className="text-center mb-4 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight italic">
          What's your goal?
        </h1>
        <p className="text-lg text-white/90">
          You can change this anytime.
        </p>
      </div>

      <div className="w-48 h-48 md:w-56 md:h-56 mb-6">
        <Mascot variant="goal" />
      </div>

      <div className="w-full max-w-md animate-slide-up">
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex gap-3">
            {goals.slice(0, 2).map((goal) => (
              <button
                key={goal.id}
                onClick={() => handleSelect(goal.id)}
                className={`btn-secondary flex-1 py-4 ${
                  selected === goal.id ? 'selected' : ''
                }`}
              >
                {goal.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => handleSelect(goals[2].id)}
            className={`btn-secondary w-full py-4 ${
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
