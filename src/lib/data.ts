
export type PropertyType = 
  | 'apartment'
  | 'house'
  | 'cabin'
  | 'villa'
  | 'loft'
  | 'mansion'
  | 'beachfront'
  | 'lakefront'
  | 'countryside';

export type AmenityType = 
  | 'wifi'
  | 'kitchen'
  | 'washer'
  | 'dryer'
  | 'air-conditioning'
  | 'heating'
  | 'dedicated-workspace'
  | 'tv'
  | 'hair-dryer'
  | 'iron'
  | 'pool'
  | 'hot-tub'
  | 'free-parking'
  | 'ev-charger'
  | 'crib'
  | 'gym'
  | 'bbq-grill'
  | 'breakfast'
  | 'indoor-fireplace'
  | 'smoking-allowed'
  | 'beachfront'
  | 'waterfront'
  | 'ski-in-out';

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userImage: string;
  rating: number;
  comment: string;
  date: string;
}

export interface PropertyListing {
  id: string;
  title: string;
  description: string;
  type: PropertyType;
  location: {
    city: string;
    country: string;
    address?: string;
    lat: number;
    lng: number;
  };
  host: {
    id: string;
    name: string;
    image: string;
    joinDate: string;
    isSuperhost: boolean;
  };
  images: string[];
  price: number;
  currency: string;
  amenities: AmenityType[];
  capacity: {
    guests: number;
    bedrooms: number;
    beds: number;
    baths: number;
  };
  ratings: {
    average: number;
    count: number;
    cleanliness: number;
    accuracy: number;
    communication: number;
    location: number;
    checkIn: number;
    value: number;
  };
  reviews: Review[];
  availableDates?: {
    startDate: string;
    endDate: string;
  }[];
  featured?: boolean;
}

export const properties: PropertyListing[] = [
  {
    id: '1',
    title: 'Luxury Beachfront Villa with Infinity Pool',
    description: 'Experience the ultimate luxury beachfront getaway with panoramic ocean views. This stunning villa features a private infinity pool, direct beach access, and spacious indoor-outdoor living areas perfect for relaxation and entertainment.',
    type: 'villa',
    location: {
      city: 'Malibu',
      country: 'United States',
      lat: 34.025922,
      lng: -118.779757,
    },
    host: {
      id: 'h1',
      name: 'Alexandra',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      joinDate: '2018-03-15',
      isSuperhost: true,
    },
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80'
    ],
    price: 1250,
    currency: 'USD',
    amenities: [
      'wifi', 
      'kitchen', 
      'pool', 
      'air-conditioning', 
      'beachfront', 
      'bbq-grill', 
      'free-parking',
      'washer',
      'dryer',
      'tv',
      'hot-tub'
    ],
    capacity: {
      guests: 10,
      bedrooms: 5,
      beds: 7,
      baths: 4.5
    },
    ratings: {
      average: 4.97,
      count: 128,
      cleanliness: 5.0,
      accuracy: 4.9,
      communication: 5.0,
      location: 5.0,
      checkIn: 4.9,
      value: 4.9
    },
    reviews: [
      {
        id: 'r1',
        userId: 'u1',
        userName: 'Jennifer',
        userImage: 'https://randomuser.me/api/portraits/women/12.jpg',
        rating: 5,
        comment: 'This place is absolute paradise! The views are breathtaking and the villa itself is stunning. Every detail has been carefully thought out. We especially loved the infinity pool overlooking the ocean. Can't wait to come back!',
        date: '2023-07-15'
      },
      {
        id: 'r2',
        userId: 'u2',
        userName: 'Michael',
        userImage: 'https://randomuser.me/api/portraits/men/32.jpg',
        rating: 5,
        comment: 'We had the most amazing stay at this beautiful villa. The location is perfect, the house is immaculate, and Alexandra was a wonderful host. The private beach access was a huge plus!',
        date: '2023-06-22'
      }
    ],
    featured: true
  },
  {
    id: '2',
    title: 'Modern Scandinavian Apartment in City Center',
    description: 'Stylish and minimalist Scandinavian-inspired apartment in the heart of the city. Walking distance to top restaurants, shops, and cultural attractions. Features high-end appliances, designer furniture, and a private balcony with city views.',
    type: 'apartment',
    location: {
      city: 'Copenhagen',
      country: 'Denmark',
      lat: 55.676098,
      lng: 12.568337,
    },
    host: {
      id: 'h2',
      name: 'Magnus',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      joinDate: '2019-05-10',
      isSuperhost: true,
    },
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2158&q=80',
      'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
      'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    ],
    price: 220,
    currency: 'USD',
    amenities: [
      'wifi', 
      'kitchen', 
      'air-conditioning', 
      'heating',
      'washer',
      'dedicated-workspace',
      'tv'
    ],
    capacity: {
      guests: 2,
      bedrooms: 1,
      beds: 1,
      baths: 1
    },
    ratings: {
      average: 4.92,
      count: 98,
      cleanliness: 5.0,
      accuracy: 4.9,
      communication: 4.8,
      location: 5.0,
      checkIn: 5.0,
      value: 4.8
    },
    reviews: [
      {
        id: 'r3',
        userId: 'u3',
        userName: 'Sarah',
        userImage: 'https://randomuser.me/api/portraits/women/22.jpg',
        rating: 5,
        comment: 'This apartment is a design lover's dream! So stylish yet comfortable. The location couldn't be better - we walked everywhere. Magnus provided great local tips too!',
        date: '2023-07-05'
      }
    ]
  },
  {
    id: '3',
    title: 'Rustic Mountain Cabin with Hot Tub',
    description: 'Escape to this cozy mountain retreat surrounded by pine forests. This authentic log cabin features a private hot tub, stone fireplace, and wraparound deck with mountain views. Perfect for a romantic getaway or small family vacation.',
    type: 'cabin',
    location: {
      city: 'Aspen',
      country: 'United States',
      lat: 39.191097,
      lng: -106.817535,
    },
    host: {
      id: 'h3',
      name: 'Robert',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      joinDate: '2017-09-23',
      isSuperhost: true,
    },
    images: [
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    ],
    price: 375,
    currency: 'USD',
    amenities: [
      'wifi', 
      'kitchen', 
      'indoor-fireplace', 
      'hot-tub', 
      'free-parking',
      'heating',
      'tv',
      'washer',
      'dryer'
    ],
    capacity: {
      guests: 4,
      bedrooms: 2,
      beds: 2,
      baths: 2
    },
    ratings: {
      average: 4.89,
      count: 75,
      cleanliness: 4.9,
      accuracy: 4.8,
      communication: 5.0,
      location: 4.9,
      checkIn: 4.8,
      value: 4.8
    },
    reviews: [
      {
        id: 'r4',
        userId: 'u4',
        userName: 'David',
        userImage: 'https://randomuser.me/api/portraits/men/67.jpg',
        rating: 5,
        comment: 'This cabin exceeded our expectations! So peaceful and beautiful. We loved relaxing in the hot tub after a day of hiking. The cabin is incredibly well-maintained and has everything you need.',
        date: '2023-06-18'
      }
    ]
  },
  {
    id: '4',
    title: 'Sleek Downtown Loft with City Views',
    description: 'Contemporary industrial-style loft in a converted historic building. Features exposed brick walls, high ceilings, and floor-to-ceiling windows with spectacular city views. Steps away from trendy restaurants, bars, and galleries.',
    type: 'loft',
    location: {
      city: 'New York',
      country: 'United States',
      lat: 40.712776,
      lng: -74.005974,
    },
    host: {
      id: 'h4',
      name: 'Jessica',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      joinDate: '2020-01-05',
      isSuperhost: true,
    },
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1680&q=80',
      'https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    ],
    price: 299,
    currency: 'USD',
    amenities: [
      'wifi', 
      'kitchen', 
      'air-conditioning', 
      'heating',
      'washer',
      'dryer',
      'dedicated-workspace',
      'tv'
    ],
    capacity: {
      guests: 3,
      bedrooms: 1,
      beds: 2,
      baths: 1
    },
    ratings: {
      average: 4.85,
      count: 112,
      cleanliness: 4.9,
      accuracy: 4.8,
      communication: 4.9,
      location: 5.0,
      checkIn: 4.7,
      value: 4.7
    },
    reviews: [
      {
        id: 'r5',
        userId: 'u5',
        userName: 'Emma',
        userImage: 'https://randomuser.me/api/portraits/women/33.jpg',
        rating: 5,
        comment: 'Jessica's loft is absolutely gorgeous! The space is beautifully designed and the views are incredible. The location is perfect for exploring the city. Would definitely stay here again!',
        date: '2023-07-10'
      }
    ]
  },
  {
    id: '5',
    title: 'Historic Townhouse in Old City Center',
    description: 'Charming 18th-century townhouse with modern amenities in the historic district. Featuring original architectural details, a private courtyard garden, and a rooftop terrace with cathedral views. Walking distance to major cultural landmarks.',
    type: 'house',
    location: {
      city: 'Rome',
      country: 'Italy',
      lat: 41.902782,
      lng: 12.496366,
    },
    host: {
      id: 'h5',
      name: 'Marco',
      image: 'https://randomuser.me/api/portraits/men/53.jpg',
      joinDate: '2018-11-12',
      isSuperhost: true,
    },
    images: [
      'https://images.unsplash.com/photo-1590725140246-20acddc1ec6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1574739782594-db4ead022697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    ],
    price: 430,
    currency: 'USD',
    amenities: [
      'wifi', 
      'kitchen', 
      'air-conditioning', 
      'heating',
      'washer',
      'dryer',
      'tv',
      'hair-dryer',
      'iron'
    ],
    capacity: {
      guests: 6,
      bedrooms: 3,
      beds: 3,
      baths: 2.5
    },
    ratings: {
      average: 4.95,
      count: 87,
      cleanliness: 5.0,
      accuracy: 4.9,
      communication: 5.0,
      location: 5.0,
      checkIn: 4.8,
      value: 4.9
    },
    reviews: [
      {
        id: 'r6',
        userId: 'u6',
        userName: 'Thomas',
        userImage: 'https://randomuser.me/api/portraits/men/19.jpg',
        rating: 5,
        comment: 'This townhouse is a gem in the heart of Rome! The architecture is stunning and Marco has done an amazing job preserving the historic elements while providing all modern comforts. The location couldn't be better.',
        date: '2023-07-02'
      }
    ]
  },
  {
    id: '6',
    title: 'Oceanfront Beach House with Private Access',
    description: 'Modern beach house with direct ocean access and panoramic views. Featuring a spacious open floor plan, floor-to-ceiling windows, multiple decks, and a private path to the beach. Perfect for a family vacation or gathering with friends.',
    type: 'beachfront',
    location: {
      city: 'Santa Barbara',
      country: 'United States',
      lat: 34.420831,
      lng: -119.698189,
    },
    host: {
      id: 'h6',
      name: 'Olivia',
      image: 'https://randomuser.me/api/portraits/women/21.jpg',
      joinDate: '2019-04-18',
      isSuperhost: true,
    },
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1594056141808-afbf95d88b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80',
      'https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    ],
    price: 875,
    currency: 'USD',
    amenities: [
      'wifi', 
      'kitchen', 
      'air-conditioning', 
      'heating',
      'washer',
      'dryer',
      'tv',
      'free-parking',
      'bbq-grill',
      'beachfront',
      'waterfront'
    ],
    capacity: {
      guests: 8,
      bedrooms: 4,
      beds: 5,
      baths: 3
    },
    ratings: {
      average: 4.96,
      count: 104,
      cleanliness: 5.0,
      accuracy: 4.9,
      communication: 4.9,
      location: 5.0,
      checkIn: 4.9,
      value: 4.9
    },
    reviews: [
      {
        id: 'r7',
        userId: 'u7',
        userName: 'Sophia',
        userImage: 'https://randomuser.me/api/portraits/women/65.jpg',
        rating: 5,
        comment: 'We had the most magical stay at this beach house! Falling asleep to the sound of waves and waking up to that view was incredible. The house is beautifully designed and had everything we needed. Can't wait to return!',
        date: '2023-06-28'
      }
    ],
    featured: true
  },
  {
    id: '7',
    title: 'Private Island Retreat with 360° Water Views',
    description: 'Experience the ultimate exclusivity on this private island property. This luxurious retreat features multiple pavilions, infinity pools, a private dock, and 360-degree water views. Accessible by boat or helicopter, it offers complete privacy and serenity.',
    type: 'villa',
    location: {
      city: 'Bora Bora',
      country: 'French Polynesia',
      lat: -16.500413,
      lng: -151.741490,
    },
    host: {
      id: 'h7',
      name: 'Jean-Pierre',
      image: 'https://randomuser.me/api/portraits/men/54.jpg',
      joinDate: '2018-06-20',
      isSuperhost: true,
    },
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    ],
    price: 2500,
    currency: 'USD',
    amenities: [
      'wifi', 
      'kitchen', 
      'air-conditioning', 
      'pool',
      'washer',
      'dryer',
      'tv',
      'waterfront',
      'beachfront'
    ],
    capacity: {
      guests: 8,
      bedrooms: 4,
      beds: 4,
      baths: 4
    },
    ratings: {
      average: 4.99,
      count: 45,
      cleanliness: 5.0,
      accuracy: 5.0,
      communication: 5.0,
      location: 5.0,
      checkIn: 5.0,
      value: 4.9
    },
    reviews: [
      {
        id: 'r8',
        userId: 'u8',
        userName: 'William',
        userImage: 'https://randomuser.me/api/portraits/men/7.jpg',
        rating: 5,
        comment: 'This private island paradise exceeded all expectations. It's truly a once-in-a-lifetime experience. The staff, the accommodations, and the setting are all extraordinary. Worth every penny for a special occasion.',
        date: '2023-05-15'
      }
    ],
    featured: true
  },
  {
    id: '8',
    title: 'Designer Penthouse with Rooftop Terrace',
    description: 'Luxurious penthouse apartment with panoramic city views. This stylish space features high-end designer furnishings, floor-to-ceiling windows, a gourmet kitchen, and a spacious private rooftop terrace perfect for entertaining.',
    type: 'apartment',
    location: {
      city: 'London',
      country: 'United Kingdom',
      lat: 51.507351,
      lng: -0.127758,
    },
    host: {
      id: 'h8',
      name: 'Charlotte',
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
      joinDate: '2019-08-14',
      isSuperhost: true,
    },
    images: [
      'https://images.unsplash.com/photo-1529408632839-a54952c491e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    ],
    price: 550,
    currency: 'USD',
    amenities: [
      'wifi', 
      'kitchen', 
      'air-conditioning', 
      'heating',
      'washer',
      'dryer',
      'tv',
      'dedicated-workspace',
      'elevator'
    ],
    capacity: {
      guests: 4,
      bedrooms: 2,
      beds: 2,
      baths: 2
    },
    ratings: {
      average: 4.91,
      count: 68,
      cleanliness: 5.0,
      accuracy: 4.8,
      communication: 4.9,
      location: 5.0,
      checkIn: 4.8,
      value: 4.9
    },
    reviews: [
      {
        id: 'r9',
        userId: 'u9',
        userName: 'James',
        userImage: 'https://randomuser.me/api/portraits/men/2.jpg',
        rating: 5,
        comment: 'Charlotte's penthouse is spectacular! The interior design is magazine-worthy and the rooftop terrace offers the most amazing views of London. The location is perfect - close to everything. Highly recommend!',
        date: '2023-06-10'
      }
    ]
  }
];

export type CategoryItem = {
  id: string;
  label: string;
  icon: string;
  description?: string;
};

export const categories: CategoryItem[] = [
  {
    id: 'beachfront',
    label: 'Beachfront',
    icon: '🏖️',
    description: 'Properties located directly on the beach or coastline'
  },
  {
    id: 'amazing-views',
    label: 'Amazing views',
    icon: '🏞️',
    description: 'Properties with exceptional views of landscapes or cityscapes'
  },
  {
    id: 'design',
    label: 'Design',
    icon: '🏛️',
    description: 'Architecturally significant or uniquely designed properties'
  },
  {
    id: 'countryside',
    label: 'Countryside',
    icon: '🌄',
    description: 'Rural properties in peaceful natural settings'
  },
  {
    id: 'mansions',
    label: 'Mansions',
    icon: '🏰',
    description: 'Large, luxurious residences with premium features'
  },
  {
    id: 'luxury',
    label: 'Luxury',
    icon: '✨',
    description: 'High-end properties with premium amenities and services'
  },
  {
    id: 'tropical',
    label: 'Tropical',
    icon: '🌴',
    description: 'Properties in warm, exotic locations with lush vegetation'
  },
  {
    id: 'cabins',
    label: 'Cabins',
    icon: '🌲',
    description: 'Cozy wooden homes typically in forest or mountain settings'
  },
  {
    id: 'skiing',
    label: 'Skiing',
    icon: '⛷️',
    description: 'Properties with easy access to ski slopes or winter sports'
  },
  {
    id: 'historic',
    label: 'Historic',
    icon: '🏛️',
    description: 'Properties with historical significance or period features'
  }
];
