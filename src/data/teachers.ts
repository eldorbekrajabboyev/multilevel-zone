export interface Teacher {
  id: string
  name: string
  role: string
  experience: string
  yearsExperience: number
  certificates: string[]
  specialization: string[]
  image: string
  ieltsScore: number
  studentsCount: number
  comment: string
  socials: { name: string; url: string }[]
}

export const teachers: Teacher[] = [
  {
    id: 'teacher-1',
    name: 'Aziza Karimova',
    role: 'Senior English Instructor',
    experience: '8 yil',
    yearsExperience: 8,
    certificates: ['CELTA', 'TESOL'],
    specialization: ['CEFR C1', 'Academic Writing'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face',
    ieltsScore: 8.5,
    studentsCount: 350,
    comment: "O'quvchilarimning har biri menga yangi ilhom bag'ishlaydi. Ularning yutuqlari — mening eng katta mukofotim.",
    socials: [
      { name: 'telegram', url: '#' },
      { name: 'instagram', url: '#' },
    ],
  },
  {
    id: 'teacher-2',
    name: 'Jamshid Bekmurodov',
    role: 'Head Teacher & Founder',
    experience: '10 yil',
    yearsExperience: 10,
    certificates: ['DELTA', 'MA TESOL'],
    specialization: ['CEFR Preparation', 'Advanced Grammar', 'Pronunciation'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
    ieltsScore: 9.0,
    studentsCount: 500,
    comment: "Til o'rganish — bu faqat grammatika emas, yangi dunyo eshiklarini ochish. Men shu yo'lda yo'lboshchiman.",
    socials: [
      { name: 'telegram', url: '#' },
      { name: 'instagram', url: '#' },
      { name: 'linkedin', url: '#' },
    ],
  },
  {
    id: 'teacher-3',
    name: 'Malika Rahimova',
    role: 'Speaking Coach',
    experience: '6 yil',
    yearsExperience: 6,
    certificates: ['TEFL', 'CEFR C1'],
    specialization: ['Speaking', 'Debate', 'Presentation Skills'],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face',
    ieltsScore: 8.0,
    studentsCount: 280,
    comment: "Gapirish — bu tilda emas, ishonchda. O'quvchilarimga o'z ovozlarini topishga yordaman.",
    socials: [
      { name: 'telegram', url: '#' },
      { name: 'instagram', url: '#' },
    ],
  },
  {
    id: 'teacher-4',
    name: 'Bobur Tursunov',
    role: 'Writing Expert',
    experience: '7 yil',
    yearsExperience: 7,
    certificates: ['CELTA', 'MA Linguistics'],
    specialization: ['Academic Writing', 'Essay Correction', 'Grammar'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face',
    ieltsScore: 8.5,
    studentsCount: 320,
    comment: "Yozish — bu fikrlashning eng sof shakli. Har bir inson o'z hikoyasini yozishi kerak.",
    socials: [
      { name: 'telegram', url: '#' },
      { name: 'instagram', url: '#' },
      { name: 'linkedin', url: '#' },
    ],
  },
]
