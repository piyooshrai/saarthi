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
      <div className="flex-1 flex flex-col items-center justify-center text-center animate-fade-in pt-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 leading-tight text-shadow-lg">
          Transform<br />Your Career
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-10 font-medium text-shadow">
          One habit at a time.
        </p>

        <div className="w-72 h-72 md:w-96 md:h-96 mb-8">
          <Mascot variant="egg" />
        </div>
      </div>

      <div className="w-full max-w-md flex gap-4 animate-slide-up pb-8">
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
