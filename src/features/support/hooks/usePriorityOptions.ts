import { useMemo } from 'react';
import { PriorityLevel } from '../types/priority';

export function usePriorityOptions() {
  const priorities = useMemo<PriorityLevel[]>(() => [
    {
      value: 'low',
      label: 'Low',
      description: 'Minor issue, no immediate impact'
    },
    {
      value: 'medium',
      label: 'Medium',
      description: 'Moderate impact on work'
    },
    {
      value: 'high',
      label: 'High',
      description: 'Critical issue requiring immediate attention'
    }
  ], []);

  return priorities;
}