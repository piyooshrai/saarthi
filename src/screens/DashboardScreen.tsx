import { ScreenLayout } from '../components/ScreenLayout';
import { Mascot } from '../components/Mascot';
import { useOnboarding } from '../context/OnboardingContext';

const careerPathLabels: Record<string, string> = {
  'software-development': 'Software Development',
  'cloud-engineering': 'Cloud Engineering',
  'data-analytics': 'Data Analytics',
  'ai-ml': 'AI & Machine Learning',
  'ui-ux-design': 'UI/UX Design',
  'healthcare-support': 'Healthcare Support',
  'customer-service': 'Customer Service',
  'digital-marketing': 'Digital Marketing',
};

export function DashboardScreen() {
  const { preferences } = useOnboarding();

  return (
    <ScreenLayout>
      <div className="w-full max-w-md animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Welcome back!
            </h1>
            <p className="text-white/80">
              {preferences.careerPath
                ? careerPathLabels[preferences.careerPath]
                : 'Your learning journey'}
            </p>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>

        {/* Progress Card */}
        <div className="card mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16">
              <Mascot variant="celebration" className="!animate-none" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600">Day 1 Progress</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-saarthi-teal h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">0/5 lessons completed</p>
            </div>
          </div>
        </div>

        {/* Current Lesson */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white mb-3">Continue Learning</h2>
          <div className="card cursor-pointer hover:scale-[1.02] transition-transform">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-saarthi-teal/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">1</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Introductions</h3>
                <p className="text-sm text-gray-600">Master self-introduction</p>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="card text-center py-4">
            <p className="text-2xl font-bold text-saarthi-teal">0</p>
            <p className="text-xs text-gray-600">Day Streak</p>
          </div>
          <div className="card text-center py-4">
            <p className="text-2xl font-bold text-saarthi-teal">0</p>
            <p className="text-xs text-gray-600">XP Earned</p>
          </div>
          <div className="card text-center py-4">
            <p className="text-2xl font-bold text-saarthi-teal">
              {preferences.timeCommitment || 15}
            </p>
            <p className="text-xs text-gray-600">Min/Day</p>
          </div>
        </div>

        {/* Daily Goal Reminder */}
        <div className="bg-white/10 rounded-2xl p-4 text-center">
          <p className="text-white/90 text-sm">
            Your goal: <span className="font-semibold">
              {preferences.goal === 'first-job' && 'Get your first job'}
              {preferences.goal === 'switch-role' && 'Switch to a better role'}
              {preferences.goal === 'learn-skills' && 'Learn new skills'}
              {!preferences.goal && 'Set your career goal'}
            </span>
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="w-full max-w-md mt-6">
        <div className="bg-white/20 backdrop-blur rounded-2xl p-2 flex justify-around">
          <button className="flex flex-col items-center p-2 text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center p-2 text-white/60">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-xs mt-1">Learn</span>
          </button>
          <button className="flex flex-col items-center p-2 text-white/60">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-xs mt-1">Progress</span>
          </button>
          <button className="flex flex-col items-center p-2 text-white/60">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </div>
    </ScreenLayout>
  );
}
