```typescript
export interface User {
  id: string;
  name: string;
  email: string;
  jobTitle: string;
  department: string;
  role: string;
  status: 'active' | 'inactive';
  avatar?: string;
}
```