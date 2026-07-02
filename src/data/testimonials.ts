export interface Testimonial {
  id: string
  name: string
  role: string
  image: string
  text: string
  rating: number
  achievement: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Shahzoda Nurmatova',
    role: 'Universitet talabasi',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    text: "MultiLevel Zone da 6 oy o'qib, CEFR B2 sertifikatini oldim. Hozir chet el universitetiga hujjat topshirdim. O'qituvchilar juda professional va darslar qiziqarli.",
    rating: 5,
    achievement: 'CEFR B2',
  },
  {
    id: 'test-2',
    name: 'Sardor Aliyev',
    role: 'IT mutaxassis',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    text: "Ish bilan birga o'qish imkoniyati juda qulay. Kechki guruhlarga qatnab, ingliz tilini yuqori darajada o'zlashtirdim. Endi chet elda ishlash imkoniyatim oshdi.",
    rating: 5,
    achievement: 'Ingliz tili C1',
  },
  {
    id: 'test-3',
    name: 'Gulnoza Xasanova',
    role: "O'qituvchi",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    text: "3 yil davomida ingliz tilini o'rganolmay yurgan edim. MultiLevel Zone dagi maxsus metodika yordamida 4 oyda B1 darajasiga chiqdim.",
    rating: 5,
    achievement: 'CEFR B1',
  },
  {
    id: 'test-4',
    name: 'Javohir Sobirov',
    role: 'Tadbirkor',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face',
    text: "Business English kursi men uchun juda foydali bo'ldi. Hozir xorijiy hamkorlar bilan erkin muzokara olib bormoqdaman.",
    rating: 5,
    achievement: 'Business English',
  },
  {
    id: 'test-5',
    name: 'Lola Abdullayeva',
    role: "Maktab o'quvchisi",
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face',
    text: "CEFR A2 dan boshladim, 8 oydan keyin C1 sertifikatini qo'lga kiritdim. Speaking klublar menga juda ko'p yordam berdi.",
    rating: 5,
    achievement: 'CEFR C1',
  },
]
