import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectComponentProps {
  id: string;
  label: string;
  options: Option[];
  onChange: (value: string) => void;
}
// ประกาศคอมโพเนนต์ SelectComponent
const SelectComponent: React.FC<SelectComponentProps> = ({ id, label, options, onChange }) => { // ตอนนี้ id มีค่าเท่ากับ "select-1"
  const [selectedValue, setSelectedValue] = useState(''); //ค่าเริ่มต้นเป็น string ว่าง

  const [error, setError] = useState<string | undefined>(undefined); // สถานะสำหรับข้อความข้อผิดพลาด

//ฟังก์ชัน handleSelectChange รับค่าที่เลือก (value) มาอัปเดตสถานะ selectedValue และเรียกฟังก์ชัน onChange ที่ได้รับผ่าน props เพื่อส่งค่ากลับไป
  const handleSelectChange = (value: string) => {
    setSelectedValue(value); // อัปเดต selectedValue ด้วยค่าที่เลือก
    onChange(value); // เรียก onChange เพื่อส่งค่าที่เลือกกลับไปให้คอมโพเนนต์หลัก

    if (!value){
      setError('กรุณาเลือกตัวเลือก');
    }
    else{
      setError(undefined); // ลบข้อความข้อผิดพลาด
    }
  };

  // ฟังก์ชันสำหรับเคลียร์ค่าที่เลือก
  const clearSelection = () => {
    setSelectedValue(''); // รีเซ็ตค่าที่เลือก
    setError(undefined); // ลบข้อความข้อผิดพลาด*
    onChange(''); // ส่งค่าว่างกลับไปที่ App
  };

  return (
    <div className="relative w-64">
      <label htmlFor={id} className="block text-sm font-medium mb-2">{label}</label>
      <select
        id={id}
        required={true}
        className="appearance-none py-3 px-4 block w-full border rounded-lg text-sm border-gray-300 focus:border-gray-500"
        value={selectedValue} //ใช้ selectedValue เป็นค่าที่เลือกไว้
        onChange={(e) => handleSelectChange(e.target.value)} //เรียก handleSelectChange พร้อมส่งค่าจาก e.target.value
      >
        <option value="" disabled>เลือกตัวเลือก</option> {/* optionที่ไม่สามารถเลือกได้เพื่อให้ผู้ใช้รู้ว่าต้องเลือกค่า */}
        {options.map((option) => ( // ใช้ map เพื่อสร้าง <option> แต่ละตัวจากอาร์เรย์ options
          <option key={option.value} value={option.value}>{option.label}</option> // กำหนด key และ value ของ option แต่ละตัวให้ตรงกับค่าที่ระบุใน options array
        ))}
      </select>

      {error && <p className="text-sm text-red-600 mt-2">{error}</p>}

      {/* ปุ่มเคลียร์ที่จะแสดงเมื่อมีการเลือกค่า */}
      {selectedValue && (
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500"
            onClick={clearSelection}
          >
            Clear x {/* ไอคอนหรือสัญลักษณ์ที่แสดงแทนปุ่มเคลียร์ */}
          </button>
        )}

    </div>
  );
};

export default SelectComponent;
