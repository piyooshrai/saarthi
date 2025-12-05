import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScreenLayout } from '../components/ScreenLayout';
import { Mascot } from '../components/Mascot';
import { useOnboarding } from '../context/OnboardingContext';
import type { TimeCommitment } from '../types';

const timeOptions: { value: TimeCommitment; label: string; description: string }[] = [
  { value: 5, label: '5', description: 'Quick & consistent' },
  { value: 15, label: '15', description: 'Balanced progress' },
  { value: 30, label: '30', description: 'Full focus mode' },
];

export function TimeCommitmentScreen() {
  const navigate = useNavigate();
  const { setTimeCommitment } = useOnboarding();
  const [selected, setSelected] = useState<TimeCommitment | null>(null);

  const handleSelect = (time: TimeCommitment) => {
    setSelected(time);
    setTimeCommitment(time);
  };

  const handleContinue = () => {
    if (selected) {
      navigate('/goal');
    }
  };

  return (
    <ScreenLayout>
      <div className="text-center mb-4 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight italic">
          How much time<br />can you dedicate<br />daily?
        </h1>
        <p className="text-lg text-white/90">
          We'll tailor your lessons to fit your schedule.
        </p>
      </div>

      <div className="w-48 h-48 md:w-56 md:h-56 mb-6">
        <Mascot variant="time" />
      </div>

      <div className="w-full max-w-md animate-slide-up">
        <div className="flex justify-center gap-4 mb-8">
          {timeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`card flex-1 flex flex-col items-center py-4 px-3 cursor-pointer ${
                selected === option.value ? 'selected' : ''
              }`}
            >
              <span className="text-3xl md:text-4xl font-bold text-saarthi-teal">
                {option.label}
              </span>
              <span className="text-sm text-gray-700">minutes</span>
              <span className="text-xs text-gray-500">a day</span>
              <span className="text-xs text-gray-600 mt-2 font-medium">
                {option.description}
              </span>
            </button>
          ))}
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
