import React from 'react';
import { FooterLink } from '../common';
import { useMenu } from '../../contexts/MenuContext';

const footerLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Contact Us', href: '#' },
];

export default function Footer() {
  const { isMinimized } = useMenu();

  return (
    <footer className={`fixed bottom-0 left-0 right-0 ${
      isMinimized ? 'ml-16' : 'ml-64'
    } bg-white dark:bg-dark-200 border-t border-gray-100 dark:border-dark-100 py-4 px-6 transition-all duration-300`}>
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} HDC. All rights reserved.
        </p>
        <div className="flex space-x-6">
          {footerLinks.map((link) => (
            <FooterLink key={link.label} {...link} />
          ))}
        </div>
      </div>
    </footer>
  );
}