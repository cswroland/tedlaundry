import { Shirt, Wind, Heater, Truck } from 'lucide-react';
import { Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'wash',
    title: 'Professional Wash',
    description: 'Deep cleaning with premium detergents suitable for all fabric types. We treat stains with care.',
    icon: Shirt,
  },
  {
    id: 'dry',
    title: 'Tumble Dry',
    description: 'Perfectly dried clothes that remain soft and fresh. Temperature controlled for fabric safety.',
    icon: Wind,
  },
  {
    id: 'iron',
    title: 'Steam Ironing',
    description: 'Crisp, wrinkle-free finishing for your shirts, trousers, and delicate garments.',
    icon: Heater,
  },
  {
    id: 'pickup',
    title: 'Pick-up & Drop-off',
    description: 'We come to you. Schedule a collection and we will return your laundry fresh and folded.',
    icon: Truck,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    role: 'Student, UP',
    text: 'Ted Laundry Services saved my semester! The pick-up service is a lifesaver when I am drowning in assignments.',
    rating: 5,
  },
  {
    id: '2',
    name: 'David K.',
    role: 'Professional',
    text: 'Impeccable ironing. My work shirts have never looked better. Highly recommended for busy professionals.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Lerato P.',
    role: 'Parent',
    text: 'Fast, friendly, and reliable. The clothes come back smelling amazing and neatly folded. 10/10 service.',
    rating: 5,
  },
  {
    id: '4',
    name: 'James W.',
    role: 'Business Owner',
    text: 'Reliable turnaround times. I drop off in the morning and it is often ready same day. Great value.',
    rating: 5,
  },
];

export const CONTACT_INFO = {
  phone: '073 087 3241',
  phoneDisplay: '+27 73 087 3241',
  address: '1289 Justice Mohammed Street, Menlo Park, Pretoria, 0081',
  website: 'www.tedlaundryservices.co.za',
  whatsapp: '27730873241', // Format for API
};