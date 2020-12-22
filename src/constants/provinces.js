const provinces = [
  {
    province: 'กรุงเทพมหานคร',
    region: 'ภาคกลาง',
  },
  {
    province: 'กระบี่',
    region: 'ภาคใต้',
  },
  {
    province: 'กาญจนบุรี',
    region: 'ภาคตะวันตก',
  },
  {
    province: 'กาฬสินธุ์',
    region: 'ภาคตะวันออกเฉียงเหนือ',
  },
  {
    province: 'กำแพงเพชร',
    region: 'ภาคกลาง',
  },
  {
    province: 'ขอนแก่น',
    region: 'ภาคตะวันออกเฉียงเหนือ',
  },
  {
    province: 'จันทบุรี',
    region: 'ภาคตะวันออก',
  },
  {
    province: 'ฉะเชิงเทรา',
    region: 'ภาคตะวันออก',
  },
  {
    province: 'ชลบุรี',
    region: 'ภาคตะวันออก',
  },
  {
    province: 'ชัยนาท',
    region: 'ภาคกลาง',
  },
  {
    province: 'ชัยภูมิ',
    region: 'ภาคตะวันออกเฉียงเหนือ',
  },
  {
    province: 'ชุมพร',
    region: 'ภาคใต้',
  },
  {
    province: 'ตรัง',
    region: 'ภาคใต้',
  },
  {
    province: 'ตราด',
    region: 'ภาคตะวันออก',
  },
  {
    province: 'ตาก',
    region: 'ภาคตะวันตก',
  },
  {
    province: 'นครนายก',
    region: 'ภาคกลาง',
  },
  {
    province: 'นครปฐม',
    region: 'ภาคกลาง',
  },
  {
    province: 'นครพนม',
    region: 'ภาคตะวันออกเฉียงเหนือ',
  },
  {
    province: 'นครราชสีมา',
    region: 'ภาคตะวันออกเฉียงเหนือ',
  },
  {
    province: 'นครศรีธรรมราช',
    region: 'ภาคใต้',
  },
  {
    province: 'นครสวรรค์',
    region: 'ภาคกลาง',
  },
  {
    province: 'นนทบุรี',
    region: 'ภาคกลาง',
  },
  {
    province: 'นราธิวาส',
    region: 'ภาคใต้',
  },
  {
    province: 'น่าน',
    region: 'ภาคเหนือ',
  },
  {
    province: 'บึงกาฬ',
    region: 'ภาคตะวันออกเฉียงเหนือ',
  },
  {
    province: 'บุรีรัมย์',
    region: 'ภาคตะวันออกเฉียงเหนือ',
  },
  {
    province: 'ปทุมธานี',
    region: 'ภาคกลาง',
  },
  {
    province: 'ประจวบคีรีขันธ์',
    region: 'ภาคตะวันตก',
  },
  {
    province: 'ปราจีนบุรี',
    region: 'ภาคตะวันออก',
  },
  {
    province: 'ปัตตานี',
    region: 'ภาคใต้',
  },
  {
    province: 'พระนครศรีอยุธยา',
    region: 'ภาคกลาง',
  },
  {
    province: 'พะเยา',
    region: 'ภาคเหนือ',
  },
  {
    province: 'พังงา',
    region: 'ภาคใต้',
  },
  {
    province: 'พัทลุง',
    region: 'ภาคใต้',
  },
  {
    province: 'พิจิตร',
    region: 'ภาคกลาง',
  },
  {
    province: 'พิษณุโลก',
    region: 'ภาคกลาง',
  },
  {
    province: 'ภูเก็ต',
    region: 'ภาคใต้',
  },
  {
    province: 'มหาสารคาม',
    region: 'ภาคตะวันออกเฉียงเหนือ',
  },
  {
    province: 'มุกดาหาร',
    region: 'ภาคตะวันออกเฉียงเหนือ',
  },
  {
    province: 'ยะลา',
    region: 'ภาคใต้',
  },
  {
    province: 'ยโสธร',
    region: 'ภาคตะวันออกเฉียงเหนือ',
  },
  {
    province: 'ระนอง',
    region: 'ภาคใต้',
  },
  {
    province: 'ระยอง',
    region: 'ภาคตะวันออก',
  },
  {
    province: 'ราชบุรี',
    region: 'ภาคตะวันตก',
  },
  {
    province: 'ร้อยเอ็ด',
    region: 'ภาคตะวันออกเฉียงเหนือ',
  },
  {
    province: 'ลพบุรี',
    region: 'ภาคกลาง',
  },
  {
    province: 'ลำปาง',
    region: 'ภาคเหนือ',
  },
  {
    province: 'ลำพูน',
    region: 'ภาคเหนือ',
  },
  {
    province: 'ศรีสะเกษ',
    region: 'ภาคตะวันออกเฉียงเหนือ',
  },
  {
    province: 'สกลนคร',
    region: 'ภาคตะวันออกเฉียงเหนือ',
  },
  {
    province: 'สงขลา',
    region: 'ภาคใต้',
  },
  {
    province: 'สตูล',
    region: 'ภาคใต้',
  },
  {
    province: 'สมุทรปราการ',
    region: 'ภาคกลาง',
  },
  {
    province: 'สมุทรสงคราม',
    region: 'ภาคกลาง',
  },
  {
    province: 'สมุทรสาคร',
    region: 'ภาคกลาง',
  },
  {
    province: 'สระบุรี',
    region: 'ภาคกลาง',
  },
  {
    province: 'สระแก้ว',
    region: 'ภาคตะวันออก',
  },
  {
    province: 'สิงห์บุรี',
    region: 'ภาคกลาง',
  },
  {
    province: 'สุพรรณบุรี',
    region: 'ภาคกลาง',
  },
  {
    province: 'สุราษฎร์ธานี',
    region: 'ภาคใต้',
  },
  {
    province: 'สุรินทร์',
    region: 'ภาคตะวันออกเฉียงเหนือ',
  },
  {
    province: 'สุโขทัย',
    region: 'ภาคกลาง',
  },
  {
    province: 'หนองคาย',
    region: 'ภาคตะวันออกเฉียงเหนือ',
  },
  {
    province: 'หนองบัวลำภู',
    region: 'ภาคตะวันออกเฉียงเหนือ',
  },
  {
    province: 'อำนาจเจริญ',
    region: 'ภาคตะวันออกเฉียงเหนือ',
  },
  {
    province: 'อุดรธานี',
    region: 'ภาคตะวันออกเฉียงเหนือ',
  },
  {
    province: 'อุตรดิตถ์',
    region: 'ภาคเหนือ',
  },
  {
    province: 'อุทัยธาน',
    region: 'ภาคกลาง',
  },
  {
    province: 'อุบลราชธานี',
    region: 'ภาคตะวันออกเฉียงเหนือ',
  },
  {
    province: 'อ่างทอง',
    region: 'ภาคกลาง',
  },
  {
    province: 'เชียงราย',
    region: 'ภาคเหนือ',
  },
  {
    province: 'เชียงใหม่',
    region: 'ภาคเหนือ',
  },
  {
    province: 'เพชรบุรี',
    region: 'ภาคตะวันตก',
  },
  {
    province: 'เพชรบูรณ์',
    region: 'ภาคกลาง',
  },
  {
    province: 'เลย',
    region: 'ภาคตะวันออกเฉียงเหนือ',
  },
  {
    province: 'แพร่',
    region: 'ภาคเหนือ',
  },
  {
    province: 'แม่ฮ่องสอน',
    region: 'ภาคเหนือ',
  },
];

export const provinceDict = provinces.map((item) => {
  return { label: item.province, value: item.province };
});

// export const provinceEnum = provinces.map(({ province }) => province);
export const regionEnum = [
  'ภาคกลาง',
  'ภาคใต้',
  'ภาคเหนือ',
  'ภาคตะวันออก',
  'ภาคตะวันออกเฉียงเหนือ',
  'ภาคตะวันตก',
];
