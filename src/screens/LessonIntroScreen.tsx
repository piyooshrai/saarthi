import { useNavigate } from 'react-router-dom';
import { ScreenLayout } from '../components/ScreenLayout';
import { Mascot } from '../components/Mascot';
import { Confetti } from '../components/Confetti';

export function LessonIntroScreen() {
  const navigate = useNavigate();

  const handleStartChallenge = () => {
    navigate('/dashboard');
  };

  return (
    <ScreenLayout>
      <Confetti />

      <div className="text-center mb-6 animate-fade-in pt-8">
        <p className="text-lg text-white/95 mb-2 font-semibold text-shadow">
          Day 1 · Lesson 1
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight text-shadow-lg">
          Introductions
        </h1>
        <p className="text-lg md:text-xl text-white/95 font-medium text-shadow">
          Master the art of introducing<br />yourself with confidence.
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80">
            <Mascot variant="celebration" />
          </div>
          {/* Gold coin/star decoration */}
          <div className="absolute -right-4 bottom-8 w-14 h-14 bg-amber-400 rounded-full flex items-center justify-center shadow-lg animate-bounce-in">
            <svg
              className="w-7 h-7 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md animate-slide-up pb-8">
        <button
          onClick={handleStartChallenge}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          Start Challenge
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </ScreenLayout>
  );
}
