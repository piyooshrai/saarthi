import { useNavigate } from 'react-router-dom';
import { ScreenLayout } from '../components/ScreenLayout';
import { Confetti } from '../components/Confetti';

export function LessonIntroScreen() {
  const navigate = useNavigate();

  const handleStartChallenge = () => {
    navigate('/dashboard');
  };

  return (
    <ScreenLayout mascotImage="/assets/mascot/mascot-celebration.png">
      <Confetti />

      {/* Top content - headline */}
      <div className="text-center animate-fade-in pt-8">
        <p className="text-lg text-white/95 mb-2 font-semibold text-shadow">
          Day 1 · Lesson 1
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight text-shadow-lg italic">
          Introductions
        </h1>
        <p className="text-lg md:text-xl text-white/95 mt-4 font-medium text-shadow">
          Master the art of introducing<br />yourself with confidence.
        </p>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom content - button */}
      <div className="w-full max-w-md animate-slide-up pb-10">
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
