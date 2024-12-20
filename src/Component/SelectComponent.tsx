import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectComponentProps {
  id: string;
  label: string;
  options: Option[];
  onChange: (value: string) => void;
  value: string;                                                                                    //สร้าง value เป็น prop
  error?: string;
}
// ประกาศคอมโพเนนต์ SelectComponent
const SelectComponent: React.FC<SelectComponentProps> = ({ id, label, options, onChange, value, error }) => { // ตอนนี้ id มีค่าเท่ากับ "select-1"
  // const [selectedValue, setSelectedValue] = useState(''); //ค่าเริ่มต้นเป็น string ว่าง
  //const [error, setError] = useState<string | undefined>(undefined); // สถานะสำหรับข้อความข้อผิดพลาด //ประกาศerrorไปแล้ว

//ฟังก์ชัน handleSelectChange รับค่าที่เลือก (value) มาอัปเดตสถานะ selectedValue และเรียกฟังก์ชัน onChange ที่ได้รับผ่าน props เพื่อส่งค่ากลับไป
  const handleSelectChange = (value: string) => {
    // setSelectedValue(value);                                                                     // อัปเดต selectedValue ด้วยค่าที่เลือก
    onChange(value);                                                                                // เรียก onChange เพื่อส่งค่าที่เลือกกลับไปให้คอมโพเนนต์หลัก
  };

  // ฟังก์ชันสำหรับเคลียร์ค่าที่เลือก
  const clearSelection = () => {
    // setSelectedValue(''); // รีเซ็ตค่าที่เลือก
    //setError(undefined);                                                                            // ลบข้อความข้อผิดพลาด*
    onChange('');                                                                                   // ส่งค่าว่างกลับไปที่ App
  };

  return (
    <div className="relative w-64">
      <label htmlFor={id} className="block text-sm font-medium mb-2">{label}</label>
      <select
        id={id}
        required={true}
        className={`appearance-none py-3 px-4 block w-full rounded-lg text-sm border ${error ? '!border-red-500' : 'border-color: transparent'} focus:outline-none`}
        value={value}                                                                               //ใช้การเรียกValue
        onChange={(e) => handleSelectChange(e.target.value)}                                         //เรียก handleSelectChange พร้อมส่งค่าจาก e.target.value
      >
        <option value="" disabled>เลือกตัวเลือก</option> {/* optionที่ไม่สามารถเลือกได้เพื่อให้ผู้ใช้รู้ว่าต้องเลือกค่า */}
        {options.map((option) => (                                                                   // ใช้ map เพื่อสร้าง <option> แต่ละตัวจากอาร์เรย์ options
          <option key={option.value} value={option.value}>{option.label}</option>                   // กำหนด key และ value ของ option แต่ละตัวให้ตรงกับค่าที่ระบุใน options array
        ))}
      </select>
      
      {error && <p className="text-sm text-red-600 mt-2">{error}</p>}

      {/* ปุ่มเคลียร์ที่จะแสดงเมื่อมีการเลือกค่า */}
      {value && (
          <button
            type="button"
            className="absolute inset-y-0 right-1.5 translate-y-3 text-gray-500 hover:text-red-500"
            onClick={clearSelection}
          >Clear</button> /* ไอคอนหรือสัญลักษณ์ที่แสดงแทนปุ่มเคลียร์ */
        )}

    </div>
  );
};

export default SelectComponent;
