// App.tsx
import React, { useState } from 'react';
import './App.css';
import InputRadio from './InputRadio';
import InputTextComponent from './InputTextComponent';
import SelectComponent from './SelectComponent';

const App: React.FC = () => {
  // ตัวเลือกสำหรับ dropdown
  const options = [
    { value: '1', label: 'ตัวเลือก 1' },
    { value: '2', label: 'ตัวเลือก 2' },
    { value: '3', label: 'ตัวเลือก 3' },
  ];
  
  const [form, setForm] = useState({ name: '', address: '', firstname: '', lastname: '', email: '' ,gender:''});
  const [error, setError] = useState<{ [key: string]: string | undefined }>({});

  const handleInputChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    setError({ ...error, [field]: undefined });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newErrors: { [key: string]: string } = {};
    if (!form.gender) newErrors.gender = 'กรุณาเลือกเพศ';
    if (!form.name) newErrors.name = 'กรุณาเลือก';
    if (!form.firstname) newErrors.firstname = 'กรุณากรอกชื่อ';
    if (!form.lastname) newErrors.lastname = 'กรุณากรอกนามสกุล';
    if (!form.email) {
      newErrors.email = 'กรุณากรอกอีเมล';
    } else if (!form.email.includes('@')) {
      newErrors.email = 'อีเมลต้องมี @';
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    console.log('Submitted Form:', form);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} noValidate>
        <InputTextComponent
          id = "firstname"
          label = "ชื่อ"
          value = {form.firstname}
          onChange = {(value) => handleInputChange('firstname', value)}
          error = {error.firstname}
        />
        <InputTextComponent
          id = "lastname"
          label = "นามสกุล"
          value = {form.lastname}
          onChange = {(value) => handleInputChange('lastname', value)}
          error = {error.lastname}
        />
        <InputTextComponent
          id = "email"
          label = "อีเมล"
          value = {form.email}
          onChange = {(value) => handleInputChange('email', value)}
          error = {error.email}
        />

        <SelectComponent
          id = "select-1"
          label = "กรุณาเลือก"
          options = {options}
          onChange = {(value) => handleInputChange('name', value)}
          value = {form.name}
          error = {error.name}
        />

        <InputRadio
          type = "radio"
          name = "gender"
          id ="male"
          value = {form.gender}
          label = "กรุณาเลือก"
          error = {error.gender}
        />male

        <InputRadio
          type = "radio"
          name = "gender"
          value = {form.gender}
        />female

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default App;
