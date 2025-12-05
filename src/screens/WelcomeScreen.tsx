import { useNavigate } from 'react-router-dom';
import { ScreenLayout } from '../components/ScreenLayout';
import { Mascot } from '../components/Mascot';
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
    <ScreenLayout>
      <div className="flex-1 flex flex-col items-center justify-center text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
          Transform<br />Your Career
        </h1>
        <p className="text-xl text-white/90 mb-8">
          One habit at a time.
        </p>

        <div className="w-64 h-64 md:w-80 md:h-80 mb-8">
          <Mascot variant="egg" />
        </div>
      </div>

      <div className="w-full max-w-md flex gap-4 animate-slide-up">
        <button
          onClick={() => handleRoleSelect('learner')}
          className="flex-1 bg-saarthi-teal text-white rounded-3xl py-4 px-6 font-semibold text-lg transition-all hover:bg-teal-700 hover:-translate-y-0.5 active:translate-y-0"
        >
          I'm a Learner
        </button>
        <button
          onClick={() => handleRoleSelect('recruiter')}
          className="flex-1 bg-amber-400 text-gray-900 rounded-3xl py-4 px-6 font-semibold text-lg transition-all hover:bg-amber-300 hover:-translate-y-0.5 active:translate-y-0"
        >
          I'm a Recruiter
        </button>
      </div>
    </ScreenLayout>
  );
}
