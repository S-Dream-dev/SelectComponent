// InputRadio.tsx
import React from 'react';

interface InputRadioProps {
  name: string;
  value: string;
  label: string;
  onChange: (value: string) => void;
  error?: string;
  id?: string;
  checked?: boolean;
}

const InputRadio: React.FC<InputRadioProps> = ({ name, value, label, onChange, error, id, checked }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-blue-600 checked:border-transparent focus:outline-none"
      />
      <label htmlFor={id} className="text-gray-700">
        {label}
      </label>
      {error && <span className="text-red-500 text-sm ml-2">{error}</span>}
    </div>
  );
};

export default InputRadio;
