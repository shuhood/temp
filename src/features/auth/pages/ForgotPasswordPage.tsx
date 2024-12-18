import React from 'react';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import AuthLayout from '../layouts/AuthLayout';

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <ForgotPasswordForm />
    </AuthLayout>
  );
}