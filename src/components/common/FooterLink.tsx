import React from 'react';

interface FooterLinkProps {
  label: string;
  href: string;
}

export default function FooterLink({ label, href }: FooterLinkProps) {
  return (
    <a
      href={href}
      className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      {label}
    </a>
  );
}