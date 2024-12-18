import { EmploymentType } from '../types/employmentType';

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
  },
  {
    id: '4',
    code: 'CONT',
    name: 'Contractor',
    description: 'Independent contractor position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '5',
    code: 'SEAS',
    name: 'Seasonal',
    description: 'Seasonal employment during peak periods',
    status: 'inactive',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '6',
    code: 'INT-PD',
    name: 'Paid Intern',
    description: 'Paid internship position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '7',
    code: 'INT-UP',
    name: 'Unpaid Intern',
    description: 'Unpaid internship for academic credit',
    status: 'inactive',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '8',
    code: 'CONS',
    name: 'Consultant',
    description: 'External consultant position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '9',
    code: 'PROJ',
    name: 'Project Based',
    description: 'Fixed-term project employment',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '10',
    code: 'FLEX',
    name: 'Flexible Hours',
    description: 'Position with flexible working hours',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '11',
    code: 'REM-FT',
    name: 'Remote Full Time',
    description: 'Full-time remote position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '12',
    code: 'REM-PT',
    name: 'Remote Part Time',
    description: 'Part-time remote position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '13',
    code: 'HYB-FT',
    name: 'Hybrid Full Time',
    description: 'Full-time hybrid work arrangement',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '14',
    code: 'HYB-PT',
    name: 'Hybrid Part Time',
    description: 'Part-time hybrid work arrangement',
    status: 'inactive',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '15',
    code: 'PROB',
    name: 'Probationary',
    description: 'Initial probationary period',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '16',
    code: 'APPR',
    name: 'Apprentice',
    description: 'Apprenticeship program position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '17',
    code: 'TRAIN',
    name: 'Trainee',
    description: 'Training program position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '18',
    code: 'VOL',
    name: 'Volunteer',
    description: 'Volunteer position',
    status: 'inactive',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '19',
    code: 'EXEC',
    name: 'Executive',
    description: 'Executive level position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '20',
    code: 'DIR',
    name: 'Director',
    description: 'Director level position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '21',
    code: 'MGR',
    name: 'Manager',
    description: 'Management position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '22',
    code: 'SUP',
    name: 'Supervisor',
    description: 'Supervisory position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '23',
    code: 'LEAD',
    name: 'Team Lead',
    description: 'Team leader position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '24',
    code: 'SR-SPEC',
    name: 'Senior Specialist',
    description: 'Senior specialist position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '25',
    code: 'SPEC',
    name: 'Specialist',
    description: 'Specialist position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '26',
    code: 'JR-SPEC',
    name: 'Junior Specialist',
    description: 'Junior specialist position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '27',
    code: 'COORD',
    name: 'Coordinator',
    description: 'Coordination position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '28',
    code: 'ANAL',
    name: 'Analyst',
    description: 'Analyst position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '29',
    code: 'ASSOC',
    name: 'Associate',
    description: 'Associate level position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '30',
    code: 'ASST',
    name: 'Assistant',
    description: 'Assistant level position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '31',
    code: 'ENT',
    name: 'Entry Level',
    description: 'Entry level position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '32',
    code: 'GRAD',
    name: 'Graduate',
    description: 'Recent graduate position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '33',
    code: 'SHIFT-1',
    name: 'First Shift',
    description: 'First shift position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '34',
    code: 'SHIFT-2',
    name: 'Second Shift',
    description: 'Second shift position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '35',
    code: 'SHIFT-3',
    name: 'Third Shift',
    description: 'Third shift position',
    status: 'inactive',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '36',
    code: 'ROT',
    name: 'Rotating Shift',
    description: 'Rotating shift position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '37',
    code: 'ON-CALL',
    name: 'On Call',
    description: 'On-call position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '38',
    code: 'CASUAL',
    name: 'Casual',
    description: 'Casual employment arrangement',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '39',
    code: 'ZERO',
    name: 'Zero Hours',
    description: 'Zero hours contract',
    status: 'inactive',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '40',
    code: 'TERM',
    name: 'Fixed Term',
    description: 'Fixed term contract',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '41',
    code: 'PERM',
    name: 'Permanent',
    description: 'Permanent position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '42',
    code: 'SUB',
    name: 'Substitute',
    description: 'Substitute position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '43',
    code: 'RELIEF',
    name: 'Relief',
    description: 'Relief position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '44',
    code: 'TEMP-SEA',
    name: 'Temporary Seasonal',
    description: 'Temporary seasonal position',
    status: 'inactive',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '45',
    code: 'TEMP-CAS',
    name: 'Temporary Casual',
    description: 'Temporary casual position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '46',
    code: 'FLEX-REM',
    name: 'Flexible Remote',
    description: 'Flexible remote position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '47',
    code: 'FLEX-HYB',
    name: 'Flexible Hybrid',
    description: 'Flexible hybrid position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '48',
    code: 'CONT-FT',
    name: 'Contract Full Time',
    description: 'Full-time contract position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '49',
    code: 'CONT-PT',
    name: 'Contract Part Time',
    description: 'Part-time contract position',
    status: 'active',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  },
  {
    id: '50',
    code: 'CONT-TEMP',
    name: 'Contract Temporary',
    description: 'Temporary contract position',
    status: 'inactive',
    createdAt: generateMockDate(),
    updatedAt: generateMockDate()
  }
];