export interface Branch {
  id: string
  name: string
  address: string
  workingHours: string
  phone: string
  image: string
  lat: number
  lng: number
}

export const branches: Branch[] = [
  {
    id: 'branch-1',
    name: 'Chilonzor Filiali',
    address: 'Chilonzor 9-kvartal, 12-uy, Toshkent',
    workingHours: 'Du-Shan: 8:00 - 21:00',
    phone: '+998 71 200 45 45',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=600&h=400&fit=crop',
    lat: 41.2825,
    lng: 69.2136,
  },
  {
    id: 'branch-2',
    name: 'Yunusobod Filiali',
    address: "Yunusobod, Amir Temur ko'chasi, 100-uy",
    workingHours: 'Du-Shan: 9:00 - 21:00',
    phone: '+998 71 200 45 46',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
    lat: 41.3447,
    lng: 69.2847,
  },
  {
    id: 'branch-3',
    name: "Mirzo Ulug'bek Filiali",
    address: "Mirzo Ulug'bek tumani, Buyuk Turon ko'chasi, 21",
    workingHours: 'Du-Shan: 8:00 - 20:00',
    phone: '+998 71 200 45 47',
    image: 'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?w=600&h=400&fit=crop',
    lat: 41.3186,
    lng: 69.2952,
  },
]
