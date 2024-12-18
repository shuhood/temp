export const mockArticles = [
  {
    id: '1',
    title: 'Getting Started with HDC Platform',
    excerpt: 'Learn the basics of navigating and using the HDC platform',
    content: `
      <h2>Welcome to HDC Platform</h2>
      <p>This guide will help you get started with the HDC platform and understand its core features.</p>
      
      <h3>Logging In</h3>
      <p>To access the HDC platform, visit the login page and enter your credentials. If you don't have an account, contact your system administrator.</p>
      
      <h3>Dashboard Overview</h3>
      <p>The dashboard is your central hub for accessing all platform features. Here you'll find:</p>
      <ul>
        <li>Quick access to frequently used modules</li>
        <li>Recent activity feed</li>
        <li>Important notifications</li>
        <li>Key metrics and statistics</li>
      </ul>
      
      <h3>Navigation</h3>
      <p>The main navigation menu is located on the left side of the screen. You can:</p>
      <ul>
        <li>Click on category icons to view different modules</li>
        <li>Use the search bar to quickly find features</li>
        <li>Access your profile settings via the user menu</li>
      </ul>
    `,
    category: 'getting-started',
    views: 1500,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-02-01')
  },
  {
    id: '2',
    title: 'Understanding User Roles and Permissions',
    excerpt: 'Learn about different user roles and their access levels',
    content: `
      <h2>User Roles and Permissions</h2>
      <p>HDC platform uses a role-based access control system to manage user permissions.</p>
      
      <h3>Available Roles</h3>
      <ul>
        <li>Administrator: Full system access</li>
        <li>Manager: Department-level access</li>
        <li>User: Basic access to assigned modules</li>
        <li>Guest: Limited view-only access</li>
      </ul>
      
      <h3>Permission Levels</h3>
      <p>Each role has specific permissions that determine what actions they can perform:</p>
      <ul>
        <li>View: Can only view information</li>
        <li>Edit: Can modify existing records</li>
        <li>Create: Can create new records</li>
        <li>Delete: Can remove records</li>
        <li>Approve: Can approve requests</li>
      </ul>
    `,
    category: 'account-settings',
    views: 980,
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-02-05')
  },
  {
    id: '3',
    title: 'Security Best Practices',
    excerpt: 'Essential security guidelines for using the platform',
    content: `
      <h2>Security Best Practices</h2>
      <p>Follow these guidelines to ensure secure use of the HDC platform.</p>
      
      <h3>Password Guidelines</h3>
      <ul>
        <li>Use strong passwords with at least 12 characters</li>
        <li>Include numbers, symbols, and mixed case letters</li>
        <li>Change passwords regularly</li>
        <li>Never share passwords with others</li>
      </ul>
      
      <h3>Two-Factor Authentication</h3>
      <p>Enable two-factor authentication for an additional layer of security:</p>
      <ol>
        <li>Go to Account Settings</li>
        <li>Select Security</li>
        <li>Enable Two-Factor Authentication</li>
        <li>Follow the setup instructions</li>
      </ol>
    `,
    category: 'security',
    views: 750,
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-02-10')
  }
];