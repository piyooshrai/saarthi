import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScreenLayout } from '../components/ScreenLayout';
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
    <ScreenLayout backgroundImage="/assets/mascot/mascot-time.png">
      {/* Top content - headline */}
      <div className="text-center animate-fade-in pt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight text-shadow-lg italic">
          How much time<br />can you dedicate<br />daily?
        </h1>
        <p className="text-lg md:text-xl text-white/95 mt-3 font-medium text-shadow">
          We'll tailor your lessons to fit your schedule.
        </p>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom content - time options and button */}
      <div className="w-full max-w-md animate-slide-up pb-8">
        <div className="flex justify-center gap-3 mb-6">
          {timeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`time-card flex-1 flex flex-col items-center py-4 px-3 ${
                selected === option.value ? 'selected' : ''
              }`}
            >
              <span className="text-3xl md:text-4xl font-extrabold text-[#1a7a6e]">
                {option.label}
              </span>
              <span className="text-sm font-bold text-gray-700">minutes</span>
              <span className="text-xs text-gray-500">a day</span>
              <span className="text-xs text-gray-600 mt-2 font-semibold">
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
