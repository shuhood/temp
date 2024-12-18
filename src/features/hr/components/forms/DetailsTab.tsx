```tsx
import React from 'react';
import { FormField } from '../../../../components/common/forms';
import { EmploymentType } from '../../types';

interface DetailsTabProps {
  type?: EmploymentType;
}

export default function DetailsTab({ type }: DetailsTabProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <FormField
          label="Department"
          name="department"
          defaultValue={type?.department}
          placeholder="Enter department"
        />
        <FormField
          label="Category"
          name="category"
          defaultValue={type?.category}
          placeholder="Enter category"
        />
      </div>
      <FormField
        label="Work Hours"
        name="workHours"
        defaultValue={type?.workHours}
        placeholder="e.g., 40 hours per week"
      />
      <FormField
        label="Benefits"
        name="benefits"
        defaultValue={type?.benefits}
        multiline
        rows={3}
        placeholder="Enter benefits details"
      />
      <FormField
        label="Additional Notes"
        name="notes"
        defaultValue={type?.notes}
        multiline
        rows={3}
        placeholder="Enter additional notes"
      />
    </div>
  );
}
```