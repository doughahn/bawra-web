"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

// Schedule data from the official 2025 BAWRA schedule
const scheduleData = [
  {
    month: "February",
    events: [
      {
        name: "Board Handoff Meeting",
        date: "February 5, 2025",
        type: "Meeting",
        location: "Online (Zoom)",
        sponsor: "BAWRA",
        description: "Annual board handoff meeting to transition to new board members.",
        isRace: false
      }
    ]
  },
  {
    month: "March",
    events: [
      {
        name: "Board and General Meeting",
        date: "March 12, 2025",
        type: "Meeting",
        location: "Online (Zoom)",
        sponsor: "BAWRA",
        description: "Spring board and general meeting to discuss upcoming season.",
        isRace: false
      },
      {
        name: "RO & Cox Training",
        date: "March 15, 2025",
        type: "Training",
        location: "Alameda",
        sponsor: "BAWRA",
        description: "Training session for Race Officials and Coxswains.",
        isRace: false
      }
    ]
  },
  {
    month: "April",
    events: [
      {
        name: "Skipper Whipper",
        date: "April 5, 2025",
        type: "Race",
        location: "Vallejo",
        sponsor: "SOMIRA",
        description: "Traditional early season race with short course sprints. A great opportunity for new teams to get race experience.",
        isRace: true,
        mapLink: "/images/maps/aquaticpark.gif"
      },
      {
        name: "Coast Guard Challenge",
        date: "April 19, 2025",
        type: "Race",
        location: "Alameda",
        sponsor: "Coast Guard",
        description: "Annual race hosted by the Coast Guard at Coast Guard Island.",
        isRace: true,
        mapLink: "/images/maps/coastGuardIsland.gif"
      }
    ]
  },
  {
    month: "May",
    events: [
      {
        name: "Sea Scouts Old Salts Regatta",
        date: "May 3-4, 2025",
        type: "Non-BAWRA Event",
        location: "Alameda",
        sponsor: "Sea Scouts",
        description: "Sea Scouts' annual regatta. Not a BAWRA event but of interest to the whaleboat community.",
        isRace: false
      },
      {
        name: "West Coast Classic",
        date: "May 10, 2025",
        type: "Race",
        location: "Alameda",
        sponsor: "West Coast Rowing",
        description: "Classic race hosted by West Coast Rowing in the waters around Alameda.",
        isRace: true,
        mapLink: "/images/maps/aquaticpark.gif"
      },
      {
        name: "Oakland Cup",
        date: "May 17, 2025",
        type: "Race",
        location: "Oakland",
        sponsor: "Solano Rowing Club",
        description: "Medium-distance race along the Oakland waterfront.",
        isRace: true,
        mapLink: "/images/maps/estuary park.png"
      },
      {
        name: "Alcatraz Whaleboat Race",
        date: "May 31, 2025",
        type: "Race",
        location: "San Francisco",
        sponsor: "Iron Oars Rowing Club",
        description: "Iconic race around Alcatraz Island. One of the most challenging and scenic races of the season.",
        isRace: true,
        mapLink: "/images/maps/aquaticpark.gif"
      }
    ]
  },
  {
    month: "June",
    events: [
      {
        name: "Golden Gate Cup",
        date: "June 7, 2025",
        type: "Race",
        location: "San Francisco",
        sponsor: "Embarcadero Rowing Club",
        description: "Race in the shadow of the Golden Gate Bridge. A favorite for spectators with excellent viewing opportunities.",
        isRace: true,
        mapLink: "/images/maps/WaterfrontPromenade.gif"
      }
    ]
  },
  {
    month: "July",
    events: [
      {
        name: "Board and General Meeting",
        date: "July 9, 2025",
        type: "Meeting",
        location: "Online (Zoom)",
        sponsor: "BAWRA",
        description: "Summer board and general meeting to discuss fall season.",
        isRace: false
      }
    ]
  },
  {
    month: "August",
    events: [
      {
        name: "Cox Training",
        date: "August 16, 2025",
        type: "Training",
        location: "TBD",
        sponsor: "BAWRA",
        description: "Training session for coxswains to prepare for the fall season.",
        isRace: false
      }
    ]
  },
  {
    month: "September",
    events: [
      {
        name: "ERC Sprints",
        date: "September 20, 2025",
        type: "Race",
        location: "San Francisco",
        sponsor: "Embarcadero Rowing Club",
        description: "Sprint races hosted by Embarcadero Rowing Club along the San Francisco waterfront.",
        isRace: true,
        mapLink: "/images/maps/aquaticpark.gif"
      },
      {
        name: "Sprint the Pier",
        date: "September 27, 2025",
        type: "Race",
        location: "Berkeley",
        sponsor: "Solano Rowing Club",
        description: "Fast-paced sprint races around the Berkeley marina and pier.",
        isRace: true,
        mapLink: "/images/maps/aquaticpark.gif"
      }
    ]
  },
  {
    month: "October",
    events: [
      {
        name: "Vallejo Waterfront Festival",
        date: "October 4-5, 2025",
        type: "Non-BAWRA Event",
        location: "Vallejo",
        sponsor: "Non-BAWRA/SOMIRA",
        description: "Annual waterfront festival in Vallejo with rowing demonstrations.",
        isRace: false
      },
      {
        name: "High to Harbor Muck Race",
        date: "October 11, 2025",
        type: "Race",
        location: "Alameda",
        sponsor: "Ketos",
        description: "Challenging race through varying water conditions, hosted by Ketos.",
        isRace: true,
        mapLink: "/images/maps/estuary park.png"
      },
      {
        name: "Head of the Estuary",
        date: "October 25, 2025",
        type: "Race",
        location: "Oakland",
        sponsor: "Iron Oars Rowing Club/West Coast Rowing",
        description: "Season finale race along the Oakland Estuary. A joint event from Iron Oars and West Coast Rowing.",
        isRace: true,
        mapLink: "/images/maps/estuary park.png"
      }
    ]
  },
  {
    month: "November",
    events: [
      {
        name: "Board and General Meeting",
        date: "November 12, 2025",
        type: "Meeting",
        location: "Online (Zoom)",
        sponsor: "BAWRA",
        description: "Fall board and general meeting to recap the season.",
        isRace: false
      }
    ]
  },
  {
    month: "December",
    events: [
      {
        name: "BAWRA Workday in Gardens of Alcatraz",
        date: "December 13, 2025",
        type: "Social",
        location: "San Francisco",
        sponsor: "BAWRA",
        description: "Community service and social event at the Gardens of Alcatraz.",
        isRace: false
      }
    ]
  }
];

export default function SchedulePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
      {/* Page Header */}
      <section className="mb-24">
        <div className="mb-16 text-center pt-6 md:pt-8">
          <h1 className="text-5xl md:text-7xl heading-font mb-5">
            <span className="text-slate-800 dark:text-slate-200">2025</span> 
            <span className="text-primary ml-2">Schedule</span>
          </h1>
          <div className="w-32 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Next Event Highlight */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-primary/20 mb-16 overflow-hidden">
          <div className="relative">
            {/* Get all events and find the next one based on today's date */}
            {(() => {
              // Helper to flatten events and add sortable date
              const allEvents = scheduleData.flatMap(month => month.events).map(event => {
                // Extract month and day for sorting
                const dateParts = event.date.split(' ');
                const month = [
                  "January", "February", "March", "April", "May", "June", 
                  "July", "August", "September", "October", "November", "December"
                ].indexOf(dateParts[0]);
                const day = parseInt(dateParts[1]);
                
                return {
                  ...event,
                  sortDate: new Date(2025, month, day)
                };
              });
              
              // Use the current date to find the next event
              const today = new Date();
              
              // Find the next event (closest to today)
              const futureEvents = allEvents.filter(event => event.sortDate >= today);
              const nextEvent = futureEvents.sort((a, b) => Number(a.sortDate) - Number(b.sortDate))[0];
              
              // If no future events, show the last event of the year
              const displayEvent = nextEvent || allEvents[allEvents.length - 1];
              
              const eventDateObj = displayEvent.sortDate;
              const formattedDate = new Intl.DateTimeFormat('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              }).format(eventDateObj);
              
              const isRace = displayEvent.type === 'Race';
              const daysUntil = Math.ceil((Number(eventDateObj) - Number(today)) / (1000 * 60 * 60 * 24));
              
              return (
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {/* Left color column */}
                  <div className={`md:col-span-1 p-6 flex flex-col items-center justify-center text-center ${
                    isRace ? 'bg-primary/10' : 
                    displayEvent.type === 'Meeting' ? 'bg-blue-50 dark:bg-blue-900/20' : 
                    displayEvent.type === 'Training' ? 'bg-green-50 dark:bg-green-900/20' : 
                    'bg-slate-50 dark:bg-slate-700/50'
                  }`}>
                    <div className="mb-2">
                      <span className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        isRace ? 'bg-primary/20 text-primary' : 
                        displayEvent.type === 'Meeting' ? 'bg-blue-100 text-blue-700' : 
                        displayEvent.type === 'Training' ? 'bg-green-100 text-green-700' : 
                        'bg-slate-200 text-slate-700'
                      }`}>
                        {displayEvent.type}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold heading-font mb-1">Next Event</h2>
                    <div className="text-xl font-medium text-primary">{formattedDate}</div>
                    {daysUntil > 0 && (
                      <div className="mt-2 text-sm text-slate-500">
                        {daysUntil} days from now
                      </div>
                    )}
                  </div>
                  
                  {/* Right content area */}
                  <div className="md:col-span-2 p-6">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 heading-font">{displayEvent.name}</h3>
                        <div className="flex items-center text-slate-600 dark:text-slate-400 mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="mr-4">{displayEvent.location}</span>
                          <span className="text-sm">Sponsor: {displayEvent.sponsor}</span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 mb-6">
                          {displayEvent.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        {displayEvent.mapLink && (
                          <Link 
                            href={displayEvent.mapLink}
                            className="px-4 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-md transition-colors inline-flex items-center"
                            target="_blank"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                            View Map
                          </Link>
                        )}
                        <Link 
                          href="https://waiver.smartwaiver.com/w/60184b57585d5/web/"
                          className="px-4 py-2 bg-white hover:bg-slate-50 dark:bg-slate-700 dark:hover:bg-slate-600 text-primary font-medium border border-primary/30 rounded-md transition-colors"
                          target="_blank"
                        >
                          Sign Waiver
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Spring Season Table */}
      <section className="mb-8">
        <h3 className="text-2xl heading-font mb-4 text-slate-800 dark:text-slate-200">Spring Season 2025</h3>
        <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="py-3 px-4 text-left font-medium text-slate-700 dark:text-slate-300">Date</th>
                <th className="py-3 px-4 text-left font-medium text-slate-700 dark:text-slate-300">Event</th>
                <th className="py-3 px-4 text-left font-medium text-slate-700 dark:text-slate-300 hidden md:table-cell">Type</th>
                <th className="py-3 px-4 text-left font-medium text-slate-700 dark:text-slate-300">Location</th>
                <th className="py-3 px-4 text-left font-medium text-slate-700 dark:text-slate-300 hidden lg:table-cell">Sponsor</th>
              </tr>
            </thead>
            <tbody>
              {/* Spring events only */}
              {[
                ...scheduleData[0].events, // February 
                ...scheduleData[1].events, // March
                ...scheduleData[2].events, // April
                ...scheduleData[3].events, // May
                scheduleData[4].events.filter(event => event.name === "Golden Gate Cup")[0] // Only Golden Gate Cup from June
              ].map((event, eventIndex) => (
                <tr 
                  key={`spring-${eventIndex}`} 
                  className={`border-t border-slate-200 dark:border-slate-700 ${
                    event.isRace 
                      ? 'bg-primary/5 hover:bg-primary/10' 
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <td className="py-3 px-4 align-top">
                    <span className="font-medium">{event.date.split(',')[0]}</span>
                  </td>
                  <td className="py-3 px-4 align-top">
                    <span className="font-medium">{event.name}</span>
                    {event.mapLink && (
                      <Link 
                        href={event.mapLink} 
                        className="ml-2 text-primary hover:underline text-xs inline-flex items-center"
                        target="_blank"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        Map
                      </Link>
                    )}
                  </td>
                  <td className="py-3 px-4 align-top hidden md:table-cell">
                    <span className={`inline-flex items-center justify-center px-2 py-1 rounded-full text-xs font-medium ${
                      event.type === 'Race' 
                        ? 'bg-primary/10 text-primary' 
                        : event.type === 'Meeting'
                        ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                        : event.type === 'Training'
                        ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}>
                      {event.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 align-top">
                    {event.location}
                  </td>
                  <td className="py-3 px-4 align-top text-slate-600 dark:text-slate-400 hidden lg:table-cell">
                    {event.sponsor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Fall Season Table */}
      <section className="mb-12">
        <h3 className="text-2xl heading-font mb-4 text-slate-800 dark:text-slate-200">Fall Season 2025</h3>
        <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="py-3 px-4 text-left font-medium text-slate-700 dark:text-slate-300">Date</th>
                <th className="py-3 px-4 text-left font-medium text-slate-700 dark:text-slate-300">Event</th>
                <th className="py-3 px-4 text-left font-medium text-slate-700 dark:text-slate-300 hidden md:table-cell">Type</th>
                <th className="py-3 px-4 text-left font-medium text-slate-700 dark:text-slate-300">Location</th>
                <th className="py-3 px-4 text-left font-medium text-slate-700 dark:text-slate-300 hidden lg:table-cell">Sponsor</th>
              </tr>
            </thead>
            <tbody>
              {/* Fall events only */}
              {[
                ...scheduleData[5].events, // July
                ...scheduleData[6].events, // August
                ...scheduleData[7].events, // September
                ...scheduleData[8].events, // October
                ...scheduleData[9].events, // November
                ...scheduleData[10].events // December
              ].map((event, eventIndex) => (
                <tr 
                  key={`fall-${eventIndex}`} 
                  className={`border-t border-slate-200 dark:border-slate-700 ${
                    event.isRace 
                      ? 'bg-primary/5 hover:bg-primary/10' 
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <td className="py-3 px-4 align-top">
                    <span className="font-medium">{event.date.split(',')[0]}</span>
                  </td>
                  <td className="py-3 px-4 align-top">
                    <span className="font-medium">{event.name}</span>
                    {event.mapLink && (
                      <Link 
                        href={event.mapLink} 
                        className="ml-2 text-primary hover:underline text-xs inline-flex items-center"
                        target="_blank"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        Map
                      </Link>
                    )}
                  </td>
                  <td className="py-3 px-4 align-top hidden md:table-cell">
                    <span className={`inline-flex items-center justify-center px-2 py-1 rounded-full text-xs font-medium ${
                      event.type === 'Race' 
                        ? 'bg-primary/10 text-primary' 
                        : event.type === 'Meeting'
                        ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                        : event.type === 'Training'
                        ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}>
                      {event.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 align-top">
                    {event.location}
                  </td>
                  <td className="py-3 px-4 align-top text-slate-600 dark:text-slate-400 hidden lg:table-cell">
                    {event.sponsor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}