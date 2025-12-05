import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OnboardingProvider } from './context/OnboardingContext';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { CareerPathScreen } from './screens/CareerPathScreen';
import { TimeCommitmentScreen } from './screens/TimeCommitmentScreen';
import { GoalScreen } from './screens/GoalScreen';
import { AccountCreationScreen } from './screens/AccountCreationScreen';
import { LessonIntroScreen } from './screens/LessonIntroScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { RecruiterDashboardScreen } from './screens/RecruiterDashboardScreen';

function App() {
  return (
    <BrowserRouter>
      <OnboardingProvider>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/career-path" element={<CareerPathScreen />} />
          <Route path="/time-commitment" element={<TimeCommitmentScreen />} />
          <Route path="/goal" element={<GoalScreen />} />
          <Route path="/account-creation" element={<AccountCreationScreen />} />
          <Route path="/lesson-intro" element={<LessonIntroScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/recruiter-dashboard" element={<RecruiterDashboardScreen />} />
        </Routes>
        <PWAInstallPrompt />
      </OnboardingProvider>
    </BrowserRouter>
  );
}

export default App;
