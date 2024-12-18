import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import InputField from './InputField';
import ValidationError from '../../support/components/ValidationError';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { resetPassword, isLoading } = useAuth();

  const validateEmail = () => {
    if (!email) {
      return 'Email is required';
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return 'Please enter a valid email address';
    }
    return undefined;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);

    const error = validateEmail();
    if (!error) {
      await resetPassword(email);
      setIsSubmitted(true);
    }
  };

  const error = touched ? validateEmail() : undefined;

  if (isSubmitted) {
    return (
      <div className="w-full max-w-md text-center">
        <div className="rounded-full bg-green-100 dark:bg-green-900/20 p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4">
          <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-2">
          Check your email
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          We've sent password reset instructions to {email}
        </p>
        <Link
          to="/login"
          className="inline-flex items-center text-sm text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to sign in
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <img 
          src="https://hdccdn.blob.core.windows.net/brand/hdc/HDCLOGO-01.png"
          alt="HDC Logo"
          className="h-12 mx-auto mb-6"
        />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-display">
          Forgot password?
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          No worries, we'll send you reset instructions
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <InputField
          type="email"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched(true)}
          icon={Mail}
          error={error}
          required
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Sending...' : 'Reset password'}
        </button>

        <Link
          to="/login"
          className="block text-center text-sm text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
        >
          <span className="inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to sign in
          </span>
        </Link>
      </form>
    </div>
  );
}