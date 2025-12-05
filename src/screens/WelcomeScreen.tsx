import { useNavigate } from 'react-router-dom';
import { ScreenLayout } from '../components/ScreenLayout';
import { useOnboarding } from '../context/OnboardingContext';

export function WelcomeScreen() {
  const navigate = useNavigate();
  const { setRole } = useOnboarding();

  const handleRoleSelect = (role: 'learner' | 'recruiter') => {
    setRole(role);
    if (role === 'learner') {
      navigate('/career-path');
    } else {
      navigate('/recruiter-dashboard');
    }
  };

  return (
    <ScreenLayout mascotImage="/assets/mascot/mascot-egg.png">
      {/* Top content - headline */}
      <div className="text-center animate-fade-in pt-12 md:pt-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight text-shadow-lg italic">
          Transform<br />Your Career
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mt-4 font-medium text-shadow italic">
          One habit at a time.
        </p>
      </div>

      {/* Spacer to push buttons to bottom */}
      <div className="flex-1" />

      {/* Bottom buttons */}
      <div className="w-full max-w-md flex gap-4 animate-slide-up pb-10">
        <button
          onClick={() => handleRoleSelect('learner')}
          className="btn-learner flex-1"
        >
          I'm a Learner
        </button>
        <button
          onClick={() => handleRoleSelect('recruiter')}
          className="btn-recruiter flex-1"
        >
          I'm a Recruiter
        </button>
      </div>
    </ScreenLayout>
  );
}
