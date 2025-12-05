import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScreenLayout } from '../components/ScreenLayout';

export function AccountCreationScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    emailOrPhone: '',
    password: '',
    otp: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    // In a real app, validate and submit the form
    navigate('/lesson-intro');
  };

  const isFormValid = formData.fullName && formData.emailOrPhone && formData.password;

  return (
    <ScreenLayout mascotImage="/assets/mascot/mascot-egg.png">
      {/* Top content - headline */}
      <div className="text-center animate-fade-in pt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight text-shadow-lg">
          Create your<br />Saarthi account
        </h1>
        <p className="text-lg md:text-xl text-white/95 mt-3 font-medium text-shadow">
          Just a few details to get you started.
        </p>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom content - form */}
      <div className="w-full max-w-md animate-slide-up pb-8">
        <div className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Email or Phone Number"
            value={formData.emailOrPhone}
            onChange={(e) => handleChange('emailOrPhone', e.target.value)}
            className="input-field"
          />
          <div className="flex gap-3">
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              className="input-field flex-1"
            />
            <input
              type="text"
              placeholder="Enter OTP"
              value={formData.otp}
              onChange={(e) => handleChange('otp', e.target.value)}
              className="input-field flex-1"
            />
          </div>
        </div>

        <button
          onClick={handleContinue}
          disabled={!isFormValid}
          className={`btn-primary w-full flex items-center justify-center gap-2 ${
            !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Continue
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

        <p className="text-center mt-6 text-white/90 font-medium">
          Already have an account?{' '}
          <button className="text-[#1a7a6e] font-bold underline hover:text-[#156158]">
            Login
          </button>
        </p>
      </div>
    </ScreenLayout>
  );
}
