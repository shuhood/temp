import React from 'react';
import FooterLink from './FooterLink';

const footerLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Contact Us', href: '#' },
];

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-white dark:bg-dark-200 border-t border-gray-100 dark:border-dark-100 py-4 px-6 transition-colors">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} CorporateApp. All rights reserved.
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