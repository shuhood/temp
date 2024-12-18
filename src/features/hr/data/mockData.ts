import { EmploymentType } from '../types';

function generateMockDate(startYear = 2023) {
  const start = new Date(startYear, 0, 1).getTime();
  const end = new Date().getTime();
  return new Date(start + Math.random() * (end - start));
}

export const mockEmploymentTypes: EmploymentType[] = [
  {
    id: '1',
    code: 'FT-REG',
    name: 'Full Time Regular',
    description: 'Standard full-time permanent position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '2',
    code: 'PT-REG',
    name: 'Part Time Regular',
    description: 'Regular part-time position with pro-rated benefits',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '3',
    code: 'TEMP',
    name: 'Temporary',
    description: 'Short-term temporary position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  }
];