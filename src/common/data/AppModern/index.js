/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from 'common/assets/image/appModern/logo.png';

export const navbar = {
  logo: logo,
  navMenu_en: [
    {
      id: 1,
      label: 'Home',
      path: '#home',
      offset: '84',
    },
    {
      id: 2,
      label: 'Key Features',
      path: '#features',
      offset: '81',
    },
    {
      id: 3,
      label: 'Partner',
      path: '#partner_section',
      offset: '81',
    },
  ],
  navMenu_th: [
    {
      id: 1,
      label: 'หน้าแรก',
      path: '#home',
      offset: '84',
    },
    {
      id: 2,
      label: 'ฟีเจอร์',
      path: '#features',
      offset: '81',
    },
    {
      id: 3,
      label: 'พาร์ทเนอร์',
      path: '#partner_section',
      offset: '81',
    },
  ],
};

/* ------------------------------------ */
// client data section
/* ------------------------------------ */
import client1 from 'common/assets/image/appModern/company1.png';
import client2 from 'common/assets/image/appModern/company2.png';
import client3 from 'common/assets/image/appModern/company3.png';
import client4 from 'common/assets/image/appModern/company4.png';

export const client = [
  {
    id: 1,
    image: client1,
    title: 'The new york times',
  },
  {
    id: 2,
    image: client2,
    title: 'amazon',
  },
  {
    id: 3,
    image: client3,
    title: 'evernote',
  },
  {
    id: 4,
    image: client4,
    title: 'the verge',
  },
];

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import featureIcon1 from '../../../../public/assets/onboarding/AW-01.png';
import featureIcon2 from '../../../../public/assets/onboarding/AW-02.png';
import featureIcon3 from '../../../../public/assets/onboarding/AW-03.png';
import featureIcon4 from '../../../../public/assets/onboarding/AW-04.png';

export const features = {
  slogan: 'KEY FEATURES',
  title: 'Why you choose our app',
  items_th: [
    {
      id: 1,
      color: '#F55767',
      icon: featureIcon1,
      title: 'Running',
      subtitle: 'ประสบการณ์ใหม่',
      description: 'ค้นหากิจกรรมวิ่งครั้งแรกของคุณกับคอมมิวนิตี้ของเรา',
    },
    {
      id: 2,
      color: '#ff4742',
      icon: featureIcon2,
      title: 'Relationship',
      subtitle: 'ค้นพบเพื่อนใหม่',
      description: 'ค้นหาเพื่อนใหม่กับสังคมใหม่แห่งการแชร์ของเรา',
    },
    {
      id: 3,
      color: '#fb5781',
      icon: featureIcon3,
      title: 'New way',
      subtitle: 'การดำเนินการที่ดีกว่า',
      description: 'สะดวกสบายมากขึ้นกับระบบการลงทะเบียน เช็คอิน และเช็คเอ้าท์',
    },
    {
      id: 4,
      color: '#f18e47',
      icon: featureIcon4,
      title: 'Simply',
      subtitle: 'ออกเดินทางไปกับเพื่อนของคุณ',
      description: 'หาเพื่อนร่วมเดินทางท่องเที่ยว ก่อนกิจกรรมของคุณจะเริ่ม',
    },
  ],
  items_en: [
    {
      id: 1,
      color: '#F55767',
      icon: featureIcon1,
      title: 'Marathon',
      subtitle: 'New Experiences',
      description: 'Find your first marathon with our community',
    },
    {
      id: 2,
      color: '#ff4742',
      icon: featureIcon2,
      title: 'Relationship',
      subtitle: 'Discover new companies',
      description: 'Find new friends with our sharing community',
    },
    {
      id: 3,
      color: '#fb5781',
      icon: featureIcon3,
      title: 'New way',
      subtitle: 'Better processes',
      description:
        'More convinient with our registering, checking in and chekcing out processes',
    },
    {
      id: 4,
      color: '#f18e47',
      icon: featureIcon4,
      title: 'Simply',
      subtitle: 'Get along with new friends',
      description:
        'Find new companies and get along on the trip before your marathon',
    },
  ],
};

/* ------------------------------------ */
// App slider data section
/* ------------------------------------ */
import appSlide1 from '../../../../public/assets/appslide/1.png';
import appSlide2 from '../../../../public/assets/appslide/2.png';
import appSlide3 from '../../../../public/assets/appslide/3.png';
import appIcon1 from '../../../../public/assets/feature/2.png';
import appIcon2 from '../../../../public/assets/feature/5.png';
import appIcon3 from '../../../../public/assets/feature/7.png';

export const appSlider = {
  carousel: [
    {
      id: 1,
      image: appSlide1,
      title: 'App Slide 1',
    },
    {
      id: 2,
      image: appSlide2,
      title: 'App Slide 1',
    },
    {
      id: 3,
      image: appSlide3,
      title: 'App Slide 1',
    },
  ],
  title_th: 'Ramble Runner Community',
  title_en: 'Ramble Runner Community',
  description_th:
    'application ที่รวบรวมกิจกรรมงานวิ่งต่างๆ ทั่วทั้งประเทศไทยไว้ในที่เดียว ให้คุณสะดวกสบายในการค้นหา และเข้าร่วมกิจกรรมต่างๆ',
  description_en:
    'Applicaiton that collect entire activities from all around Thailand. Let you be more convinently to discover and participate',
  features: [
    {
      id: 1,
      icon: appIcon1,
      title_th: 'Discover fast',
      description_th:
        'ด้วยระบบการค้นหาของเรา คุณจะไม่พลาดกิจกรรมใหม่ๆ ที่คุณสนใจ',
      title_en: 'Discover fast',
      description_en:
        'With our searching system, you will not miss any interested activities',
    },
    {
      id: 2,
      icon: appIcon2,
      title_th: 'Notification',
      description_th:
        'แจ้งเตือนข่าวกิจกรรมของคุณ ให้คุณไม่พลาดทุกการอัพเดทของกิจกรรมที่คุณลงสมัคร',
      title_en: 'Notification',
      description_en:
        'Notificate your ativities news. Will not let you miss any updated news',
    },
    {
      id: 3,
      icon: appIcon3,
      title_th: 'Store milestones',
      description_th:
        'บันทึกประวัติกิจกรรมของคุณ ให้ทุกกิโลเมตรของคุณไม่สูญปล่าว',
      title_en: 'Store milestones',
      description_en:
        'Record your history activities as a point. Do not let your distance be wasted',
    },
  ],
};

/* ------------------------------------ */
// Design and built data section
/* ------------------------------------ */
import codingImage from 'common/assets/image/appModern/code.png';

export const designAndBuilt = {
  image: codingImage,
  slogan: 'CODE INTEGRATION',
  title: 'Introducing coding features of our apps with Customization',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur.',
};

/* ------------------------------------ */
// Product  Slide  section
/* ------------------------------------ */
import slide1 from 'common/assets/image/appModern/page1.png';
import slide2 from 'common/assets/image/appModern/page2.png';
import slide3 from 'common/assets/image/appModern/page3.png';

export const productData = {
  slogan: 'PRODUCT SHOWCASE',
  title: 'Meet Client Satisfaction by using our product',
  carousel: [
    {
      id: 1,
      thumb_url: slide1,
      link: '#1',
      title: 'slide 1',
    },
    {
      id: 2,
      thumb_url: slide2,
      link: '#1',
      title: 'slide 2',
    },
    {
      id: 3,
      thumb_url: slide3,
      link: '#1',
      title: 'slide 3',
    },

    {
      id: 4,
      thumb_url: slide1,
      link: '#1',
      title: 'slide 4',
    },

    {
      id: 5,
      thumb_url: slide3,
      link: '#1',
      title: 'slide 5',
    },
    {
      id: 6,
      thumb_url: slide2,
      link: '#1',
      title: 'slide 6',
    },
  ],
};

/* ------------------------------------ */
// Pricing policy data section
/* ------------------------------------ */
export const pricing = {
  slogan: 'PRICING PLAN',
  title: 'Choose your pricing policy',
  monthly: [
    {
      id: 1,
      title: 'Business Class',
      description: 'For Small teams or office',
      suggested: false,
      price: 0,
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
    {
      id: 2,
      title: 'Pro Master',
      description: 'For Best opportunities',
      suggested: true,
      price: 99,
      trail: 14,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
  ],
  annualy: [
    {
      id: 1,
      title: 'Pro Master',
      description: 'For Small teams or office',
      suggested: true,
      price: 999,
      trail: 14,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
    {
      id: 2,
      title: 'Enterprise',
      description: 'For Best opportunities',
      suggested: false,
      price: 1299,
      trail: 30,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// Team Portfolio data section
/* ------------------------------------ */
import member1 from 'common/assets/image/appModern/1.png';
import member2 from 'common/assets/image/appModern/2.png';
import member3 from 'common/assets/image/appModern/3.png';
import member4 from 'common/assets/image/appModern/4.png';
import member5 from 'common/assets/image/appModern/5.png';
import member6 from 'common/assets/image/appModern/6.png';
import member7 from 'common/assets/image/appModern/7.png';

export const teamportfolio = {
  title: 'Meet our awesome team members, work behind the sense',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur.',

  teammember: [
    {
      id: 1,
      img: member1,
      text: 'Berlin Corleone',
    },
    {
      id: 2,
      img: member2,
      text: 'Jona White',
    },
    {
      id: 3,
      img: member3,
      text: 'Michael Price',
    },
    {
      id: 4,
      img: member4,
      text: 'Gullyboy Rana',
    },
    {
      id: 5,
      img: member5,
      text: 'Miss Clair',
    },
    {
      id: 6,
      img: member6,
      text: 'Bucky Ali',
    },
    {
      id: 7,
      img: member7,
      text: 'Arthus Doe',
    },
  ],
};

/* ------------------------------------ */
// Testimonial data section
/* ------------------------------------ */
export const testimonial = {
  slogan: 'TESTIMONIAL',
  title: 'Meet Client Satisfaction by using product',
  reviews: [
    {
      id: 1,
      title: 'Modern look & trending design',
      description:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      avatar:
        'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
      name: 'Jon Doe',
      designation: 'CEO of RedQ Inc.',
      review: 4,
    },
    {
      id: 2,
      title: 'User friendly & Customizable',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Jeny Doe',
      designation: 'Co Founder of RedQ Inc.',
      review: 5,
    },
    {
      id: 3,
      title: 'User friendly & Customizable',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
      avatar:
        'https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg',
      name: 'Jon Doe',
      designation: 'Co Founder of RedQ Inc.',
      review: 5,
    },
  ],
};

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
import chat from 'common/assets/image/appModern/chat.svg';
import group from 'common/assets/image/appModern/group.svg';
import github from 'common/assets/image/appModern/github.svg';
import footerLogo from 'common/assets/image/appModern/logoWhite.png';

export const footer = {
  widgets: [
    {
      id: 1,
      icon: chat,
      title: 'Discover New Marathon Activity',
      description:
        'Find your first marathon with out platform. Start your journey!',
    },
    {
      id: 2,
      icon: group,
      title: 'Join in Our Community',
      description:
        'Find your new friends and get into marathon together. Have fun!',
    },
    {
      id: 3,
      icon: github,
      title: 'New Way Of Registering',
      description:
        'More convinient with new processing of register a marathon competition. Easy than ever!',
    },
  ],
  logo: footerLogo,
  menu: [
    {
      id: 1,
      text: 'Home',
      link: '#',
    },
    {
      id: 2,
      text: 'Partner',
      link: '#',
    },
    {
      id: 3,
      text: 'Adversite',
      link: '#',
    },
    {
      id: 4,
      text: 'Supports',
      link: '#',
    },
    {
      id: 5,
      text: 'Marketing',
      link: '#',
    },
    {
      id: 6,
      text: 'Contact',
      link: '/contact',
    },
  ],
};
