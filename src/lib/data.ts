
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
    title: 'Luxury Villa with Infinity Pool in Unawatuna',
    description: 'Experience tropical paradise in this stunning villa with panoramic ocean views. This property features a private infinity pool, lush gardens, and is just a short walk to the pristine beaches of Unawatuna. Perfect for relaxation and experiencing the natural beauty of Sri Lanka\'s southern coast.',
    type: 'villa',
    location: {
      city: 'Unawatuna',
      country: 'Sri Lanka',
      lat: 6.0174,
      lng: 80.2489,
    },
    host: {
      id: 'h1',
      name: 'Chaminda',
      image: 'https://randomuser.me/api/portraits/men/43.jpg',
      joinDate: '2019-05-15',
      isSuperhost: true,
    },
    images: [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1584132869994-873f9363a562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    ],
    price: 175,
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
      guests: 8,
      bedrooms: 4,
      beds: 5,
      baths: 3.5
    },
    ratings: {
      average: 4.97,
      count: 86,
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
        userName: 'Michael',
        userImage: 'https://randomuser.me/api/portraits/men/32.jpg',
        rating: 5,
        comment: 'This villa is absolute paradise! The views are breathtaking and the property itself is stunning. Every detail has been carefully thought out. We especially loved the infinity pool overlooking the ocean. Can\'t wait to come back to Sri Lanka!',
        date: '2023-09-15'
      },
      {
        id: 'r2',
        userId: 'u2',
        userName: 'Sarah',
        userImage: 'https://randomuser.me/api/portraits/women/22.jpg',
        rating: 5,
        comment: 'We had the most amazing stay at this beautiful villa. The location is perfect, the house is immaculate, and Chaminda was a wonderful host. The beach access was a huge plus!',
        date: '2023-08-22'
      }
    ],
    featured: true
  },
  {
    id: '2',
    title: 'Colonial Heritage Apartment in Colombo',
    description: 'Stylish apartment in the heart of Colombo with beautiful colonial architecture. Walking distance to top restaurants, shops, and cultural attractions. Features modern amenities while preserving the charm of Sri Lanka\'s rich heritage.',
    type: 'apartment',
    location: {
      city: 'Colombo',
      country: 'Sri Lanka',
      lat: 6.9271,
      lng: 79.8612,
    },
    host: {
      id: 'h2',
      name: 'Lakshmi',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      joinDate: '2020-03-10',
      isSuperhost: true,
    },
    images: [
      'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    ],
    price: 85,
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
      guests: 3,
      bedrooms: 1,
      beds: 2,
      baths: 1
    },
    ratings: {
      average: 4.92,
      count: 65,
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
        userName: 'David',
        userImage: 'https://randomuser.me/api/portraits/men/22.jpg',
        rating: 5,
        comment: 'This apartment is a design lover\'s dream! So stylish yet comfortable. The location couldn\'t be better - we walked to all the best spots in Colombo. Lakshmi provided great local tips too!',
        date: '2023-07-05'
      }
    ]
  },
  {
    id: '3',
    title: 'Mountain Retreat in Ella with Spectacular Views',
    description: 'Escape to this cozy mountain retreat surrounded by tea plantations and breathtaking views. This authentic bungalow features a private terrace, comfortable rooms, and is perfectly positioned to watch the sunrise over Ella Gap.',
    type: 'cabin',
    location: {
      city: 'Ella',
      country: 'Sri Lanka',
      lat: 6.8667,
      lng: 81.0466,
    },
    host: {
      id: 'h3',
      name: 'Prasad',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      joinDate: '2018-09-23',
      isSuperhost: true,
    },
    images: [
      'https://images.unsplash.com/photo-1544358650-5e96414db153?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    ],
    price: 95,
    currency: 'USD',
    amenities: [
      'wifi', 
      'kitchen', 
      'indoor-fireplace', 
      'free-parking',
      'heating',
      'tv',
      'breakfast'
    ],
    capacity: {
      guests: 4,
      bedrooms: 2,
      beds: 2,
      baths: 1
    },
    ratings: {
      average: 4.95,
      count: 75,
      cleanliness: 4.9,
      accuracy: 4.8,
      communication: 5.0,
      location: 5.0,
      checkIn: 4.8,
      value: 5.0
    },
    reviews: [
      {
        id: 'r4',
        userId: 'u4',
        userName: 'Emma',
        userImage: 'https://randomuser.me/api/portraits/women/67.jpg',
        rating: 5,
        comment: 'This cabin exceeded our expectations! So peaceful and beautiful. The views of Ella Gap are incredible at sunrise. Prasad was extremely helpful with arranging local activities and the breakfast was delicious!',
        date: '2023-10-18'
      }
    ]
  },
  {
    id: '4',
    title: 'Beachfront Bungalow in Mirissa',
    description: 'Wake up to the sound of waves in this charming beachfront bungalow. Located directly on Mirissa Beach, this property offers simple yet comfortable accommodation with unbeatable ocean views and easy access to whale watching, surfing, and local cuisine.',
    type: 'beachfront',
    location: {
      city: 'Mirissa',
      country: 'Sri Lanka',
      lat: 5.9483,
      lng: 80.4716,
    },
    host: {
      id: 'h4',
      name: 'Thilini',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      joinDate: '2020-01-05',
      isSuperhost: false,
    },
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1594056141808-afbf95d88b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80',
    ],
    price: 75,
    currency: 'USD',
    amenities: [
      'wifi', 
      'air-conditioning', 
      'beachfront', 
      'waterfront',
      'breakfast',
      'free-parking'
    ],
    capacity: {
      guests: 2,
      bedrooms: 1,
      beds: 1,
      baths: 1
    },
    ratings: {
      average: 4.85,
      count: 45,
      cleanliness: 4.7,
      accuracy: 4.8,
      communication: 4.9,
      location: 5.0,
      checkIn: 4.7,
      value: 4.9
    },
    reviews: [
      {
        id: 'r5',
        userId: 'u5',
        userName: 'John',
        userImage: 'https://randomuser.me/api/portraits/men/33.jpg',
        rating: 5,
        comment: 'The location of this bungalow is simply unbeatable! Falling asleep to the sound of waves and waking up with the ocean right at your doorstep is magical. Simple accommodation but absolutely worth it for the experience.',
        date: '2023-11-10'
      }
    ]
  },
  {
    id: '5',
    title: 'Heritage Colonial Mansion in Galle Fort',
    description: 'Experience living history in this beautifully preserved colonial mansion within UNESCO World Heritage Galle Fort. This spacious property features original architectural details, a private courtyard garden, and is surrounded by boutique shops, cafes, and historic sites.',
    type: 'house',
    location: {
      city: 'Galle',
      country: 'Sri Lanka',
      lat: 6.0328,
      lng: 80.2167,
    },
    host: {
      id: 'h5',
      name: 'Ashan',
      image: 'https://randomuser.me/api/portraits/men/53.jpg',
      joinDate: '2018-11-12',
      isSuperhost: true,
    },
    images: [
      'https://images.unsplash.com/photo-1590725140246-20acddc1ec6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1574739782594-db4ead022697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    ],
    price: 195,
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
        userName: 'Sophie',
        userImage: 'https://randomuser.me/api/portraits/women/19.jpg',
        rating: 5,
        comment: 'This mansion is a gem in the heart of Galle Fort! The architecture is stunning and Ashan has done an amazing job preserving the historic elements while providing all modern comforts. The location couldn\'t be better for exploring the fort.',
        date: '2023-09-02'
      }
    ],
    featured: true
  },
  {
    id: '6',
    title: 'Luxury Eco Lodge in Sinharaja Rainforest',
    description: 'Immerse yourself in nature at this sustainable eco-lodge at the edge of Sinharaja Rainforest. This unique property combines luxury and environmental consciousness with spacious rooms, private balconies overlooking the jungle, and guided nature excursions.',
    type: 'cabin',
    location: {
      city: 'Sinharaja',
      country: 'Sri Lanka',
      lat: 6.4029,
      lng: 80.4275,
    },
    host: {
      id: 'h6',
      name: 'Kumara',
      image: 'https://randomuser.me/api/portraits/men/21.jpg',
      joinDate: '2019-04-18',
      isSuperhost: true,
    },
    images: [
      'https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1593080358201-08e19ec4500a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1560866625-23e2980fc88b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    ],
    price: 155,
    currency: 'USD',
    amenities: [
      'wifi', 
      'breakfast', 
      'air-conditioning', 
      'free-parking',
      'tv',
      'pool'
    ],
    capacity: {
      guests: 2,
      bedrooms: 1,
      beds: 1,
      baths: 1
    },
    ratings: {
      average: 4.98,
      count: 54,
      cleanliness: 5.0,
      accuracy: 4.9,
      communication: 5.0,
      location: 5.0,
      checkIn: 4.9,
      value: 5.0
    },
    reviews: [
      {
        id: 'r7',
        userId: 'u7',
        userName: 'Jessica',
        userImage: 'https://randomuser.me/api/portraits/women/65.jpg',
        rating: 5,
        comment: 'We had the most magical stay at this eco lodge! The rainforest location is incredible - we saw so much wildlife from our balcony. Kumara arranged an excellent guided hike and the food was outstanding. A truly special experience in Sri Lanka.',
        date: '2023-08-28'
      }
    ]
  },
  {
    id: '7',
    title: 'Traditional Sri Lankan Villa near Sigiriya',
    description: 'Experience authentic Sri Lankan hospitality in this traditional villa located near the ancient rock fortress of Sigiriya. Set amid rice paddies and tropical gardens, this peaceful retreat offers comfortable rooms, homemade local cuisine, and easy access to cultural sites.',
    type: 'house',
    location: {
      city: 'Sigiriya',
      country: 'Sri Lanka',
      lat: 7.9570,
      lng: 80.7603,
    },
    host: {
      id: 'h7',
      name: 'Priya',
      image: 'https://randomuser.me/api/portraits/women/54.jpg',
      joinDate: '2019-06-20',
      isSuperhost: true,
    },
    images: [
      'https://images.unsplash.com/photo-1582531156832-8f88d47c3e5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1623051759748-4f629265986a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      'https://images.unsplash.com/photo-1623051799160-6e078594c275?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1583003919955-913fb5a3295c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    ],
    price: 65,
    currency: 'USD',
    amenities: [
      'wifi', 
      'breakfast', 
      'air-conditioning',
      'free-parking',
      'tv'
    ],
    capacity: {
      guests: 4,
      bedrooms: 2,
      beds: 2,
      baths: 1
    },
    ratings: {
      average: 4.96,
      count: 65,
      cleanliness: 5.0,
      accuracy: 5.0,
      communication: 5.0,
      location: 4.8,
      checkIn: 5.0,
      value: 5.0
    },
    reviews: [
      {
        id: 'r8',
        userId: 'u8',
        userName: 'Thomas',
        userImage: 'https://randomuser.me/api/portraits/men/7.jpg',
        rating: 5,
        comment: 'Our stay with Priya was the highlight of our Sri Lankan trip. The villa is beautiful and the setting is so peaceful. Priya\'s cooking is incredible - the best food we had in Sri Lanka! Perfect location for visiting Sigiriya and Dambulla.',
        date: '2023-10-15'
      }
    ]
  },
  {
    id: '8',
    title: 'Modern Oceanview Apartment in Negombo',
    description: 'Contemporary apartment with stunning views of Negombo Beach. This stylish space features modern amenities, a fully equipped kitchen, and a balcony perfect for watching the sunset over the Indian Ocean. Conveniently located near restaurants and shops.',
    type: 'apartment',
    location: {
      city: 'Negombo',
      country: 'Sri Lanka',
      lat: 7.2096,
      lng: 79.8379,
    },
    host: {
      id: 'h8',
      name: 'Dinesh',
      image: 'https://randomuser.me/api/portraits/men/33.jpg',
      joinDate: '2020-08-14',
      isSuperhost: false,
    },
    images: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    ],
    price: 80,
    currency: 'USD',
    amenities: [
      'wifi', 
      'kitchen', 
      'air-conditioning', 
      'washer',
      'tv',
      'waterfront'
    ],
    capacity: {
      guests: 3,
      bedrooms: 1,
      beds: 2,
      baths: 1
    },
    ratings: {
      average: 4.82,
      count: 38,
      cleanliness: 4.9,
      accuracy: 4.8,
      communication: 4.7,
      location: 5.0,
      checkIn: 4.8,
      value: 4.7
    },
    reviews: [
      {
        id: 'r9',
        userId: 'u9',
        userName: 'Laura',
        userImage: 'https://randomuser.me/api/portraits/women/2.jpg',
        rating: 5,
        comment: 'Perfect apartment for our first few days in Sri Lanka! Modern, clean and the ocean view is amazing. Great location near the beach and restaurants. Dinesh was very helpful with airport transfers and local recommendations.',
        date: '2023-11-10'
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
    label: 'Beaches',
    icon: '🏖️',
    description: 'Properties located directly on the beautiful Sri Lankan beaches'
  },
  {
    id: 'amazing-views',
    label: 'Amazing views',
    icon: '🏞️',
    description: 'Properties with exceptional views of Sri Lanka\'s landscapes'
  },
  {
    id: 'countryside',
    label: 'Countryside',
    icon: '🌄',
    description: 'Rural properties in peaceful natural settings'
  },
  {
    id: 'mansions',
    label: 'Colonial Homes',
    icon: '🏛️',
    description: 'Historic colonial properties with elegant architecture'
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
    description: 'Properties in lush tropical settings'
  },
  {
    id: 'cabins',
    label: 'Mountain Retreats',
    icon: '⛰️',
    description: 'Cozy properties in Sri Lanka\'s hill country'
  },
  {
    id: 'design',
    label: 'Design',
    icon: '🎨',
    description: 'Architecturally significant or uniquely designed properties'
  },
  {
    id: 'historic',
    label: 'Heritage',
    icon: '🏰',
    description: 'Properties with cultural or historical significance'
  },
  {
    id: 'villa',
    label: 'Villas',
    icon: '🏡',
    description: 'Luxurious private villas for the perfect getaway'
  }
];
