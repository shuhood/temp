import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { ProtectedRoute } from './components/auth';
import { 
  LoginPage,
  ForgotPasswordPage,
  ChangePasswordPage,
  DashboardPage,
  ProfilePage,
  KnowledgeBasePage,
  ArticlePage,
  FAQPage,
  HelpdeskPage,
  TicketDetailPage,
  CreateTicketPage
} from './pages';
import { 
  ThemeProvider,
  NotificationProvider,
  ChatProvider,
  MenuProvider
} from './contexts';

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <NotificationProvider>
          <ChatProvider>
            <MenuProvider>
              <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />

                {/* Protected Routes */}
                <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
                  <Route path="/" element={<DashboardPage />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/change-password" element={<ChangePasswordPage />} />
                  <Route path="/knowledge" element={<KnowledgeBasePage />} />
                  <Route path="/knowledge/articles/:id" element={<ArticlePage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/helpdesk" element={<HelpdeskPage />} />
                  <Route path="/helpdesk/tickets/:id" element={<TicketDetailPage />} />
                  <Route path="/support/new" element={<CreateTicketPage />} />
                </Route>
              </Routes>
            </MenuProvider>
          </ChatProvider>
        </NotificationProvider>
      </ThemeProvider>
    </Router>
  );
}