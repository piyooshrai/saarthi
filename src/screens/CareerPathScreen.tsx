import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScreenLayout } from '../components/ScreenLayout';
import { Mascot } from '../components/Mascot';
import { useOnboarding } from '../context/OnboardingContext';
import type { CareerPath } from '../types';

const careerPaths: { id: CareerPath; label: string }[] = [
  { id: 'software-development', label: 'Software Development' },
  { id: 'cloud-engineering', label: 'Cloud Engineering' },
  { id: 'data-analytics', label: 'Data Analytics' },
  { id: 'ai-ml', label: 'AI & Machine Learning' },
  { id: 'ui-ux-design', label: 'UI/UX Design' },
  { id: 'healthcare-support', label: 'Healthcare Support' },
  { id: 'customer-service', label: 'Customer Service' },
  { id: 'digital-marketing', label: 'Digital Marketing' },
];

export function CareerPathScreen() {
  const navigate = useNavigate();
  const { setCareerPath } = useOnboarding();
  const [selected, setSelected] = useState<CareerPath | null>(null);

  const handleSelect = (path: CareerPath) => {
    setSelected(path);
    setCareerPath(path);
    // Auto-navigate after selection with a brief delay for visual feedback
    setTimeout(() => {
      navigate('/time-commitment');
    }, 300);
  };

  return (
    <ScreenLayout>
      <div className="text-center mb-4 animate-fade-in pt-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight text-shadow-lg italic">
          What would you<br />like to become?
        </h1>
        <p className="text-lg md:text-xl text-white/95 font-medium text-shadow">
          Pick one to start—you can change paths anytime.
        </p>
      </div>

      <div className="w-48 h-48 md:w-64 md:h-64 mb-6">
        <Mascot variant="career" />
      </div>

      <div className="w-full max-w-md grid grid-cols-2 gap-3 animate-slide-up pb-8">
        {careerPaths.map((path) => (
          <button
            key={path.id}
            onClick={() => handleSelect(path.id)}
            className={`btn-secondary py-4 px-5 text-sm md:text-base font-semibold transition-all ${
              selected === path.id ? 'selected' : ''
            }`}
          >
            {path.label}
          </button>
        ))}
      </div>
    </ScreenLayout>
  );
}
