// components/HotelList.jsx
'use client'

import React, { useState } from 'react'
import { ExternalLink, MapPin, Star } from 'lucide-react'

const hotels = [
  {
    name: 'Hotel Ilapuram',
    url: 'https://ilapuram.com/',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop',
    rating: 4.2,
    location: 'Governorpet',
    amenities: ['WiFi', 'AC', 'Restaurant'],
  },
  {
    name: 'Hotel Sree Vasudev',
    url: 'https://hotelsreevasudev.com/',
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=300&h=200&fit=crop',
    rating: 4.0,
    location: 'Bunder Road',
    amenities: ['WiFi', 'Parking', '24/7'],
  },
  {
    name: 'Hotel Sun Square',
    url:
      'https://www.makemytrip.com/hotels/hotel_sun_square-details-vijaywada.html',
    image:
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=300&h=200&fit=crop',
    rating: 3.9,
    location: 'MG Road',
    amenities: ['AC', 'WiFi', 'Room Service'],
  },
  {
    name: 'Hotel Sripada',
    url:
      'https://www.makemytrip.com/hotels/hotel_sripada-details-vijaywada.html',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=300&h=200&fit=crop',
    rating: 3.8,
    location: 'Railway Station Area',
    amenities: ['WiFi', 'AC', 'Restaurant'],
  },
  {
    name: 'Hotel Kosala',
    url: 'https://www.kosalahotel.com/',
    image:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=200&fit=crop',
    rating: 4.1,
    location: 'Near Station',
    amenities: ['WiFi', 'Parking', 'AC'],
  },
  {
    name: 'Hotel Midcity',
    url: 'https://www.hotelmidcity.com/',
    image: '/1.jpeg',
    rating: 3.7,
    location: 'Bunder Road',
    amenities: ['AC', 'WiFi', 'Lift'],
  },
  {
    name: 'FabHotel RR Grand (near Trendset Mall)',
    url:
      'https://www.makemytrip.com/hotels/fabhotel_rr_grand_next_to_trendset_mall-details-vijayawada.html',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300&h=200&fit=crop',
    rating: 4.3,
    location: 'Trendset Mall Area',
    amenities: ['Modern', 'WiFi', 'AC'],
  },
  {
    name: 'FabHotel Golden Way',
    url:
      'https://www.booking.com/hotel/in/golden-way-vijayawada.html',
    image:
      'https://images.unsplash.com/photo-1587985064135-0366536eab42?w=300&h=200&fit=crop',
    rating: 4.0,
    location: 'City Center',
    amenities: ['WiFi', 'AC', 'Clean'],
  },
  {
    name: 'FabHotel Prime D Dev (Tadepalli)',
    url:
      'https://www.booking.com/hotel/in/fabhotel-d-dev.html',
    image:
      'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=300&h=200&fit=crop',
    rating: 4.1,
    location: 'Tadepalli',
    amenities: ['Modern', 'WiFi', 'Premium'],
  },
  {
    name: 'Super Hotel O (Near Railway Station) – OYO',
    url: 'https://www.oyorooms.com/195970/',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop',
    rating: 3.6,
    location: 'Railway Station',
    amenities: ['Budget', 'AC', 'WiFi'],
  },
  {
    name: 'OYO Rooms (Vijayawada list)',
    url: 'https://www.oyorooms.com/hotels-in-vijayawada/',
    image:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=300&h=200&fit=crop',
    rating: 3.5,
    location: 'Multiple Locations',
    amenities: ['Budget', 'WiFi', 'AC'],
  },
  {
    name: 'Hotel Aira (Benz Circle)',
    url: 'https://www.agoda.com/hotel-aira_2/hotel/vijayawada-in.html',
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=300&h=200&fit=crop',
    rating: 4.2,
    location: 'Benz Circle',
    amenities: ['Premium', 'WiFi', 'Restaurant'],
  },
  {
    name: 'Hotel Swarna Palace',
    url:
      'https://www.makemytrip.com/hotels/hotel_swarna_palace-details-vijayawada.html',
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=300&h=200&fit=crop',
    rating: 3.9,
    location: 'Labbipet',
    amenities: ['Traditional', 'AC', 'WiFi'],
  },
  {
    name: 'Hotel Sree Vasudev (Booking page)',
    url:
      'https://www.booking.com/hotel/in/sree-vasudev-vijayawada1.html',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=300&h=200&fit=crop',
    rating: 4.0,
    location: 'Central Area',
    amenities: ['WiFi', 'Restaurant', 'AC'],
  },
  {
    name: 'Hotel Sun Square (Goibibo)',
    url:
      'https://www.goibibo.com/hotels/sun-square-hotel-in-vijayawada-5808355584631181082/',
    image: '/2.jpeg',
    rating: 3.8,
    location: 'Business District',
    amenities: ['Business', 'WiFi', 'AC'],
  },
]

/** small helper: split array into two columns */
const splitIntoTwoColumns = (items) => {
  const mid = Math.ceil(items.length / 2)
  return [items.slice(0, mid), items.slice(mid)]
}

/** Hotel card item */
function HotelItem({ name, url, image, rating, location, amenities }) {
  const [imgSrc, setImgSrc] = useState(image)
  const fallback =
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop'

  const fullStars = Math.floor(rating)
  const hasHalf = rating - fullStars >= 0.5

  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-transform transform hover:-translate-y-1">
      <div className="flex gap-3 p-3 md:p-4">
        {/* image */}
        <div className="flex-shrink-0">
          <div className="relative">
            <img
              src={imgSrc}
              alt={name}
              onError={() => setImgSrc(fallback)}
              className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full border"
            />
            {/* rating badge */}
            <div className="absolute -top-2 -right-2 bg-[#141E46] text-white text-xs font-semibold rounded-full w-7 h-7 flex items-center justify-center">
              {rating}
            </div>
          </div>
        </div>

        {/* body */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <h3 className="text-sm md:text-base font-semibold text-[#141E46] truncate">{name}</h3>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs md:text-sm px-2 py-1 rounded-md bg-[#141E46] text-white"
            >
              <ExternalLink size={14} /> Book
            </a>
          </div>

          {/* stars and numeric rating */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-[2px]">
              {Array.from({ length: fullStars }).map((_, i) => (
                <Star key={i} size={14} className="text-[#141E46]" />
              ))}
              {hasHalf && <Star key="half" size={14} className="text-[#141E46] opacity-60" />}
            </div>
            <span className="text-xs text-gray-500">({rating})</span>
          </div>

          {/* location */}
          <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
            <MapPin size={14} className="text-[#141E46]" />
            <span>{location}</span>
          </div>

          {/* price tag & amenities */}
          <div className="flex flex-wrap items-center gap-3 mt-3">
            <span className="text-xs bg-[#E8EBF7] text-[#141E46] px-2 py-1 rounded">₹1,000–₹2,000 / day</span>

            <div className="flex gap-2 items-center">
              {amenities.slice(0, 2).map((a, i) => (
                <span
                  key={i}
                  className="text-xs border px-2 py-1 rounded bg-gray-50 text-[#141E46]"
                >
                  {a}
                </span>
              ))}
              {amenities.length > 2 && (
                <span className="text-xs border px-2 py-1 rounded bg-gray-50 text-[#141E46]">+{amenities.length - 2}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

/** main list component */
export default function HotelList() {
  const [left, right] = splitIntoTwoColumns(hotels.slice(0, 15))

  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#EB1165]">Budget Hotels in Vijayawada</h2>
          <div className="inline-flex items-center gap-3 mt-3 bg-white rounded-full px-4 py-2 shadow-sm border">
            <MapPin size={18} className="text-[#141E46]" />
            <span className="font-medium text-sm text-[#141E46]">Target Budget:</span>
            <span className="text-xs bg-[#141E46] text-white px-3 py-1 rounded-full">₹1,000 – ₹2,000 / day</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            {left.map((hotel) => (
              <HotelItem key={hotel.name + '_L'} {...hotel} />
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {right.map((hotel) => (
              <HotelItem key={hotel.name + '_R'} {...hotel} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
