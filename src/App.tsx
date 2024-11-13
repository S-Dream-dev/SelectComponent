// App.tsx
import React, { useState } from 'react';
import './App.css';
import CheckBoxComponent from './Component/CheckBoxComponent';
import InputRadio from './Component/InputRadioComponent';
import InputTextComponent from './Component/InputTextComponent';
import SelectComponent from './Component/SelectComponent';

const App: React.FC = () => {
  // ตัวเลือกสำหรับ dropdown
  const options = [
    { value: '1', label: 'ตัวเลือก 1' },
    { value: '2', label: 'ตัวเลือก 2' },
    { value: '3', label: 'ตัวเลือก 3' },
  ];
  
  const [form, setForm] = useState({
    name: '',
    address: '',
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    acceptedTerms: false, // เพิ่มสถานะการยอมรับเงื่อนไข
  });
  const [error, setError] = useState<{ [key: string]: string | undefined }>({});

  const handleInputChange = (field: string, value: string | boolean) => {
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
    if (!form.acceptedTerms) {
      newErrors.acceptedTerms = 'กรุณายอมรับเงื่อนไข';
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
          id="firstname"
          label="ชื่อ"
          value={form.firstname}
          onChange={(value) => handleInputChange('firstname', value)}
          error={error.firstname}
        />
        <InputTextComponent
          id="lastname"
          label="นามสกุล"
          value={form.lastname}
          onChange={(value) => handleInputChange('lastname', value)}
          error={error.lastname}
        />
        <InputTextComponent
          id="email"
          label="อีเมล"
          value={form.email}
          onChange={(value) => handleInputChange('email', value)}
          error={error.email}
        />

        <SelectComponent
          id="select-1"
          label="กรุณาเลือก"
          options={options}
          onChange={(value) => handleInputChange('name', value)}
          value={form.name}
          error={error.name}
        />

        <div className="flex items-center space-x-4">
          <InputRadio
            name="gender"
            id="male"
            value="male"
            label="ชาย"
            checked={form.gender === "male"}
            onChange={(value) => handleInputChange('gender', value)}
          />
          <InputRadio
            name="gender"
            id="female"
            value="female"
            label="หญิง"
            checked={form.gender === "female"}
            onChange={(value) => handleInputChange('gender', value)}
          />
          <InputRadio
            name="gender"
            id="other"
            value="other"
            label="อื่นๆ"
            checked={form.gender === "other"}
            onChange={(value) => handleInputChange('gender', value)}
          />
          {error.gender && <span className="text-red-500 text-sm ml-2">{error.gender}</span>}
        </div>

        <CheckBoxComponent
          checked={form.acceptedTerms}
          onChange={(checked) => handleInputChange('acceptedTerms', checked)}
          label="ยอมรับ"
          linkUrl="/terms" // ใส่ URL หรือไฟล์ลิงก์ที่ต้องการ
        />
        {error.acceptedTerms && <span className="text-red-500 text-sm">{error.acceptedTerms}</span>}

        <button
          type="submit"
          disabled={!form.acceptedTerms}
          className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          ยืนยัน
        </button>
      </form>
    </div>
  );
};

export default App;
