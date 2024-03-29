import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from '../redux/actions/layoutActions';
import logo from '../public/assets/logo/ramble.png';

const policy = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(false));
  }, []);
  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: '20px 20px 100px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={logo} style={{ width: 'auto', height: 100 }} />
      </div>
      <h1>นโยบายคุ้มครองข้อมูลส่วนบุคคล</h1>
      <h2>1.นิยาม</h2>
      <p>
        “ท่าน” หมายถึง ผู้ใช้บริการ
        <br />
        “เรา” หมายถึง บริษัท นาซ่าซิตี้ จำกัด
      </p>
      <h2>2. วัตถุประสงค์ของการจัดให้มีนโยบายคุ้มครองข้อมูลส่วนบุคคล</h2>
      <p>นโยบายคุ้มครองข้อมูลส่วนบุคคลนี้มีขึ้นเพื่อ</p>
      <p>
        2.1 บังคับใช้กับข้อมูลส่วนบุคคลของท่าน ที่ท่านให้ไว้โดยตรง
        ข้อมูลที่เราได้รับจากการใช้บริการของท่าน
        หรือข้อมูลที่เราได้รับจากบุคคลที่สาม
        ทั้งข้อมูลที่เรามีอยู่ในปัจจุบันและที่เราจะได้รับในอนาคตอันเป็นข้อมูลเกี่ยวกับการลงทะเบียนสมัครใช้บริการ
        การเข้าถึง การใช้งานเนื้อหา ฟีเจอร์ เทคโนโลยี หรือฟังก์ชันต่าง ๆ
        ในแอปพลิเคชัน Ramble ซึ่งเราเป็นผู้ให้บริการ
        และ/หรือแอปพลิเคชันชื่ออื่นใดที่เราเป็นผู้พัฒนาหรือปรับแต่ง (Customize)
        จากแอปพลิเคชัน Ramble ให้กับบุคคลอื่น (ทั้งเวอร์ชันสำหรับคอมพิวเตอร์ (PC
        Version) และเวอร์ชันที่ให้บริการในโทรศัพท์มือถือ
        ตลอดจนอุปกรณ์อิเล็กทรอนิกส์อื่น ๆ (Mobile Version)) (“แอปพลิเคชัน”)
        และเว็บไซต์ที่ได้ฝากเว็บไซต์ไว้ที่ระบบของเรา (Web Hosting) (รวมเรียกว่า
        “บริการของเรา”)
      </p>
      <p>
        2.2 ชี้แจงรายละเอียดและวิธีการจัดการเกี่ยวกับข้อมูลส่วนบุคคลของท่าน
        ดังนั้น เมื่อท่านได้ดำเนินการใด ๆ เพื่อเข้าสู่แอปพลิเคชันนี้
        ตลอดจนการเข้าถึงหรือใช้งานส่วนหนึ่งส่วนใดในแอปพลิเคชันนี้
        ถือว่าท่านตกลงยอมรับนโยบายคุ้มครองข้อมูลส่วนบุคคลที่กำหนดดังต่อไปนี้
        รวมทั้งนโยบายคุ้มครองข้อมูลส่วนบุคคลของเราที่ได้กำหนดไว้โดยเฉพาะเจาะจงอยู่ในส่วนใดส่วนหนึ่งของแอปพลิเคชันนี้และที่ได้กำหนดไว้ในเว็บไซต์ที่ได้ฝากเว็บไซต์ไว้ที่ระบบของเรา
        (Web Hosting) (ถ้ามี) (รวมเรียกว่า “นโยบายคุ้มครองข้อมูลส่วนบุคคล”)
        โดยท่านรับทราบและตกลงว่า
        เราอาจดำเนินการปรับปรุงหรือแก้ไขนโยบายคุ้มครองข้อมูลส่วนบุคคลเป็นครั้งคราวเพื่อให้สอดคล้องกับแนวทางการให้บริการและหลักเกณฑ์ของกฎหมายที่มีการเปลี่ยนแปลงไป
        โดยอาจไม่ได้แจ้งหรือบอกกล่าวให้ท่านทราบล่วงหน้า ดังนั้น
        ท่านจึงควรติดตามนโยบายคุ้มครองข้อมูลส่วนบุคคลที่กำหนดไว้นี้อยู่เสมอ
        อย่างไรก็ดี
        เราจะเผยแพร่การเปลี่ยนแปลงนโยบายคุ้มครองข้อมูลส่วนบุคคลในแอปพลิเคชันนี้
        หรือเว็บไซต์ที่ได้ฝากเว็บไซต์ไว้ที่ระบบของเรา (Web Hosting) (ถ้ามี)
        และในกรณีที่มีการเปลี่ยนแปลงในสาระสำคัญ เราจะพยายามแจ้งให้ท่านทราบ
        และเมื่อท่านได้เข้าใช้งานแอปพลิเคชันนี้ภายหลังการเปลี่ยนแปลงดังกล่าวแล้ว
        ย่อมถือว่าท่านตกลงยอมรับนโยบายคุ้มครองข้อมูลส่วนบุคคลทั้งหมดตามที่ได้เปลี่ยนแปลงแล้ว
      </p>
      <h2>3. ข้อมูล และวิธีการเก็บรวบรวมข้อมูล</h2>
      <p>
        เราเก็บรวบรวมข้อมูลด้วยเทคโนยีต่าง ๆ เช่น คุกกี้
        โดยข้อมูลที่เกี่ยวข้องกับท่านที่เราเก็บรวบรวม ประกอบไปด้วย:
      </p>
      <p>
        <span style={{ fontWeight: 'bold' }}>
          ข้อมูลที่ผู้ใช้งานให้ไว้โดยตรง:{' '}
        </span>
        นาซ่าซิตี้จะรวบรวมข้อมูลที่ผู้ใช้งานส่งให้กับนาซ่าซิตี้ เช่น
        ข้อมูลที่ผู้ใช้งานกรอกขณะลงทะเบียนสมัครใช้บริการ
        ข้อมูลที่ใช้ในการเข้าสู่ระบบ และข้อมูลการเข้าร่วมกิจกรรมต่าง ๆ
        ในบริการของนาซ่าซิตี้ ข้อมูลการทำแบบสำรวจ ข้อมูลบัญชีผู้ใช้งาน (Account)
        หรือข้อมูลที่ผู้ใช้งานได้แก้ไขปรับปรุงในข้อมูลบัญชีผู้ใช้งาน (Account)
        ของผู้ใช้งาน หรือข้อมูลที่ได้จากการที่ผู้ใช้งานติดต่อกับนาซ่าซิตี้
        หรือทีมงานของนาซ่าซิตี้ หรือข้อมูลที่ได้จากบัญชีผู้ใช้งาน (Account) อื่น
        ๆ ที่นาซ่าซิตี้มีเหตุอันควรเชื่อได้ว่าผู้ใช้งานควบคุมดูแลอยู่
        อันรวมถึงแต่ไม่จำกัดเฉพาะ
        ข้อมูลทุกชนิดที่แสดงบนหน้าประวัติผู้ใช้งานและหน้าการสมัครบริการต่างๆ
        อาทิ ชื่อ-นามสกุล ที่อยู่ วัน/เดือน/ปี เกิด เพศ อายุ รูปถ่าย อีเมล
        เลขที่บัญชีธนาคาร หมายเลขบัตรเครดิต (ถ้ามี) ข้อมูลบัตรประจำตัวประชาชน
        เลขประจำตัวผู้เสียภาษีอากร หมายเลขโทรศัพท์
        รวมถึงข้อมูลเกี่ยวกับบัญชีผู้ใช้งาน ความสนใจ
        และความเห็นทุกอย่างที่ผู้ใช้งานได้แสดงผ่านเว็บไซต์ (ถ้ามี)
        เพื่อจัดเก็บไว้กับบัญชี
      </p>
      <p>
        <span style={{ fontWeight: 'bold' }}>
          ข้อมูลที่ได้รับจากการใช้บริการของผู้ใช้งาน:{' '}
        </span>
        นาซ่าซิตี้จะรวบรวมข้อมูลเกี่ยวกับบริการที่ผู้ใช้งานใช้และวิธีการใช้งานของท่าน
        ซึ่งข้อมูลเหล่านี้รวมถึงแต่ไม่จำกัดเฉพาะ
        ข้อมูลอุปกรณ์ที่ผู้ใช้งานใช้สำหรับการเข้าถึงบริการของนาซ่าซิตี้
        ข้อมูลจราจรทางคอมพิวเตอร์ (Log)
        ข้อมูลการติดต่อและสื่อสารระหว่างท่านและผู้ใช้งานรายอื่น
        และข้อมูลจากการบันทึกการใช้งาน เช่น ตัวระบุอุปกรณ์ หมายเลข IP
        ของคอมพิวเตอร์ รหัสประจำตัวอุปกรณ์ ประเภทอุปกรณ์ ข้อมูลเครือข่ายมือถือ
        ข้อมูลการเชื่อมต่อ ข้อมูลตำแหน่งที่ตั้งทางภูมิศาสตร์
        ประเภทของเบราว์เซอร์ (Browser) ข้อมูลบันทึกการเข้าออกเว็บไซต์
        ข้อมูลเว็บไซต์ที่ผู้ใช้งานเข้าถึงก่อนและหลัง (Referring Website)
        ข้อมูลบันทึกประวัติการใช้บริการของนาซ่าซิตี้ ข้อมูลบันทึกการเข้าสู่ระบบ
        (Login Log) ทั้งกรณีเข้าสู่ระบบของแอปพลิเคชันโดยตรง
        และ/หรือผู้ให้บริการรายอื่นๆ ข้อมูลรายการการทำธุรกรรม (Transaction Log)
        พฤติกรรมการใช้งาน (Customer Behavior)
        ข้อมูลรายงานสถิติการเข้าบริการของนาซ่าซิตี้
        เวลาที่เยี่ยมชมบริการของนาซ่าซิตี้ (Access Time) ข้อมูลสินค้าหรือบริการ
        สัญญาซื้อขายล่วงหน้า ผลิตภัณฑ์ทางการเงินรูปแบบต่างๆ
        และข้อมูลที่ผู้ใช้งานค้นหา การใช้ฟังก์ชันต่าง ๆ ในบริการของนาซ่าซิตี้
        ตลอดจนข้อมูลการใช้งานและ/หรือข้อมูลจราจรทางคอมพิวเตอร์ (Log)
        อื่นใดอันเกี่ยวเนื่องกับการบริการหรือธุรกรรมการซื้อขายสินค้าหรือบริการ
        สัญญาซื้อขายล่วงหน้า และผลิตภัณฑ์ทางการเงินรูปแบบต่างๆ
        ผ่านบริการของนาซ่าซิตี้
        และให้รวมถึงข้อมูลที่นาซ่าซิตี้มีหน้าที่ตามกฎหมายที่จะต้องจัดเก็บ เช่น
        ข้อมูลการเข้าสู่ระบบ (Login) ข้อมูลการส่งคำสั่งซื้อขาย
        ซึ่งที่อยู่ของเว็บไซต์ (Web Address) ดังกล่าวอาจปรากฏ “ramble-club.com”
        เป็นส่วนหนึ่งของ URL หรือไม่ก็ได้
        รวมตลอดถึงข้อมูลที่นาซ่าซิตี้ได้เก็บรวบรวมผ่านคุกกี้หรือเทคโนโลยีอื่นที่คล้ายกัน
      </p>
      <h2>4. การใช้งานข้อมูลส่วนบุคคล</h2>
      <p>
        เรานำข้อมูลส่วนบุคคลไปใช้เพื่อประโยชน์ในการยืนยันหรือระบุตัวตนของท่านเมื่อเข้าใช้งานบริการของเรา
        หรือเพื่อตรวจสอบข้อมูลการใช้บริการของท่านเพื่อการพัฒนาความมั่นคงปลอดภัยในการใช้บริการ
        การจัดการและการคุ้มครองโครงสร้างพื้นฐานทางเทคโนโลยีสารสนเทศ
        รวมถึงเพื่อเพิ่มประสิทธิภาพในการให้บริการงานด้านต่าง ๆ
        แก่ท่านมากยิ่งขึ้น ตลอดจนเพื่อประโยชน์อื่นใดที่เกี่ยวข้อง เช่น
        เรารวบรวมข้อมูลว่าท่านใช้งานบริการของเราในลักษณะใด ท่านเข้าชมส่วนใด
        และใช้เวลาในหน้านั้น ๆ นานเท่าใด และนำข้อมูลดังกล่าวไปทำการรวบรวม
        วิเคราะห์ และประเมินรูปแบบและลักษณะการใช้งาน
        รวมถึงดัดแปลงหรือดำเนินการอื่นใดเพื่อประโยชน์ในการศึกษา วิจัย จัดทำสถิติ
        พัฒนาการให้บริการและจัดทำการตลาดหรือการโฆษณาเป้าหมายที่เกี่ยวข้อง
        รวมถึงการจัดส่งเนื้อหา การโฆษณาประชาสัมพันธ์ กิจกรรมและโปรโมชันต่าง ๆ
        ตลอดจนการให้คำแนะนำต่าง ๆ ที่เหมาะสมเพื่อให้การให้บริการต่าง ๆ
        ตรงกับความสนใจของท่าน อนึ่ง
        เพื่อประโยชน์ในการพัฒนาระบบความมั่นคงปลอดภัยในการใช้บริการ
        เราอาจนำข้อมูลส่วนบุคคลไปใช้และ/หรือจัดให้มีการสุ่มตรวจ
        การทดสอบการเข้าใช้งานโดยบุคคลอื่นเพื่อนำไปใช้จัดการความเสี่ยง ตรวจจับ
        ป้องกัน หรือขจัดการฉ้อโกง หรือกิจกรรมอื่น ๆ
        ที่มีแนวโน้มว่าจะเป็นการละเมิดกฎหมาย
        หรือข้อตกลงและเงื่อนไขการใช้งานของเรา
        <br />
        <br />
        นอกจากนี้ เราอาจใช้ข้อมูลส่วนบุคคลของท่านในการติดต่อท่าน ผ่านทางโทรศัพท์
        ข้อความ (SMS) อีเมล หรือไปรษณีย์ หรือผ่านช่องทางใด ๆ เพื่อสอบถาม
        หรือแจ้งให้ท่านทราบหรือตรวจสอบและยืนยันข้อมูลเกี่ยวกับบัญชีของท่าน
        หรือสำรวจความคิดเห็น
        หรือแจ้งข้อมูลข่าวสารอื่นใดที่เกี่ยวข้องกับการให้บริการของเราตามที่จำเป็น
        ทั้งนี้
        การที่ท่านติดต่อสื่อสารกับเราหรือทีมงานของเราถือว่าท่านรับทราบและยอมรับว่า
        การติดต่อสื่อสารกับเราอาจมีการบันทึกเสียง
        หรือบันทึกรายละเอียดการติดต่อด้วยวิธีการใด ๆ
        โดยไม่จำเป็นต้องมีการบอกกล่าวหรือการเตือนเพิ่มเติม
      </p>
      <h2>5. การเปิดเผยข้อมูลส่วนบุคคลต่อบุคคลภายนอก</h2>
      <p>
        เราจะไม่เปิดเผยข้อมูลดังกล่าวต่อบุคคลใดโดยปราศจากการอนุญาตจากท่าน
        อย่างไรก็ดี เพื่อประโยชน์ในการใช้งานข้อมูลส่วนบุคคลตามข้อ 4.
        นี้ท่านรับทราบและยินยอมว่า
        เราอาจเปิดเผยข้อมูลส่วนบุคคลของท่านให้กับบริษัทใหญ่ บริษัทในเครือ
        บริษัทย่อย และบริษัทย่อยลำดับเดียวกัน หรือพันธมิตรซึ่งทำงานร่วมกับเรา
        เช่น
        ผู้ให้บริการอื่นที่ได้จัดให้มีสินค้าผลิตภัณฑ์หรือบริการภายในบริการของเรา
        หรือบุคคลอื่น ทั้งในและต่างประเทศ เช่น
        บุคคลที่เราได้ว่าจ้างให้ดำเนินงานที่เกี่ยวข้องกับข้อมูลส่วนบุคคล
        เพื่อนำข้อมูลส่วนบุคคลของท่านไปใช้เพื่อประโยชน์ในการเพิ่มประสิทธิภาพการให้บริการในด้านต่างๆ
        แก่ท่านมากยิ่งขึ้น หรือเพื่อจัดทำสถิติ
        ปรับปรุงและพัฒนาการรักษาความมั่นคงปลอดภัย
        รูปแบบการให้บริการและการเข้าถึงเนื้อหาต่าง ๆ ในบริการของเรา
        หรือเพื่อประโยชน์ในการดำเนินกิจการของเรา
        โดยในการเปิดเผยข้อมูลส่วนบุคคลให้แก่บุคคลดังกล่าวเราจะดำเนินการให้บุคคลเหล่านั้นเก็บรักษาข้อมูลส่วนบุคคลของท่านไว้เป็นความลับ
        และไม่นำไปใช้เพื่อวัตถุประสงค์อื่นนอกเหนือจากขอบเขตที่เราได้กำหนดไว้
      </p>
      <p>
        นอกจากนี้
        เราอาจเปิดเผยข้อมูลส่วนบุคคลของท่านภายใต้หลักเกณฑ์ที่กฎหมายกำหนด เช่น
        การเปิดเผยข้อมูลต่อหน่วยงานราชการ หน่วยงานภาครัฐ
        หน่วยงานที่มีหน้าที่กำกับดูแลการให้บริการ หรือหน่วยงานกำกับดูแลท่าน
        รวมถึงในกรณีที่มีการร้องขอให้เปิดเผยข้อมูลโดยอาศัยอำนาจตามกฎหมาย อาทิ
        การร้องขอข้อมูลเพื่อการฟ้องร้องหรือดำเนินคดีตามกฎหมาย
        หรือเป็นการร้องขอจากหน่วยงานเอกชนหรือบุคคลภายนอกอื่น ๆ
        ที่มีความเกี่ยวข้องกับกระบวนการทางกฎหมาย
        รวมถึงในกรณีที่มีความจำเป็นตามสมควรในการบังคับใช้ข้อตกลงและเงื่อนไขการใช้
        ของเรา ตลอดจนการเปิดเผยข้อมูลในกรณีที่มีการปรับโครงสร้างองค์กร
        การควบรวมบริษัท หรือการขายกิจการ
        เราอาจถ่ายโอนข้อมูลส่วนบุคคลของท่านไม่ว่าทั้งหมดหรือบางส่วนที่เราเก็บรวบรวมไว้ไปยังบริษัทที่เกี่ยวข้อง
      </p>
      <h2>6. ความมั่นคงปลอดภัยในการเก็บรักษาข้อมูลส่วนบุคคล</h2>
      <p>
        เราได้จัดทำระบบการจัดเก็บข้อมูลส่วนบุคคลให้มีกลไกและเทคนิคที่เหมาะสม
        รวมทั้งจำกัดการเข้าถึงข้อมูลส่วนบุคคลของท่านจากพนักงาน ลูกจ้าง
        และตัวแทนของเรา เพื่อป้องกันไม่ให้ข้อมูลส่วนบุคคลของท่านถูกนำไปใช้
        เปิดเผย ทำลาย หรือเข้าถึงโดยไม่ได้รับอนุญาต อย่างไรก็ตาม
        เราไม่อาจรับรองได้ว่าจะไม่มีความบกพร่องหรือความผิดพลาดใด ๆ
        เกิดขึ้นจากการดำเนินการตามนโยบายดังกล่าว ดังนั้น
        เราจึงขอสงวนสิทธิ์ที่จะปฏิเสธความรับผิดในความเสียหาย หรือสูญหายใด ๆ
        ที่เกิดขึ้นในทุกกรณี
      </p>
      <h2>7. การเข้าถึงและการปรับปรุงข้อมูลส่วนบุคคล</h2>
      <p>
        ท่านสามารถปรับปรุงแก้ไขข้อมูลส่วนบุคคล
        และตั้งค่าการใช้งานของท่านให้มีความถูกต้อง สมบูรณ์
        และเป็นปัจจุบันอยู่เสมอ
        โดยเข้าสู่ระบบด้วยรหัสประจำตัวและรหัสผ่านของท่านอย่างไรก็ตาม
        เราสงวนสิทธิ์ในการพิจารณาและอาจปฏิเสธที่จะปฏิบัติตามคำร้องขอที่เสี่ยงต่อการละเมิดนโยบายความเป็นส่วนตัวของผู้ใช้งานรายอื่น
        หรือไม่ปฏิบัติตามในกรณีที่สิ่งที่ท่านนำเข้าสู่ระบบนั้นไม่สามารถปฏิบัติได้จริงไม่ว่ากรณีใด
        ๆ
        <br />
        <br />
        นอกจากนี้ หลังจากที่ท่านลบข้อมูลส่วนบุคคลของท่านจากระบบของเรา
        เราอาจจะยังไม่ลบสำเนาที่มีอยู่ออกจากเซิร์ฟเวอร์ (Server) หรือระบบสำรอง
        (Backup System) ของเราในทันที
        เพื่อเป็นการป้องกันกรณีที่เกิดความขัดข้องของระบบ
        หรือกรณีที่เกิดจากจุดประสงค์มุ่งร้ายของบุคคลหรือซอฟต์แวร์อื่นใด
      </p>
      <h2>8. การเชื่อมโยงไปยังเว็บไซต์ ผลิตภัณฑ์และบริการของบุคคลภายนอก</h2>
      <p>
        บริการของเราอาจมีลิงก์เชื่อมโยงไปยังเว็บไซต์ ผลิตภัณฑ์
        และบริการของบุคคลภายนอก
        ซึ่งบุคคลภายนอกเหล่านั้นอาจเก็บรวบรวมข้อมูลบางอย่างเกี่ยวกับการใช้บริการของท่านโดยเราไม่สามารถรับผิดชอบในความปลอดภัย
        หรือความเป็นส่วนตัวของข้อมูลใด ๆ ของท่านที่เก็บรวบรวมโดยเว็บไซต์
        ผลิตภัณฑ์ หรือบริการของบุคคลภายนอกดังกล่าว
        ท่านควรใช้ความระมัดระวังและตรวจสอบนโยบายคุ้มครองข้อมูลส่วนบุคคลของเว็บไซต์ผลิตภัณฑ์
        และบริการของบุคคลภายนอกเหล่านั้นด้วย
      </p>
      <h2>9. การใช้บังคับนโยบายคุ้มครองข้อมูลส่วนบุคคล</h2>
      <p>
        ท่านตกลงและรับทราบว่า
        นโยบายคุ้มครองข้อมูลส่วนบุคคลนี้มีผลใช้บังคับกับข้อมูลส่วนบุคคลทั้งหมดที่เราเป็นผู้เก็บรวบรวม
        และท่านตกลงให้เรามีสิทธิในการเก็บ รักษา
        และนำข้อมูลส่วนบุคคลของท่านที่เราได้เก็บรวบรวมไว้แล้ว (หากมี)
        ตลอดจนข้อมูลส่วนบุคคลของท่านที่เราจัดเก็บในปัจจุบัน
        และที่จะได้จัดเก็บในอนาคต ไปใช้
        หรือเปิดเผยแก่บุคคลอื่นภายในขอบเขตตามที่ระบุไว้ในนโยบายคุ้มครองข้อมูลส่วนบุคคลนี้
      </p>
    </div>
  );
};

export default policy;
