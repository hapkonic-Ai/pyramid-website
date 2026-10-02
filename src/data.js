// Demo data for the PYRAMID redesign concept.
// All numbers, testimonials and contact details are intentionally inflated / fictional.

export const CONTACT = {
  phone: '+91 98765 43210',
  email: 'hello@pyramidspectrum.in',
  address: 'Pyramid House, MG Road, Bengaluru, Karnataka 560001',
};

export const NAV_LINKS = [
  { label: 'Why', href: '#why' },
  { label: 'Courses', href: '#courses' },
  { label: 'Who Can Join', href: '#who' },
  { label: 'Method', href: '#method' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const MARQUEE_ITEMS = [
  'ADMISSIONS OPEN 2026',
  'SPOKEN ENGLISH',
  'PUBLIC SPEAKING',
  '50,000+ LEARNERS',
  '200+ CERTIFIED TRAINERS',
  '40+ CENTERS ACROSS INDIA',
  '4.9/5 RATED',
  'INTERVIEW SKILLS',
  'CORPORATE COMMUNICATION',
];

export const HERO_STATS = [
  { value: '50,000+', label: 'Learners trained' },
  { value: '4.9/5', label: 'Average rating' },
  { value: '98%', label: 'Fluent in 90 days' },
];

export const STATS = [
  { value: 50000, suffix: '+', label: 'Learners Trained', note: 'Across 40+ centers in India' },
  { value: 200, suffix: '+', label: 'Certified Trainers', note: 'CELTA & TESOL accredited faculty' },
  { value: 40, suffix: '+', label: 'Centers Nationwide', note: 'Metro cities & tier-2 towns' },
  { value: 4.9, suffix: '/5', decimals: 1, label: 'Average Rating', note: 'From 12,400+ verified reviews' },
  { value: 98, suffix: '%', label: 'Fluency in 90 Days', note: 'Self-reported by graduates' },
  { value: 15, suffix: '+', label: 'Years of Excellence', note: 'Shaping confident speakers' },
  { value: 120, suffix: '+', label: 'Corporate Partners', note: 'Placement & training tie-ups' },
  { value: 25, suffix: '+', label: 'Excellence Awards', note: 'Education & training honors' },
];

export const PILLARS = [
  {
    icon: { art: 'torch', fallback: 'rocket' },
    title: 'Build Confidence',
    description: 'Build confidence through practical English speaking.',
    stat: '12,000+ mock conversations every month',
  },
  {
    icon: { art: 'open-gate', fallback: 'globe' },
    title: 'Accessible Education',
    description: 'Make quality language education accessible.',
    stat: 'Courses from ₹4,999 with 0% EMI plans',
  },
  {
    icon: { art: 'clasped-hands', fallback: 'heartHandshake' },
    title: 'Supportive Environment',
    description: 'Create a supportive learning environment.',
    stat: '1 trainer for every 12 learners, always',
  },
  {
    icon: { art: 'compass', fallback: 'compass' },
    title: 'Career Preparation',
    description: 'Prepare learners for interviews, higher education, and workplace communication.',
    stat: '8,400+ learners placed in 2025 alone',
  },
];

export const COURSES = [
  {
    icon: { art: 'mic', fallback: 'mic' },
    name: 'Spoken English',
    description: 'Improve your everyday English speaking skills and communicate confidently in real-life situations.',
    duration: '8 Weeks',
    rating: '4.9',
    learners: '12,400+',
    level: 'All Levels',
    art: '/art/speaking.jpg',
    image: '/images/conversation-group.jpg',
    tags: ['Certificate Included', 'Lifetime Access', 'Weekend Batches'],
  },
  {
    icon: { art: 'book-open', fallback: 'bookOpen' },
    name: 'Beginner to Advanced English',
    description: 'Structured English learning programs designed for learners from beginner to advanced levels.',
    duration: '24 Weeks',
    rating: '4.8',
    learners: '9,800+',
    level: 'Beginner → Advanced',
    art: '/art/beginner.jpg',
    image: '/images/study-laptop.jpg',
    tags: ['Certificate Included', 'Level Assessment', 'Lifetime Access'],
  },
  {
    icon: { art: 'messages-square', fallback: 'messagesSquare' },
    name: 'Communication Skills',
    description: 'Develop effective communication skills for personal, academic, and professional interactions.',
    duration: '10 Weeks',
    rating: '4.9',
    learners: '7,600+',
    level: 'Intermediate',
    art: '/art/communication.jpg',
    image: '/images/group-discussion.jpg',
    tags: ['Certificate Included', 'Small Batches', 'Recorded Sessions'],
  },
  {
    icon: { art: 'sparkles', fallback: 'sparkles' },
    name: 'Personality Development',
    description: 'Build confidence, interpersonal skills, presentation skills, and a positive personality.',
    duration: '12 Weeks',
    rating: '4.9',
    learners: '6,900+',
    level: 'All Levels',
    art: '/art/personality.jpg',
    image: '/images/happy-students.jpg',
    tags: ['Certificate Included', '1-on-1 Coaching', 'Lifetime Access'],
  },
  {
    icon: { art: 'handshake', fallback: 'users' },
    name: 'Interview Skills',
    description: 'Prepare for interviews with practical communication, confidence-building, and interview practice.',
    duration: '6 Weeks',
    rating: '5.0',
    learners: '5,300+',
    level: 'Job Seekers',
    art: '/art/interview.jpg',
    image: '/images/interview-pro.jpg',
    tags: ['Mock Interviews', 'Placement Support', 'Resume Review'],
  },
  {
    icon: { art: 'presentation', fallback: 'presentation' },
    name: 'Public Speaking',
    description: 'Improve your confidence and learn to speak clearly and effectively in front of an audience.',
    duration: '8 Weeks',
    rating: '4.9',
    learners: '4,700+',
    level: 'Intermediate+',
    art: '/art/public-speaking.jpg',
    image: '/images/hero-speaking.jpg',
    tags: ['Live Stage Practice', 'Certificate Included', 'Recorded Sessions'],
  },
  {
    icon: { art: 'columns', fallback: 'briefcase' },
    name: 'Corporate Communication',
    description: 'Develop professional communication skills for meetings, presentations, workplace interactions, and business situations.',
    duration: '10 Weeks',
    rating: '4.8',
    learners: '3,900+',
    level: 'Professionals',
    art: '/art/corporate.jpg',
    image: '/images/training-room.jpg',
    tags: ['Placement Support', 'Corporate Projects', 'Certificate Included'],
  },
];

export const AUDIENCES = [
  {
    icon: { art: 'graduation-cap', fallback: 'graduationCap' },
    title: 'Students',
    description: 'Ace campus placements, seminars, and study-abroad interviews with polished spoken English.',
    count: '18,500+ learners',
  },
  {
    icon: { art: 'ledger', fallback: 'briefcase' },
    title: 'Working Professionals',
    description: 'Speak up in meetings, present to leadership, and unlock global career opportunities.',
    count: '14,200+ learners',
  },
  {
    icon: { art: 'target-arrow', fallback: 'target' },
    title: 'Job Seekers',
    description: 'Crack interviews, build a standout resume persona, and negotiate with total confidence.',
    count: '9,800+ learners',
  },
  {
    icon: { art: 'hearth-home', fallback: 'heart' },
    title: 'Homemakers',
    description: 'Restart your career, help with kids’ education, and socialize without hesitation.',
    count: '5,100+ learners',
  },
  {
    icon: { art: 'merchant-scale', fallback: 'trendingUp' },
    title: 'Entrepreneurs',
    description: 'Pitch investors, charm clients, and network across borders in flawless English.',
    count: '2,400+ learners',
  },
];

export const METHOD_STEPS = [
  {
    icon: { art: 'raised-hand', fallback: 'zap' },
    title: 'Activity-Based Learning',
    description: 'Learn by doing. 80% of every session is hands-on practice, not lectures.',
  },
  {
    icon: { art: 'theatre-masks', fallback: 'users' },
    title: 'Role Plays',
    description: 'Rehearse real-life situations: restaurants, airports, offices, interviews, and more.',
  },
  {
    icon: { art: 'forum-circle', fallback: 'messagesSquare' },
    title: 'Group Discussions',
    description: 'Debate trending topics in moderated groups to build fluency and quick thinking.',
  },
  {
    icon: { art: 'scroll-podium', fallback: 'presentation' },
    title: 'Presentations',
    description: 'Deliver weekly presentations with live feedback from trainers and peers.',
  },
  {
    icon: { art: 'whisper-voice', fallback: 'mic' },
    title: 'One-to-One Speaking Practice',
    description: 'Personal speaking drills with a certified trainer, recorded and reviewed weekly.',
  },
  {
    icon: { art: 'inkwell-quill', fallback: 'bookOpen' },
    title: 'Vocabulary Building',
    description: 'Master 1,500+ high-impact words and phrases through spaced-repetition games.',
  },
  {
    icon: { art: 'antique-globe', fallback: 'globe' },
    title: 'Real-World Conversations',
    description: 'Graduate to real conversations with native speakers and industry mentors.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: 'Software Engineer, Infosys',
    initials: 'PS',
    avatar: '/images/avatar-1.jpg',
    text: 'I hesitated to speak in stand-ups for two years. After 10 weeks at Pyramid, I presented to 200 people at our annual summit. Life-changing is an understatement.',
    course: 'Spoken English',
  },
  {
    name: 'Rahul Verma',
    role: 'MBA Student, IIM Kozhikode',
    initials: 'RV',
    avatar: '/images/avatar-2.jpg',
    text: 'Cracked my IIM interview after the Interview Skills course. The mock interview panel was tougher than the real one. I walked in fearless.',
    course: 'Interview Skills',
  },
  {
    name: 'Ananya Iyer',
    role: 'Marketing Manager, HUL',
    initials: 'AI',
    avatar: '/images/avatar-3.jpg',
    text: 'The corporate communication module transformed how I run client calls. My manager asked what changed about me in just three months.',
    course: 'Corporate Communication',
  },
  {
    name: 'Arjun Nair',
    role: 'Startup Founder',
    initials: 'AN',
    avatar: '/images/avatar-4.jpg',
    text: 'I pitched to 14 investors in English after completing the public speaking track. Three term sheets later, I owe Pyramid a big thank you.',
    course: 'Public Speaking',
  },
  {
    name: 'Sneha Kulkarni',
    role: 'Homemaker & Content Creator',
    initials: 'SK',
    avatar: '/images/avatar-1.jpg',
    text: 'I joined at 42, terrified of making mistakes. Today I host a podcast in English with 30,000 listeners. If I can do it, anyone can.',
    course: 'Beginner to Advanced English',
  },
  {
    name: 'Vikram Singh',
    role: 'Hotel Management Graduate',
    initials: 'VS',
    avatar: '/images/avatar-2.jpg',
    text: 'Went from avoiding phone calls to handling international guests at a 5-star property. The role plays felt silly, until they worked.',
    course: 'Communication Skills',
  },
];

export const FAQS = [
  {
    question: 'When do new batches start?',
    answer:
      'New batches begin every Monday across all 40+ centers. Morning (7–11 AM), afternoon (12–4 PM), and evening (6–9 PM) slots are available, including weekend-only batches for working professionals.',
  },
  {
    question: 'What are the course fees and payment options?',
    answer:
      'Programs start at ₹4,999 and go up to ₹24,999 depending on duration and level. We offer 0% EMI plans for up to 12 months, early-bird discounts of up to 20%, and a sibling referral bonus.',
  },
  {
    question: 'I am a complete beginner. Which level should I join?',
    answer:
      'Every learner takes a free 20-minute placement assessment. Around 40% of our learners start from zero, and our Beginner to Advanced track takes you to fluent conversational English in about 6 months.',
  },
  {
    question: 'Do you offer online and offline classes?',
    answer:
      'Yes, both. Attend in person at any of our 40+ centers, join live online batches with the same trainers, or mix both with our hybrid flexi pass. All sessions are recorded for revision.',
  },
  {
    question: 'Is there a certificate and placement support?',
    answer:
      'You receive an industry-recognized certificate on completion. Our placement cell connects you with 120+ corporate partners, and interview-focused learners get unlimited mock interviews until placed.',
  },
  {
    question: 'What is the refund policy?',
    answer:
      'A no-questions-asked full refund is available within the first 7 days of your batch. After that, unused classes can be transferred to a future batch or a family member.',
  },
];

export const UPCOMING_BATCHES = [
  { label: 'Morning Batch: Mon, 6 Oct 2026, 7:00 AM', date: '2026-10-06T07:00:00+05:30' },
  { label: 'Evening Batch: Wed, 8 Oct 2026, 6:30 PM', date: '2026-10-08T18:30:00+05:30' },
  { label: 'Weekend Batch: Sat, 11 Oct 2026, 10:00 AM', date: '2026-10-11T10:00:00+05:30' },
];

export const NEXT_BATCH_DATE = '2026-10-06T07:00:00+05:30';

export const FOOTER_COURSES = COURSES.map((c) => c.name);
