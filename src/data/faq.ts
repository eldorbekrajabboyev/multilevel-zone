export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'CEFR nima va uni nega olish kerak?',
    answer: "CEFR (Common European Framework of Reference for Languages) - bu Yevropa Kengashi tomonidan qabul qilingan til bilish darajalarining xalqaro standarti. CEFR sertifikati chet el universitetlariga kirishda, ishga joylashishda va immigratsiya jarayonlarida talab qilinadi. Bu sertifikat sizning ingliz tili bilimingizni xalqaro miqyosda tasdiqlaydi.",
  },
  {
    id: 'faq-2',
    question: 'Kurslar qancha davom etadi?',
    answer: "Har bir daraja 2-4 oy davom etadi. To'liq kurs (A1 dan C1 gacha) 12-18 oy ichida yakunlanadi. Siz istalgan darajadan boshlashingiz mumkin, biz sizning bilimingizni test orqali aniqlaymiz.",
  },
  {
    id: 'faq-3',
    question: "Online yoki offline ta'lim?",
    answer: "Ikkala variant ham mavjud. Online darslar Zoom/Google Meet orqali jonli tarzda o'tadi va yozib olinadi. Offline darslar Toshkentdagi 3 ta filialimizda zamonaviy jihozlangan sinflarda o'tadi.",
  },
  {
    id: 'faq-4',
    question: 'Guruhlar necha kishidan iborat?',
    answer: "Guruhlar maksimal 10-12 kishidan iborat. Bu har bir talabaga individual yondashish va ko'proq amaliyot qilish imkonini beradi. Shuningdek, individual darslar ham mavjud.",
  },
  {
    id: 'faq-5',
    question: 'Dars jadvali qanday?',
    answer: "Ertalab (9:00-11:00), kunduzgi (13:00-15:00) va kechki (17:00-19:00, 19:00-21:00) guruhlari mavjud. Haftada 3-4 marta dars bo'ladi. Sizga qulay vaqtni tanlashingiz mumkin.",
  },
  {
    id: 'faq-6',
    question: 'CEFR imtihoniga tayyorgarlik qanday?',
    answer: "Maxsus CEFR tayyorgarlik dasturimiz 4 skill (Reading, Listening, Speaking, Writing) bo'yicha intensiv mashg'ulotlarni o'z ichiga oladi. Har hafta mock testlar o'tkaziladi va natijalar tahlil qilinadi.",
  },
  {
    id: 'faq-7',
    question: "To'lov qanday amalga oshiriladi?",
    answer: "To'lov har oy oldindan amalga oshiriladi. Naqd pul, bank kartasi yoki pul o'tkazmasi orqali to'lashingiz mumkin. 3 oy oldindan to'lovda 10% chegirma mavjud.",
  },
  {
    id: 'faq-8',
    question: 'Kafolat beryapsizlarmi?',
    answer: "Ha, biz 95% muvaffaqiyat ko'rsatkichiga egamiz. Agar kurs yakunida kutilgan natijaga erisha olmasangiz, kursni bepul qayta o'tishingiz mumkin.",
  },
]
