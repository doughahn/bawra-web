"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the marina type
type Marina = {
  id: string;
  name: string;
  location: string;
  address: string;
  mapLink: string;
  phone?: string;
  website?: string;
  description: string;
  facilities: string[];
  launchers: string[];
  image: string;
  boatImage: string;
};

// Marina data
const marinas: Marina[] = [
  {
    id: "hyde-street",
    name: "Hyde Street Harbor",
    location: "San Francisco",
    address: "Hyde St. Pier, San Francisco, CA 94109",
    mapLink: "https://goo.gl/maps/hxZdF8CDEsLRVcCt9",
    phone: "(415) 673-0333",
    website: "https://www.sfport.com/yacht-harbors",
    description: "Hyde Street Harbor is home to the fishing fleet and recreation vessels. Located adjacent to the Historic Hyde Street Pier of the San Francisco Maritime National Historic Park at the west end of Fisherman's Wharf, the marina is just blocks away from Ghirardelli Square and North Beach.",
    facilities: [
      "Public bathrooms on Aquatic Park Promenade",
      "City Harbor Master on site",
      "San Francisco Municipal Pier",
      "Historic Vessels on display at Hyde Street Pier"
    ],
    launchers: [
      "Aquatic Park Pier and Beach",
      "Hyde Street Marina (with permission)"
    ],
    image: "/images/marinas-hyde-st-28.jpg",
    boatImage: "/images/marinas-hyde-st-boat-20.jpg"
  },
  {
    id: "south-beach",
    name: "Pier 40 / South Beach Harbor",
    location: "San Francisco",
    address: "Pier 40, San Francisco, CA 94107",
    mapLink: "https://goo.gl/maps/3DgzqGhLCRftxbYj6",
    phone: "(415) 495-4911",
    website: "https://www.sfport.com/yacht-harbors",
    description: "South Beach Harbor, located near Oracle Park (formerly AT&T Park), is one of San Francisco's newer marinas. The harbor's 700 slips make it the largest in the city, and it offers stunning views of the Bay Bridge and Oakland skyline.",
    facilities: [
      "Public restrooms",
      "Laundry facilities",
      "Harbor office and community room",
      "Oracle Park within walking distance",
      "South Beach Yacht Club"
    ],
    launchers: [
      "Public floating dock at the east end of the harbor",
      "Concrete launching ramp at Pier 52 (Mission Creek Harbor)"
    ],
    image: "/images/marinas-pier-40-29.jpg",
    boatImage: "/images/marinas-pier-40-boat-21.jpg"
  },
  {
    id: "berkeley",
    name: "Berkeley Marina",
    location: "Berkeley",
    address: "201 University Ave, Berkeley, CA 94710",
    mapLink: "https://goo.gl/maps/7e4qqN3Py6Hn9X6RA",
    phone: "(510) 981-6740",
    website: "https://www.cityofberkeley.info/Parks_Rec_Waterfront/Marina/Berkeley_Marina.aspx",
    description: "The Berkeley Marina is nestled on the east shore of San Francisco Bay. The marina offers a protected harbor with 1,000 berths and is the site for many BAWRA races including Sprint the Pier.",
    facilities: [
      "Public restrooms and showers",
      "Picnic areas and trails",
      "Adventure Playground",
      "Several restaurants",
      "Cal Sailing Club",
      "Berkeley Yacht Club"
    ],
    launchers: [
      "Public boat launch ramp",
      "Small craft docks",
      "K Dock guest berths"
    ],
    image: "/images/marinas-berkeley-33.jpg",
    boatImage: "/images/marinas-berkeley-boat-12.jpg"
  },
  {
    id: "fortman",
    name: "Fortman Marina",
    location: "Alameda",
    address: "1535 Buena Vista Ave, Alameda, CA 94501",
    mapLink: "https://goo.gl/maps/k6R3VBMfDtv6hnPt9",
    phone: "(510) 522-9080",
    website: "https://fortman.com/",
    description: "Fortman Marina is located in the protected Oakland Estuary. It offers 497 slips and is one of the oldest marinas in the Bay Area, dating back to the 1940s. It provides calm water and protection from the wind that makes it ideal for many nautical activities.",
    facilities: [
      "Gated security",
      "Modern restrooms and showers",
      "Laundry facilities",
      "Ample parking",
      "Alameda Yacht Club"
    ],
    launchers: [
      "Small craft floating dock (with permission)",
      "Nearby launch ramp at Grand Street"
    ],
    image: "/images/marinas-fortman-28.jpg",
    boatImage: "/images/marinas-fortman-boat-17.jpg"
  },
  {
    id: "vallejo",
    name: "Vallejo Marina",
    location: "Vallejo",
    address: "42 Harbor Way, Vallejo, CA 94590",
    mapLink: "https://goo.gl/maps/1PcBkC24uQpb3wfi8",
    phone: "(707) 648-4370",
    website: "https://www.cityofvallejo.net/city_hall/departments___divisions/public_works/vallejo_marina",
    description: "The Vallejo Marina is located at the northern end of San Pablo Bay, with easy access to Napa River, San Pablo Bay, and the Sacramento Delta. It provides 552 slips and is the site for BAWRA's Skipper Whipper race.",
    facilities: [
      "Public restrooms and showers",
      "Fuel dock",
      "Ferry service to San Francisco",
      "Waterfront restaurants and shops",
      "Vallejo Yacht Club"
    ],
    launchers: [
      "Public boat ramp",
      "Guest docks available"
    ],
    image: "/images/marinas-vallejo-33.jpg",
    boatImage: "/images/marinas-vallejo-boat14.jpg"
  },
  {
    id: "embarcadero-cove",
    name: "Embarcadero Cove Marina",
    location: "Oakland",
    address: "1855 Embarcadero, Oakland, CA 94606",
    mapLink: "https://goo.gl/maps/gH54sYfLPukB3x566",
    phone: "(510) 536-6272",
    description: "Embarcadero Cove is a public marina in the Oakland Estuary, offering sheltered waters for many BAWRA races. The area includes several small marinas along the Embarcadero, with nearby parks and dining options.",
    facilities: [
      "Public restrooms nearby",
      "Restaurants along the Embarcadero",
      "Nearby parks including Union Point Park",
      "Protected estuary waters"
    ],
    launchers: [
      "Various small docks with permission",
      "Public boat ramp at nearby Grand Street in Alameda"
    ],
    image: "/images/marinas-sfbw-31.jpg",
    boatImage: "/images/marinas-union-basin-boat-14.jpg"
  }
];

export default function MarinasPage() {
  // State to track which marina details are open
  const [openMarina, setOpenMarina] = useState<string | null>(null);

  // Toggle open/close marina details
  const toggleMarinaDetails = (marinaId: string) => {
    setOpenMarina(openMarina === marinaId ? null : marinaId);
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
      {/* Page Header */}
      <div className="mb-16 text-center pt-6 md:pt-8">
        <h1 className="text-5xl md:text-7xl heading-font mb-5">
          <span className="text-slate-800 dark:text-slate-200">Bay Area</span> 
          <span className="text-primary ml-2">Marinas</span>
        </h1>
        <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-lg max-w-3xl mx-auto text-slate-700 dark:text-slate-300">
          BAWRA events are hosted at various marinas around the San Francisco Bay Area.
          Learn more about each location, its facilities, and launch points for whaleboat crews.
        </p>
      </div>

      {/* Marinas List */}
      <div className="grid grid-cols-1 gap-12 mb-12">
        {marinas.map((marina) => (
          <div 
            key={marina.id}
            className="rounded-lg overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Marina Image */}
              <div className="relative h-64 md:h-full">
                <Image
                  src={marina.image}
                  alt={marina.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Marina Info */}
              <div className="p-6 flex flex-col">
                <h2 className="text-2xl md:text-3xl heading-font mb-2">{marina.name}</h2>
                <p className="text-primary font-medium mb-4">{marina.location}</p>
                
                <p className="text-slate-700 dark:text-slate-300 mb-6 flex-1">
                  {marina.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-bold text-sm uppercase text-slate-500 dark:text-slate-400 mb-2">Contact</h3>
                    <p className="text-sm mb-1">
                      <a 
                        href={marina.mapLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {marina.address}
                      </a>
                    </p>
                    {marina.phone && (
                      <p className="text-sm mb-1">
                        <a 
                          href={`tel:${marina.phone}`}
                          className="text-primary hover:underline flex items-center"
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {marina.phone}
                        </a>
                      </p>
                    )}
                    {marina.website && (
                      <p className="text-sm">
                        <a 
                          href={marina.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center"
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                          Official Website
                        </a>
                      </p>
                    )}
                  </div>
                </div>
                
                <button
                  onClick={() => toggleMarinaDetails(marina.id)}
                  className="w-full flex items-center justify-between py-2 px-4 bg-primary/10 hover:bg-primary/20 text-primary rounded-md"
                >
                  <span>View Details</span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${openMarina === marina.id ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Expandable Details */}
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                openMarina === marina.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Facilities and Launch Info */}
                  <div className="md:col-span-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-bold mb-3 text-slate-800 dark:text-slate-200">
                          Facilities
                        </h3>
                        <ul className="space-y-2">
                          {marina.facilities.map((facility, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-slate-700 dark:text-slate-300">{facility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold mb-3 text-slate-800 dark:text-slate-200">
                          Launch Points
                        </h3>
                        <ul className="space-y-2">
                          {marina.launchers.map((launcher, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                              <span className="text-slate-700 dark:text-slate-300">{launcher}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Boat Image */}
                  <div className="md:col-span-4">
                    <div className="relative h-40 md:h-full rounded-lg overflow-hidden">
                      <Image
                        src={marina.boatImage}
                        alt={`Whaleboat at ${marina.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link 
                    href={marina.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    View on Map
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}