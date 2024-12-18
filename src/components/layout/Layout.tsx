import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer, Sidebar } from './';
import { ChatFab } from '../common';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-300 transition-colors">
      <Header />
      <Sidebar />
      <main className="pt-16 pb-16">
        <Outlet />
      </main>
      <ChatFab />
      <Footer />
    </div>
  );
}