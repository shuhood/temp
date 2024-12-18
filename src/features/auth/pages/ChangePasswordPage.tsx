import React from 'react';
import ChangePasswordForm from '../components/ChangePasswordForm';
import AuthLayout from '../layouts/AuthLayout';

export default function ChangePasswordPage() {
  return (
    <AuthLayout>
      <ChangePasswordForm />
    </AuthLayout>
  );
}