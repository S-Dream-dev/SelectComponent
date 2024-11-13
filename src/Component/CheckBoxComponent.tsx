// CheckBoxComponent.tsx
import React from 'react';

interface CheckBoxComponentProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  linkUrl?: string; // URL สำหรับลิงก์ไปยังเงื่อนไข
}

const CheckBoxComponent: React.FC<CheckBoxComponentProps> = ({ checked, onChange, label, linkUrl }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <label className="text-gray-700">
        {label}{' '}
        {linkUrl ? (
          <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">
            เงื่อนไข
          </a>
        ) : (
          <span className="underline">เงื่อนไข</span>
        )}
      </label>
    </div>
  );
};

export default CheckBoxComponent;
