import React, { useState } from 'react';
import './App.css'; // นำเข้าไฟล์ CSS
import SelectComponent from './SelectComponent'; // นำเข้า SelectComponent

const App: React.FC = () => {
  // ตัวเลือกสำหรับ dropdown
  const options = [
    { value: '1', label: 'ตัวเลือก 1' },
    { value: '2', label: 'ตัวเลือก 2' },
    { value: '3', label: 'ตัวเลือก 3' },
  ];
 //สร้างสถานะ form โดยมีฟิลด์ name และ address โดยค่าเริ่มต้นเป็นสตริงว่าง
  const [form, setForm] = useState({ name: '', address: '' }); //โจทย์ให้แสดง value ใน name

  const handleSelectChange = (value: string) => { //ใช้ในการอัปเดตสถานะ form โดยใช้ค่า value มาอัปเดตฟิลด์ name
    setForm({ ...form, name: value }); // ใช้ค่าเดิมของ form แล้วแทนที่ฟิลด์ name ด้วยค่าใหม่
  };

  const handleSubmit = (event : React.FormEvent) => {
    event.preventDefault(); //ป้องกันไม่ให้มีการส่งแบบฟอร์ม
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      
      <form onSubmit={handleSubmit}>
      {JSON.stringify(form)} {/* แสดงข้อมูล form เป็น JSON string บนหน้าเว็บ */}
      <SelectComponent
        id="select-1"
        label="Label"
        options={options}
        onChange={handleSelectChange}
      />

      <button className="mt-4 absolute transform -translate-y-1/2 text-gray-500 hover:text-red-500" type = "submit">
        submit
      </button>

      </form>
    </div>
    
  );
};

export default App;
//เอาformมาครอบ แล้วให้varidate ตัวvalue ในตัวเลือกหากไม่มีข้อมูลให้เกิด error ทำแล้วให้อัพขึ้นgit