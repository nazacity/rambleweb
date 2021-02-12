const gender = [
  { value: 'male', label: 'ชาย' },
  { value: 'female', label: 'หญิง' },
];

const blood_type = [
  { value: 'O', label: 'O' },
  { value: 'A', label: 'A' },
  { value: 'B', label: 'B' },
  { value: 'AB', label: 'AB' },
];

const identity_state = [
  { value: 'verified', label: 'ยืนยันแล้ว' },
  { value: 'verifying', label: 'กำลังตรวจสอบ' },
  { value: 'rejected', label: 'รอยืนยันอีกครั้ง' },
  { value: 'not_verify', label: 'ยังไม่ได้ยืนยัน' },
];

const vaccine_state = [
  { value: 'verified', label: 'ยืนยันแล้ว' },
  { value: 'verifying', label: 'กำลังตรวจสอบ' },
  { value: 'rejected', label: 'รอยืนยันอีกครั้ง' },
  { value: 'not_verify', label: 'ยังไม่ได้ยืนยัน' },
];

export { gender, blood_type, identity_state, vaccine_state };
