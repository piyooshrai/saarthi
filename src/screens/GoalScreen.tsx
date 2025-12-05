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
      navigate('/account-creation');
    }
  };

  return (
    <ScreenLayout>
      <div className="text-center mb-6 animate-fade-in pt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight text-shadow-lg italic">
          What's your goal?
        </h1>
        <p className="text-lg md:text-xl text-white/95 font-medium text-shadow">
          You can change this anytime.
        </p>
      </div>

      <div className="w-56 h-56 md:w-72 md:h-72 mb-8">
        <Mascot variant="goal" />
      </div>

      <div className="w-full max-w-md animate-slide-up pb-8">
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex gap-4">
            {goals.slice(0, 2).map((goal) => (
              <button
                key={goal.id}
                onClick={() => handleSelect(goal.id)}
                className={`btn-secondary flex-1 py-5 text-base font-semibold ${
                  selected === goal.id ? 'selected' : ''
                }`}
              >
                {goal.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => handleSelect(goals[2].id)}
            className={`btn-secondary w-full py-5 text-base font-semibold ${
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
