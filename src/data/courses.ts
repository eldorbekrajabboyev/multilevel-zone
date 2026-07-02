export interface Course {
  id: string
  title: string
  level: string
  duration: string
  features: string[]
  price: string
  popular?: boolean
  gradient: string
  link?: string
}

export const courses: Course[] = [
  {
    id: 'elementary',
    title: 'A2 dan B2/C1 gacha',
    level: 'A2-B2/C1',
    duration: '3 oy',
    features: [
      'Kengaytirilgan grammatika',
      "2000+ so'z boyligi",
      'Dialog va suhbatlar',
      'Tinglab tushunish',
      'Yozma topshiriqlar',
      'Online kurs',
      'Sertifikat',
    ],
    gradient: 'from-blue-500 to-cyan-400',
    popular: true,
    price: "400 000 so'm/oy",
    link: 'https://t.me/m/MgyFCc-0Mzhi',
  },
  {
    id: 'intermediate',
    title: 'Intermediate',
    level: 'B1-C1',
    duration: '3 oy',
    features: [
      'Avgust/Sentabr examga tayyorgarlik',
      'Har kuni har bir skill ustida ish',
      'B2/C1 darajasiga tayyorlash',
      'Individual yondashuv',
      'Natija kafolati',
      'Sertifikat',
    ],
    gradient: 'from-orange-500 to-amber-400',
    price: "500 000 so'm/oy",
    link: 'https://t.me/m/MgyFCc-0Mzhi',
  },
  {
    id: 'cefr-preparation',
    title: 'CEFR Preparation',
    level: 'A1-C1',
    duration: '2-6 oy',
    features: [
      'Full CEFR tayyorgarlik',
      '4 skill (RLSW)',
      'Mock imtihonlar',
      'Individual yondashuv',
      'Natija kafolati',
      'CEFR sertifikat',
    ],
    gradient: 'from-indigo-500 to-blue-400',
    popular: true,
    price: "500 000 so'm/oy",
    link: 'https://t.me/m/MgyFCc-0Mzhi',
  },
]
