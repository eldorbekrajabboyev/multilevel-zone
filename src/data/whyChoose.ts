import { BookOpen, Users, Target, Mic, FileCheck, Calendar, Monitor, MapPin } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface WhyChooseItem {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export const whyChooseData: WhyChooseItem[] = [
  {
    icon: Users,
    title: "Tajribali O'qituvchilar",
    description: "Har bir o'qituvchimiz CEFR bo'yicha sertifikatlangan, kamida 5 yillik tajribaga ega.",
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: BookOpen,
    title: 'Zamonaviy Metodika',
    description: "Eng so'nggi interaktiv metodlar, digital platformalar va AI yordamida o'qitish.",
    color: 'from-emerald-500 to-teal-400',
  },
  {
    icon: Target,
    title: 'CEFR Tayyorgarlik',
    description: 'Maxsus CEFR dasturi asosida tayyorgarlik, A1 dan C1 gacha barcha darajalar.',
    color: 'from-violet-500 to-purple-400',
  },
  {
    icon: Mic,
    title: 'Speaking Practice',
    description: 'Har kungi speaking klublar, native speakerlar bilan amaliyot va debatlar.',
    color: 'from-orange-500 to-amber-400',
  },
  {
    icon: FileCheck,
    title: 'Mock Imtihonlar',
    description: 'Har oyda real imtihon sharoitida mock testlar, natijalar tahlili.',
    color: 'from-rose-500 to-pink-400',
  },
  {
    icon: Calendar,
    title: 'Moslashuvchan Jadval',
    description: 'Ertalab, kunduzgi va kechki guruhlar. Sizga qulay vaqtni tanlang.',
    color: 'from-indigo-500 to-blue-400',
  },
  {
    icon: Monitor,
    title: 'Online Darslar',
    description: 'Zoom, Google Meet platformalarida jonli darslar, 24/7 yozib olingan video darslar.',
    color: 'from-sky-500 to-blue-400',
  },
  {
    icon: MapPin,
    title: 'Offline Markazlar',
    description: 'Toshkent shahridagi 3 ta qulay filial, zamonaviy jihozlangan sinf xonalari.',
    color: 'from-red-500 to-rose-400',
  },
]
