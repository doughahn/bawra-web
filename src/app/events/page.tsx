"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the event type
type Event = {
  id: string;
  name: string;
  location: string;
  marina?: string;
  marinaLink?: string;
  organizer: string;
  organizerLink?: string;
  course: string;
  viewing: string;
  awards: string;
  awardLocationLink?: string;
  drivingDirectionsLink?: string;
  meetingAgendaLink?: string;
  image: string;
  active: boolean;
};

// Event data
const events: Event[] = [
  {
    id: "alcatraz",
    name: "Alcatraz Whaleboat Race",
    location: "San Francisco",
    marina: "Hyde Street Harbor",
    marinaLink: "http://www.itcrowing.com/marina.html#hydest",
    organizer: "BAWRA / Iron Oars Rowing Club",
    organizerLink: "http://www.itcrowing.com",
    course: "A one-mile race from the south east corner of Alcatraz Island to Aquatic Park in San Francisco Bay.",
    viewing: "Aquatic Park.",
    awards: "Aquatic Park, across from the Sea Scouts Base. Aquatic Park is within the San Francisco Maritime National Historic Park. It is located at the foot of Van Ness Avenue north of North Point St. Park along Van Ness.",
    awardLocationLink: "http://www.nps.gov/safr/planyourvisit/maps.htm",
    drivingDirectionsLink: "http://maps.google.com/maps?f=q&hl=en&geocode=&time=&date=&ttype=&q=van+ness+%26+north+point,+san+francisco,+ca&sll=37.80506,-122.42535&sspn=0.011647,0.019956&ie=UTF8&z=16&iwloc=addr&om=1",
    meetingAgendaLink: "https://drive.google.com/drive/folders/1QfpEDbZGI2xQ-0d2zVbboitFRPDpEBgW?usp=drive_link",
    image: "/images/events-alcatraz-small.jpg",
    active: true
  },
  {
    id: "bridges",
    name: "Bridge to Bridge",
    location: "San Francisco",
    marina: "Hyde Street Harbor",
    marinaLink: "http://www.itcrowing.com/marina.html#hydest",
    organizer: "BAWRA / Iron Oars Rowing Club",
    organizerLink: "http://www.itcrowing.com",
    course: "A five-mile race from the Golden Gate Bridge to the Bay Bridge in San Francisco Bay.",
    viewing: "All along the San Francisco Waterfront. Best hills: In the Presidio along Lincoln Avenue, Fort Mason bluffs, Coit Tower. Best waterfront: Crissy Field, the Marina Green, Municipal Pier at Aquatic Park, the end of Pier 39, the end of Pier 1 and the Ferry Pier at the Ferry Building, the Port Promenade.",
    awards: "See current year race information for Awards location.",
    meetingAgendaLink: "https://drive.google.com/drive/folders/1wxIHb2FnvP1wOBAP28ZCkf2LdgsLgREJ?usp=drive_link",
    image: "/images/events-b2b-small.jpg",
    active: true
  },
  {
    id: "coastguard",
    name: "Coast Guard Challenge",
    location: "Oakland",
    marina: "Embarcadero Cove Marina",
    marinaLink: "http://www.itcrowing.com/marina.html#ecove",
    organizer: "BAWRA / US Coast Guard Rowing Team",
    course: "A Timed Race about a mile and a half around Coast Guard Island in the Oakland Estuary.",
    viewing: "From Coast Guard Island, Union Point Marina, the causeway to Coast Guard Island, along Embarcadero in the regional park with benches and a pier, Township Commons.",
    awards: "See the current year information for the awards location. If on Coast Guard Island, you will be asked ahead of time for a contact name for your club, and/or the names of every guest you plan to bring on the island. You will need a picture ID for access to the Island and proof of car insurance if you drive onto the island.",
    drivingDirectionsLink: "http://maps.google.com/maps?f=d&hl=en&geocode=11439091417462030044,37.780229,-122.246403&time=&date=&ttype=&saddr=&daddr=Coast+Guard+Island+Br+%4037.780229,+-122.246403&sll=37.774853,-122.238436&sspn=0.046608,0.079823&ie=UTF8&ll=37.780229,-122.246403&spn=0.023302,0.039911&z=15&om=1",
    meetingAgendaLink: "https://drive.google.com/drive/folders/1McKmJPYHxI_LF9OLDRCCkqF38f5_NbpW?usp=drive_link",
    image: "/images/events-cgc-17.jpg",
    active: true
  },
  {
    id: "sprints",
    name: "ERC Sprints",
    location: "San Francisco",
    marina: "Pier 40/South Beach Harbor",
    marinaLink: "http://www.itcrowing.com/marina.html#sbeach",
    organizer: "BAWRA / Embarcadero Rowing Club",
    organizerLink: "http://www.ercrowing.org/",
    course: "A half-mile sprint in front of the Bay View Boat Club in San Francisco Bay.",
    viewing: "The Bay View Boat Club, the Mariposa Hunters Point Boat Club, and the waterfront in between.",
    awards: "The party is at the Bay View Boat Club, 489 Terry Francois Blvd (aka China Basin Street) / Pier 54 in San Francisco. Parking is available in the lot or on the street.",
    drivingDirectionsLink: "http://maps.google.com/maps?f=q&hl=en&geocode=&time=&date=&ttype=&q=489+terry+francois,+san+francisco,+ca&sll=37.80506,-122.42535&sspn=0.011647,0.019956&ie=UTF8&ll=37.772173,-122.387266&spn=0.023305,0.039911&z=15&om=1",
    meetingAgendaLink: "https://drive.google.com/drive/folders/13PufCgW0JuGzskeoYmgJk-us25w3lRDd?usp=drive_link",
    image: "/images/events-erc-sp-small.jpg",
    active: true
  },
  {
    id: "estuary",
    name: "Head of the Oakland Estuary",
    location: "Oakland",
    marina: "Embarcadero Cove Marina",
    marinaLink: "http://www.itcrowing.com/marina.html#ecove",
    organizer: "BAWRA / Iron Oars Rowing Club",
    organizerLink: "http://www.itcrowing.com",
    course: "A three mile head race in the Oakland Estuary.",
    viewing: "Township Commons and the shorline park along Brooklyn Basin.",
    awards: "Township Commons, on the Estuary north of Coast Guard Island.",
    awardLocationLink: "https://brooklynbasin.com/parks/township-commons/",
    drivingDirectionsLink: "https://goo.gl/maps/wWLC3DrcTHmz5pj77",
    meetingAgendaLink: "https://drive.google.com/drive/folders/1Ke9oWCpV41oonBomN9clkX5fds6im3Td?usp=drive_link",
    image: "/images/events-hhe-small.jpg",
    active: true
  },
  {
    id: "muck",
    name: "High to Harbor Muck Race",
    location: "Alameda",
    marina: "Embarcadero Cove Marina",
    marinaLink: "http://www.itcrowing.com/marina.html#ecove",
    organizer: "BAWRA / Oakland Estuary Whaleboat Rowing Society (OEWRS) -- Ketos",
    organizerLink: "http://oewrs.org/Ketos.html",
    course: "Race between Fruitvale Bridge and the Aeolian Yacht Club.",
    viewing: "Fruitvale Bridge, the shorline parks on both sides of the Estuary, the shoreline park north of the Aeolian Yacht Club",
    awards: "Aeolian Yacht Club at 980 Fernside Blvd, Alameda, California, 94501",
    awardLocationLink: "https://goo.gl/maps/qSiKxakiSy2FCLV28",
    meetingAgendaLink: "https://drive.google.com/drive/folders/1eD8LGBY8eEj4atxUu-9e3vdVFhnOrYH-?usp=drive_link",
    image: "/images/events-muck2.jpg",
    active: true
  },
  {
    id: "oakcup",
    name: "Oakland Cup",
    location: "Oakland",
    marina: "Embarcadero Cove Marina",
    marinaLink: "http://www.itcrowing.com/marina.html#unionpt",
    organizer: "BAWRA / West Coast Rowing",
    organizerLink: "https://www.facebook.com/WestCoastRowing/?fref=ts",
    course: "One-mile race in the Oakland Estuary.",
    viewing: "Estuary Park on Embarcadero between Fallon and 5th Ave. in Oakland.",
    awards: "At the end of the pier at Estuary Park. Use the Jack London Aquatic Center (JLAC) parking area at 115 Embarcadero. This is approximately one mile east of Jack London Square.",
    drivingDirectionsLink: "http://goo.gl/maps/xDNt",
    meetingAgendaLink: "https://drive.google.com/drive/folders/1-kMFV70p_d14ybTzL29fIfVdKWUevAWs?usp=drive_link",
    image: "/images/events-oak-cup-small.JPG",
    active: true
  },
  {
    id: "skipwhip",
    name: "Skipper Whipper",
    location: "Vallejo",
    marina: "Vallejo Marina",
    marinaLink: "http://www.itcrowing.com/marina.html#vallejo",
    organizer: "BAWRA / Straits of Mare Island Rowing Association (SOMIRA)",
    organizerLink: "http://www.somira.org/",
    course: "A \"W\" course in Mare Island Channel.",
    viewing: "Along the waterfront in front of Coal Shed Brewery.",
    awards: "Mare Island Brewing Co., Coal Shed Brewery",
    awardLocationLink: "https://www.mareislandbrewingco.com/coal-shed",
    meetingAgendaLink: "https://drive.google.com/drive/folders/11JAb43Gc-EzXU3ikN9OpkDfAPnCTUXAk?usp=drive_link",
    image: "/images/events-skipper-whipper-smal.jpg",
    active: true
  },
  {
    id: "pier",
    name: "Sprint the Pier",
    location: "Berkeley",
    marina: "Berkeley Marina",
    marinaLink: "http://www.itcrowing.com/marina.html#Berkeley",
    organizer: "BAWRA / Solano Rowing Club",
    organizerLink: "http://www.solanorowingclub.org/",
    course: "Zig-zag course in front of the breakwater at the Berkeley Marina.",
    viewing: "The end of Spinnaker Way.",
    awards: "Inspire Sailing, 1 Spinnaker Way on the Marina.",
    awardLocationLink: "https://inspiresailing.com/",
    drivingDirectionsLink: "https://goo.gl/maps/HBTyYmVKhPm17e3e7/",
    meetingAgendaLink: "https://drive.google.com/drive/folders/1h2K6A1khdfkhkA2oz70lhcUeuymzyP5S?usp=drive_link",
    image: "/images/events-STP-small.jpg",
    active: true
  },
  {
    id: "wcc",
    name: "West Coast Classic",
    location: "Alameda",
    marina: "Embarcadero Cove Marina",
    marinaLink: "http://www.itcrowing.com/marina.html#ecove",
    organizer: "BAWRA / West Coast Rowing",
    organizerLink: "https://www.facebook.com/WestCoastRowing/?fref=ts",
    course: "A two-leg sprint between Park Street Bridge and Fruitvale Bridge in the Oakland Estuary.",
    viewing: "From the parking lot behind Nob Hill Foods, 2351 Blanding Ave. (between Broadway and Everett Streets), Alameda, Ca.",
    awards: "Alameda Yacht Club",
    awardLocationLink: "https://www.aycinc.org/",
    drivingDirectionsLink: "http://goo.gl/maps/l9dx",
    meetingAgendaLink: "https://drive.google.com/drive/folders/1DTvLLtjIHd5ARj_D9fS4kYHwc9uC7fGL?usp=drive_link",
    image: "/images/events-mb2b-desc.jpg",
    active: true
  },
  {
    id: "tahoe",
    name: "Tahoe Fun Row",
    location: "Tahoe",
    organizer: "BAWRA",
    course: "Somewhere on the North Shore. You never know where from year to year – sometimes not even until race day!",
    viewing: "",
    awards: "",
    image: "/images/events-tahoe-small.jpg",
    active: false
  },
  {
    id: "portprom",
    name: "Port Promenade",
    location: "San Francisco",
    marina: "Pier 40/South Beach Harbor",
    marinaLink: "http://www.itcrowing.com/marina.html#sbeach",
    organizer: "BAWRA / San Francisco Whalers",
    course: "Sprint in McCovey Cove.",
    viewing: "McCovey Point at China Basin Park, and the south side of AT&T Park.",
    awards: "McCovey Point",
    drivingDirectionsLink: "http://goo.gl/maps/xwNZ",
    image: "/images/events-port-promenade-small.jpg",
    active: false
  }
];

export default function EventsPage() {
  // State to track which accordion is open
  const [openEvent, setOpenEvent] = useState<string | null>(null);

  // Toggle accordion open/close
  const toggleAccordion = (eventId: string) => {
    setOpenEvent(openEvent === eventId ? null : eventId);
  };

  // Filter active events first, then inactive
  const sortedEvents = [...events].sort((a, b) => {
    if (a.active && !b.active) return -1;
    if (!a.active && b.active) return 1;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
      {/* Page Header */}
      <div className="mb-16 text-center pt-6 md:pt-8">
        <h1 className="text-5xl md:text-7xl heading-font mb-5">
          <span className="text-slate-800 dark:text-slate-200">BAWRA</span> 
          <span className="text-primary ml-2">Events</span>
        </h1>
        <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-lg max-w-3xl mx-auto text-slate-700 dark:text-slate-300">
          Click on an event to learn about the course, viewing locations, and other details.
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {sortedEvents.map((event) => (
          <div 
            key={event.id}
            className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 border ${
              event.active ? 'border-slate-200 dark:border-slate-700' : 'border-slate-200/50 dark:border-slate-700/50 opacity-70'
            }`}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={event.image}
                alt={event.name}
                fill
                className="object-cover"
              />
              {!event.active && (
                <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                    Inactive
                  </span>
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold mb-1">{event.name}</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-4">{event.location}</p>
              <button
                onClick={() => toggleAccordion(event.id)}
                className="w-full flex items-center justify-between py-2 px-4 bg-primary/10 hover:bg-primary/20 text-primary rounded-md"
              >
                <span>Event Details</span>
                <svg 
                  className={`w-5 h-5 transition-transform duration-300 ${openEvent === event.id ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            {/* Accordion Content */}
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                openEvent === event.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-5 pt-0 border-t border-slate-200 dark:border-slate-700 mt-4">
                {event.marina && (
                  <div className="mb-4">
                    <h4 className="font-bold text-sm uppercase text-slate-500 dark:text-slate-400 mb-1">Marina</h4>
                    <p>
                      {event.marinaLink ? (
                        <Link href={event.marinaLink} target="_blank" className="text-primary hover:underline">
                          {event.marina}
                        </Link>
                      ) : (
                        event.marina
                      )}
                    </p>
                  </div>
                )}
                
                <div className="mb-4">
                  <h4 className="font-bold text-sm uppercase text-slate-500 dark:text-slate-400 mb-1">Organizer</h4>
                  <p>
                    {event.organizerLink ? (
                      <Link href={event.organizerLink} target="_blank" className="text-primary hover:underline">
                        {event.organizer}
                      </Link>
                    ) : (
                      event.organizer
                    )}
                  </p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-bold text-sm uppercase text-slate-500 dark:text-slate-400 mb-1">Race Course</h4>
                  <p className="text-slate-700 dark:text-slate-300">{event.course}</p>
                </div>
                
                {event.viewing && (
                  <div className="mb-4">
                    <h4 className="font-bold text-sm uppercase text-slate-500 dark:text-slate-400 mb-1">Best Viewing</h4>
                    <p className="text-slate-700 dark:text-slate-300">{event.viewing}</p>
                  </div>
                )}
                
                {event.awards && (
                  <div className="mb-4">
                    <h4 className="font-bold text-sm uppercase text-slate-500 dark:text-slate-400 mb-1">Awards Location</h4>
                    <p className="text-slate-700 dark:text-slate-300">
                      {event.awardLocationLink ? (
                        <Link href={event.awardLocationLink} target="_blank" className="text-primary hover:underline">
                          {event.awards}
                        </Link>
                      ) : (
                        event.awards
                      )}
                    </p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-3 mt-6">
                  {event.drivingDirectionsLink && (
                    <Link 
                      href={event.drivingDirectionsLink} 
                      target="_blank" 
                      className="text-sm px-3 py-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-full inline-flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      Directions
                    </Link>
                  )}
                  
                  {event.meetingAgendaLink && (
                    <Link 
                      href={event.meetingAgendaLink} 
                      target="_blank" 
                      className="text-sm px-3 py-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-full inline-flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Meeting Agendas
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}