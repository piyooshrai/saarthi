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
      <div className="text-center mb-6 animate-fade-in pt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight text-shadow-lg italic">
          How much time<br />can you dedicate<br />daily?
        </h1>
        <p className="text-lg md:text-xl text-white/95 font-medium text-shadow">
          We'll tailor your lessons to fit your schedule.
        </p>
      </div>

      <div className="w-56 h-56 md:w-72 md:h-72 mb-8">
        <Mascot variant="time" />
      </div>

      <div className="w-full max-w-md animate-slide-up pb-8">
        <div className="flex justify-center gap-4 mb-8">
          {timeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`time-card flex-1 flex flex-col items-center py-5 px-4 ${
                selected === option.value ? 'selected' : ''
              }`}
            >
              <span className="text-4xl md:text-5xl font-extrabold text-[#1a7a6e]">
                {option.label}
              </span>
              <span className="text-sm font-semibold text-gray-700 mt-1">minutes</span>
              <span className="text-xs text-gray-500">a day</span>
              <span className="text-xs text-gray-600 mt-3 font-semibold">
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
