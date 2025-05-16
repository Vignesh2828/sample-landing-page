// data/navbar-data.ts

export interface RouteProps {
  href: string;
  label: string;
}

export interface FeatureProps {
  title: string;
  description: string;
}

export const routeList: RouteProps[] = [
  { href: "#testimonials", label: "Testimonials" },
  { href: "#about", label: "About DPS" },
  { href: "#whyUs", label: "Why us" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
  { href: "#faq", label: "FAQ" },
];

export const featuresList: FeatureProps[] = [
  {
    title: "Showcase Your Value",
    description: "Highlight how your product solves user problems.",
  },
  {
    title: "Build Trust",
    description: "Leverages social proof elements to establish trust and credibility.",
  },
  {
    title: "Capture Leads",
    description: "Make your lead capture form visually appealing and strategically.",
  },
];


export const connectUs = {
  findUs: "Kundrathur, Chennai, 600069",
  callUs1: "+91 93445 18635",
  callUs2: "+91 95145 25103",
  mailUs: "dpstuition@gmail.com",
  visitUsDay: "Monday - Sunday",
  visitUsTime: "5AM - 10:15PM",
  sundayVisitTime: "8AM - 1PM",
};

export const heroData = {
  badge: {
    text: "Enrollments Open for 2025!",
    isNew: true,
  },
  title: {
    beforeHighlight: "Achieve academic success with",
    highlight: "DPSTuition",
  },
  description:
    "Expert guidance for students of all grades. Join our community of learners and gain access to quality coaching, resources, and support.",
  buttons: {
    enroll: {
      label: "Enroll Now",
      href: "#contact",
    },
    curriculum: {
      label: "View Curriculum",
      href: "#sample-materials",
    },
  },
  slides: ["/slide1.jpeg", "/slide2.jpeg"],
};

export const statsData = {
  heading: "Why Parents Trust Us",
  stats: [
    {
      count: 1000,
      label: "Satisfied Parents",
    },
    {
      count: 3000,
      label: "Satisfied Students",
    },
    {
      count: 100,
      label: "Professional Teachers",
    },
  ],
};

export interface AboutProps {
  icon: string;
  title: string;
  description: string;
}

export const aboutHeading = {
  subtitle: "About DPS Tuition",
  title: "Empowering Students for Success",
  description:
    "DPS Tuition is dedicated to providing a transformative learning experience for students of all ages. With a focus on academic excellence and personal growth, our goal is to ensure that each student reaches their full potential.",
};

export const aboutList: AboutProps[] = [
  {
    icon: "School",
    title: "Experienced Faculty",
    description:
      "At DPS Tuition, we have a team of highly experienced and qualified teachers who specialize in providing personalized learning experiences for each student.",
  },
  {
    icon: "Book",
    title: "Comprehensive Curriculum",
    description:
      "We follow a structured and comprehensive curriculum that ensures every student gains in-depth knowledge and understanding of their subjects, from basics to advanced levels.",
  },
  {
    icon: "Clipboard",
    title: "Result-Oriented Approach",
    description:
      "Our tuition sessions focus on achieving tangible results, enhancing both academic performance and personal growth through regular assessments and personalized feedback.",
  },
  {
    icon: "ThumbsUp",
    title: "Student-Centric Environment",
    description:
      "We believe in fostering a supportive and nurturing environment where students can thrive. Our teachers are always available to address queries and provide guidance to ensure success.",
  },
];

export interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

export const featuresHeading = {
  subtitle: "Why Choose DPS Tuition",
  title: "What Sets Us Apart",
  description:
    "At DPS Tuition, we prioritize the academic success and personal growth of every student. Here’s what makes us different:",
};

export const featureList: FeaturesProps[] = [
  {
    icon: "UserCheck",
    title: "Experienced Tutors",
    description:
      "Our team of qualified, experienced tutors brings years of expertise in helping students grasp difficult concepts and excel in their academic pursuits.",
  },
  {
    icon: "BookOpen",
    title: "Comprehensive Curriculum",
    description:
      "We offer a comprehensive and structured curriculum that aligns with school syllabi, ensuring students are well-prepared for exams and academic challenges.",
  },
  {
    icon: "Clock",
    title: "Flexible Timing",
    description:
      "With flexible scheduling options, students can attend classes at times that best fit their individual needs and extracurricular activities.",
  },
  {
    icon: "Award",
    title: "Proven Track Record",
    description:
      "Our tuition center has a history of producing top performers, with many students achieving high grades in their final exams and standardized tests.",
  },
  {
    icon: "Users",
    title: "Small Group Sizes",
    description:
      "We focus on small group classes to ensure each student receives personalized attention, fostering an environment where they can thrive and ask questions freely.",
  },
  {
    icon: "ShieldCheck",
    title: "Holistic Development",
    description:
      "In addition to academic support, we focus on the overall development of the student, including critical thinking, time management, and stress management skills.",
  },
];

export interface SampleMaterial {
  grade: number;
  pdfUrl: string;
}

export const sampleMaterialsHeading = {
  subtitle: "Sample Materials",
  title: "Preview Our Content",
  description:
    "Explore grade-specific sample materials to understand the quality and structure of our content.",
};

export const sampleMaterials: SampleMaterial[] = [
  {
    grade: 5,
    pdfUrl: "https://dpstuition.com/Files/G5%20Worksheet%20-%20Chapter%201.pdf",
  },
  {
    grade: 6,
    pdfUrl: "https://dpstuition.com/Files/G6%20UNIT%20TEST%20-%20Chapter%201.pdf",
  },
  {
    grade: 7,
    pdfUrl: "https://dpstuition.com/Files/G7%20Perimeter%20and%20Area%20Worksheet.pdf",
  },
  { grade: 8, pdfUrl: "" },
  { grade: 9, pdfUrl: "" },
  {
    grade: 10,
    pdfUrl: "https://dpstuition.com/Files/Class%20Notes_Algebra_class10.pdf",
  },
  { grade: 11, pdfUrl: "" },
  { grade: 12, pdfUrl: "" },
];

export interface LatestUpdate {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const whatsLatestHeading = {
  title: "What’s Latest?",
  description:
    "Stay updated with our latest features, announcements, and more. Here’s what’s new!",
};

export const latestUpdates: LatestUpdate[] = [
  {
    title: "New Course Offering: Advanced Math Tuition",
    description:
      "We're excited to launch our advanced math course for high school students. Improve your skills and boost your grades with personalized tuition. Enroll now!",
    image: "/baner1.png",
    link: "https://discord.com/",
  },
  {
    title: "Enhanced Online Learning: Virtual Classroom Experience",
    description:
      "Our new virtual classroom platform offers a seamless online learning experience. Join live classes with expert tutors and interact in real-time. Start learning today!",
    image: "/baner2.png",
    link: "https://www.example.com",
  },
  {
    title: "Exciting Collaboration: Partnering with Industry Experts",
    description:
      "We've partnered with top industry professionals to bring specialized courses to our students. Get expert guidance and access to exclusive workshops. Learn from the best!",
    image: "/baner3.png",
    link: "https://www.example.com",
  },
];

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

export const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Shruti HM",
    userName: "Parent",
    comment:
      "Classes are very effective and we see major improvement in Dhruv in maths subject. Sir gives importance to each and every concept and ensures that Dhruv has understood the same. He gives individual concentration to each and every student and makes them comfortable to ask doubts if any. Overall we are satisfied and happy with Sir's teaching.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "VINOD N",
    userName: "Parent",
    comment:
      "My daughter has been attending Parthasararthy sir's Maths tuition for the last 2 years. Attending his classes has made my daughter more confident in solving maths problems now. He makes sure that students understand the concepts clearly and gives a lot of practice exercises. He's very patient with the students and is accessible any time. Thank you, Partha sir, for your excellent support and guidance",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "M V VYSHNAVI",
    userName: "Student",
    comment:
      "Sir teaches in a best way n makes us understand the concept well also accounts tution is amazing I thank both the sir for motivating me so much so that i could score well in my puc✨",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "VIJESH RAGHAVAN",
    userName: "Parent",
    comment:
      "I would like to express my heart felt appreciation for guidance and the support you and your team have provided Vyshnavi that helped her to score good marks in II PUC. Thanks a ton!!!",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "MANIVANNAN S",
    userName: "PARENT",
    comment:
      "He is the best teacher I ever found his coaching and guidance is wonderful...✨✨",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Shruti HM",
    userName: "Parent",
    comment:
      "Very good teaching and understandable i have improved a lot and now i can do my  exams very confidently. sir teaching method is very good and understandable",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "MOHAMED IKRAM",
    userName: "Parent",
    comment:
      "Best One to One Tuition for School Students in recent times.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "SUCHI KUMAR",
    userName: "Parent",
    comment:
      "Thanks a lot to Maths teacher Partha sir for motivating my daughter in learning maths without difficulty. He has been good mentor, guide and best teacher for my daughter. My daughter could take time to understand concept which sir explained her with patience and eliminated fear of exams post covid..Sample Question papers during study holidays helped her.I would recommend sir for 10th std board exams students.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "MOHAMED YUNUS",
    userName: "Parent",
    comment:
      "Good improvement from my Kids. Very good teaching method through Online Classroom.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "KESAVAN SELLAPILLA",
    userName: "Parent",
    comment:
      "Coaching and Mentoring is really good. Taking intiative for every individual of students in studies as well in there personal behaviour. Best Institute. I am happily rating as 5 ⭐ .",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "RAKSHAAN SHIVAKUMAR",
    userName: "Student",
    comment:
      "Really good teaching method and i have improved a lot and i was able to get more confident with mathematics thanks to Mr Parthasarathy Sir. Finally, if you are struggling with math in any way I highly recommend you guys to join here.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "AATHI",
    userName: "Student",
    comment:
      "I am D.Aathiksha one of the student of DPS ,I have been studying in DPS institute for past 4 months .I have joined in the maths class held by parthasarathy sir .he helped me soo much during my maths class preparation.His class was so easy to understand and he was so patient and kind to the students .i was very happy to be a student of DPS.",
    rating: 5.0,
  },
];

export interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

export const faqHeading = {
  subtitle: "FAQs",
  title: "Common Questions About Our Tuition",
};

export const FAQList: FAQProps[] = [
  {
    question: "What grades do you offer tuition for?",
    answer:
      "We provide tuition for students from Grade 4 to Grade 12 across various boards.",
    value: "item-1",
  },
  {
    question: "What subjects are covered in your tuition programs?",
    answer:
      "We offer tuition in core subjects like Mathematics, Science, English, Social Science, and optional subjects based on the grade and curriculum.",
    value: "item-2",
  },
  {
    question: "Are your tutors qualified?",
    answer:
      "Yes, all our tutors are well-qualified, experienced, and passionate about helping students succeed academically.",
    value: "item-3",
  },
  {
    question: "Do you offer online classes?",
    answer:
      "Yes, we offer both online and offline classes depending on the student’s preference and availability.",
    value: "item-4",
  },
  {
    question: "What is your fee structure?",
    answer:
      "Our fees vary depending on the grade and subjects chosen. Please contact us directly for a detailed fee structure customized to your needs.",
    value: "item-5",
  },
];

export const contactInfo = {
  name: "DPS Tuition",
  logo: "/logo.png",
  address: `DPS Maths Tutelage
18A, Gee Ge Individual Villa Phase 1,
Manikandan Nagar, Kundrathur,
Chennai, Tamil Nadu 600069`,
  phoneNumbers: ["+91 93445 18635", "+91 95145 25103"],
  email: "dpstuition@gmail.com",
};

export const socialLinks = [
  {
    href: "https://wa.me/919344518635",
    label: "WhatsApp",
    icon: "whatsapp", // special case: uses SVG inline
    color: "hover:text-green-500",
  },
  {
    href: "https://instagram.com/dpstuition?igshid=YmMyMTA2M2Y",
    label: "Instagram",
    icon: "instagram",
    color: "hover:text-red-500",
  },
  {
    href: "https://www.facebook.com/profile.php?id=100083404803799",
    label: "Facebook",
    icon: "facebook",
    color: "hover:text-blue-500",
  },
  {
    href: "https://youtube.com/@dpsonlineandhometuition7503",
    label: "YouTube",
    icon: "youtube",
    color: "hover:text-red-600",
  },
];

export const googleMapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7775.387456690235!2d80.10937977439927!3d12.991430563371413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261f9a844cd95%3A0x85527bfa1982d548!2sDPS%20Maths%20Tutelage!5e0!3m2!1sen!2sin!4v1682779250320!5m2!1sen!2sin";
