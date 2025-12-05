import { ScreenLayout } from '../components/ScreenLayout';

export function RecruiterDashboardScreen() {
  return (
    <ScreenLayout>
      <div className="flex-1 flex flex-col items-center justify-center text-center animate-fade-in">
        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">
          Recruiter Dashboard
        </h1>
        <p className="text-lg text-white/90 max-w-md">
          Coming soon! We're building tools to help you find the best talent trained through Saarthi.
        </p>
      </div>

      <div className="w-full max-w-md animate-slide-up">
        <div className="bg-white/10 rounded-2xl p-6 text-center">
          <p className="text-white/80 text-sm mb-4">
            Want early access? Join our waitlist.
          </p>
          <button className="btn-primary">
            Join Waitlist
          </button>
        </div>
      </div>
    </ScreenLayout>
  );
}
