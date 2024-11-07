// InputTextComponent.tsx
import React from 'react';

interface InputTextComponentProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const InputTextComponent: React.FC<InputTextComponentProps> = ({
  id,
  label,
  value,
  onChange,
  error
}) => {
    
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="mb-1 text-gray-700">
        {label}
      </label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`border p-2 ${error ? 'border-red-500' : 'border-gray-300'} rounded`}
        aria-invalid={!!error}
      />
      {error && <span className="text-red-500 mt-1">{error}</span>}
    </div>
  );
};

export default InputTextComponent;
