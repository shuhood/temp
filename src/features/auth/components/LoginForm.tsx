import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Lock, LogIn } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import InputField from './InputField';
import { ValidationError } from '../../../components/common/forms';

interface FormErrors {
  userName?: string;
  password?: string;
}

export default function LoginForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState({ userName: false, password: false });
  const { login, isLoading, error } = useAuth();

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    
    if (!userName.trim()) {
      errors.userName = 'Username is required';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({ userName: true, password: true });

    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      await login(userName, password);
    }
  };

  const handleBlur = (field: keyof typeof touched) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const errors = validateForm();

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <img 
          src="https://hdccdn.blob.core.windows.net/brand/hdc/HDCLOGO-01.png"
          alt="HDC Logo"
          className="h-12 mx-auto mb-6"
        />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-display">
          Welcome back
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Sign in to your account to continue
        </p>
      </div>

      {error && (
        <div className="mb-6">
          <ValidationError message={error.message} />
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div>
          <InputField
            type="text"
            label="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onBlur={() => handleBlur('userName')}
            icon={User}
            error={touched.userName ? errors.userName : undefined}
            required
            autoFocus
          />
        </div>

        <div className="space-y-2">
          <InputField
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => handleBlur('password')}
            icon={Lock}
            error={touched.password ? errors.password : undefined}
            required
          />
          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Signing in...
            </span>
          ) : (
            <span className="flex items-center">
              <LogIn className="w-5 h-5 mr-2" />
              Sign in
            </span>
          )}
        </button>
      </form>
    </div>
  );
}