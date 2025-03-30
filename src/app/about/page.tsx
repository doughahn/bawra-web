"use client";

import Image from "next/legacy/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
      {/* Modern Hero section with split layout */}
      <section className="mb-24">
        {/* Bold page title */}
        <div className="mb-16 text-center pt-6 md:pt-8">
          <h1 className="text-5xl md:text-7xl heading-font mb-5">
            <span className="text-slate-800 dark:text-slate-200">About</span> 
            <span className="text-primary ml-2">BAWRA</span>
          </h1>
          <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        {/* Three column feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-md border border-slate-200 dark:border-slate-700 transform transition-all hover:scale-[1.02] hover:shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-primary heading-font">Our Community</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
              BAWRA brings together diverse teams from Oakland, San Francisco, and Vallejo, 
              uniting people of all backgrounds in a shared passion for whaleboat racing.
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-md border border-slate-200 dark:border-slate-700 transform transition-all hover:scale-[1.02] hover:shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-primary heading-font">Our Heritage</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
              Tracing back to the mid-1800s, our whaleboat racing tradition honors the maritime 
              history of San Francisco Bay and the spirit of seafaring competition.
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-md border border-slate-200 dark:border-slate-700 transform transition-all hover:scale-[1.02] hover:shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-primary heading-font">Our Activities</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
              From spring and fall racing seasons to training, community events, and celebrations, 
              BAWRA offers exciting opportunities for engagement and competition.
            </p>
          </div>
        </div>
        
        {/* Introduction text with side image */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-20">
          <div className="lg:col-span-3 flex flex-col justify-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                The Bay Area Whaleboat Rowing Association (BAWRA) is made up of men's, women's and mixed teams 
                based in Oakland, San Francisco, and Vallejo. The teams compete in different locations around 
                the bay during racing seasons in the spring and fall.
              </p>
              
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                BAWRA has five <Link href="/core-values" className="text-primary font-semibold hover:underline">Core Values</Link> promoting 
                the bringing together of people of all walks of life to enjoy the Bay Area in a unique way from the water. 
                Our community includes rowers with their families and friends, as well as officials and volunteers. 
              </p>
              
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Our activities include practices and training, races, the development of rules and procedures, and celebrations.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-2 relative h-[300px] lg:h-auto rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/images/events-erc-direc.jpg" 
              alt="BAWRA team" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Core values callout */}
        <div className="relative p-10 my-12 rounded-lg border border-blue-300/30 overflow-hidden shadow-lg">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/callout-bg.jpg" 
              alt="" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/50"></div>
          </div>
          
          {/* Content with increased text contrast */}
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl text-center text-white mb-4 heading-font">Our Core Values</h2>
            <p className="text-xl md:text-2xl text-center text-white heading-font">
              Our <em className="font-normal">Overarching Values</em> are <strong className="font-bold">Safety</strong> and <strong className="font-bold">Fairness</strong>. 
              <br className="hidden md:block" />
              Our <em className="font-normal">People Values</em> are <strong className="font-bold">Inclusivity</strong>, <strong className="font-bold">Community</strong> and <strong className="font-bold">Fun</strong>.
            </p>
          </div>
        </div>
      </section>
      
      {/* History and boats section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
        <div className="lg:col-span-2 space-y-16">
          <div>
            <h2 className="text-3xl heading-font mb-8 text-slate-800 dark:text-slate-200">Racing Whaleboats on San Francisco Bay</h2>
            <div className="space-y-6">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                When the great windjammers of the mid-1800's put into port on the Barbary Coast, the ships' crews often faced long layovers while their captains negotiated for cargo to carry on the return voyage. With wages spent and time on their hands, the crews would race lifeboats against crews from other vessels in port.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Competition took its current form in the mid-1960's under the sponsorship of maritime companies, using Coast Guard Monomoy Surfboats (aka whaleboats) built in the 1930's and 40's. By 1982 the Bay Area Whaleboat Rowing Association (BAWRA) was formed to provide standards for safety and competition, as well as coordinate regattas and other activities.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                By the mid 1980's, new whaleboats were built by BAWRA members for the purpose of racing. The picture to the right was taken in 1987 at South Beach Harbor in San Francisco, at our first annual Bridge to Bridge Race.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                The whaleboat rower of today defies classification: young and old, male and female, large and small. However we all love being on the water, rowing with a team, and honoring the tradition of sea-worthy pulling boats.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Joining BAWRA really means joining one of the teams. All welcome new members and are ready to talk about location, schedules, money and fitness focus. And BAWRA welcomes new teams as well – with or without a boat.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl heading-font mb-8 text-slate-800 dark:text-slate-200">The Boats and their Heritage</h2>
            <div className="space-y-6">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                The BAWRA clubs race each other in Monomoy Surfboats. They are descendants of the shore-based whaleboats used off Cape Cod and Monomoy Island in the 18th century. The decline of whales off the East Coast led to the development of sailing vessels that could pursue the whales into deeper water, and the whaleboats turned into the lifeboats of the area.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Today, the biggest concentration of Monomoys in the world is here in San Francisco Bay. Some are wood, some are fiberglass and some are a combination of the two. No matter what they are made of, it's still the strength and determination of the crew that makes a winning team.
              </p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="sticky top-24 relative h-[500px]">
            <img 
              src="/images/bawraBoats.jpg"
              alt="BAWRA Boats"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      
      {/* Teams and Honorary Members */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card className="shadow-md">
          <CardHeader className="border-b pb-6">
            <CardTitle className="text-2xl heading-font">The Team Members of BAWRA</CardTitle>
          </CardHeader>
          <CardContent className="space-y-10 pt-8">
            <div>
              <h3 className="text-xl heading-font mb-5 text-primary">Oakland</h3>
              <ul className="space-y-4">
                <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <a href="http://oewrs.org/index.html" className="text-primary hover:underline font-medium text-lg" target="_blank" rel="noopener noreferrer">
                    Oakland Estuary Whaleboat Rowing Society (OEWRS)
                  </a>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    (<a href="http://oewrs.org/Ketos.html" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Ketos</a> and 
                    <a href="http://oewrs.org/POO.html" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">Port of Oakland Rowing Team</a>)
                  </span>
                </li>
                <li>
                  <a href="https://www.facebook.com/groups/1397542717241013/about/" className="text-primary hover:underline font-medium text-lg" target="_blank" rel="noopener noreferrer">Row'd Warriors</a>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">rowdwarriors@comcast.net</div>
                </li>
                <li>
                  <span className="font-medium text-lg">Coast Guard Rowing</span>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">Contact: Bill Davis <a href="mailto:billdavis2619@gmail.com" className="text-primary hover:underline">billdavis2619@gmail.com</a></div>
                </li>
                <li>
                  <a href="https://www.facebook.com/WestCoastRowing/?fref=ts" className="text-primary hover:underline font-medium text-lg" target="_blank" rel="noopener noreferrer">West Coast Rowing (WCR)</a>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-400"><a href="mailto:westcoastrow@gmail.com" className="text-primary hover:underline">westcoastrow@gmail.com</a></div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl heading-font mb-5 text-primary">San Francisco</h3>
              <ul className="space-y-4">
                <li>
                  <a href="http://www.ercrowing.org/" className="text-primary hover:underline font-medium text-lg" target="_blank" rel="noopener noreferrer">Embarcadero Rowing Club (ERC)</a>
                </li>
                <li>
                  <a href="http://www.itcrowing.com" className="text-primary hover:underline font-medium text-lg" target="_blank" rel="noopener noreferrer">Iron Oars Rowing Club (IORC)</a>
                </li>
                <li>
                  <span className="font-medium text-lg">San Francisco Whalers</span>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">Contact: Karen Taylor (415) 274-0579</div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl heading-font mb-5 text-primary">Vallejo</h3>
              <ul className="space-y-4">
                <li>
                  <a href="http://www.solanorowingclub.us/" className="text-primary hover:underline font-medium text-lg" target="_blank" rel="noopener noreferrer">Solano Rowing Club (SRC)</a>
                </li>
                <li>
                  <a href="http://www.somira.org/" className="text-primary hover:underline font-medium text-lg" target="_blank" rel="noopener noreferrer">Straits of Mare Island Rowing Association (SOMIRA)</a>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
          <CardHeader className="border-b pb-6">
            <CardTitle className="text-2xl heading-font">The Honorary Lifetime Members of BAWRA</CardTitle>
          </CardHeader>
          <CardContent className="pt-8">
            <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">Honorary Membership is conferred upon an individual by the BAWRA Board.</p>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-xl heading-font mb-4 text-primary">1989</h3>
                <ul className="space-y-3 pl-5 list-disc">
                  <li><strong className="text-lg">Bill Capasso</strong>, <span className="text-slate-600 dark:text-slate-400">President, Golden Gate Propeller Club</span></li>
                  <li><strong className="text-lg">Jack Costello</strong>, <span className="text-slate-600 dark:text-slate-400">Coast Guard Admiral</span></li>
                  <li><strong className="text-lg">Terry Klaus</strong>, <span className="text-slate-600 dark:text-slate-400">Sea Scout Commodore of Area III</span></li>
                  <li><strong className="text-lg">Leonard Komar</strong>, <span className="text-slate-600 dark:text-slate-400">First Commodore, Auxiliary Fleet</span></li>
                  <li><strong className="text-lg">Captain Carl Larkin</strong>, <span className="text-slate-600 dark:text-slate-400">BAWRA Auxiliary Fleet Coordinator</span></li>
                  <li><strong className="text-lg">Captain Tay Vaughan, III</strong>, <span className="text-slate-600 dark:text-slate-400">USRA/BAWRA Chief Race Official, Rules Committee Organizer</span></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl heading-font mb-4 text-primary">1990</h3>
                <ul className="space-y-3 pl-5 list-disc">
                  <li><strong className="text-lg">George Beglitsoff</strong>, <span className="text-slate-600 dark:text-slate-400">Skipper, The Sea Scouts</span></li>
                  <li><strong className="text-lg">Nolan Gimpel</strong>, <span className="text-slate-600 dark:text-slate-400">Chief Exec Officer, Port of Oakland</span></li>
                  <li><strong className="text-lg">Michael P. Huertas</strong>, <span className="text-slate-600 dark:text-slate-400">Executive Director, Port of San Francisco</span></li>
                  <li><strong className="text-lg">Captain John M. Keever</strong>, <span className="text-slate-600 dark:text-slate-400">V.P. California Maritime Academy, Chairman of Vallejo Rowing Regatta</span></li>
                  <li><strong className="text-lg">Captain Tom Robinson</strong>, <span className="text-slate-600 dark:text-slate-400">Captain of the Port, United States Coast Guard</span></li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl heading-font mb-4 text-primary">2013</h3>
                  <ul className="space-y-3 pl-5 list-disc">
                    <li><strong className="text-lg">Captain Carl Larkin (Retired)</strong>, <span className="text-slate-600 dark:text-slate-400">American Presidents Line</span></li>
                    <li><strong className="text-lg">Karen Wulffraat</strong>, <span className="text-slate-600 dark:text-slate-400">First President of BAWRA</span></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl heading-font mb-4 text-primary">2014</h3>
                  <ul className="space-y-3 pl-5 list-disc">
                    <li><strong className="text-lg">Barry Roth</strong>, <span className="text-slate-600 dark:text-slate-400">Skipper <em>Badenia</em></span></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl heading-font mb-4 text-primary">2015</h3>
                  <ul className="space-y-3 pl-5 list-disc">
                    <li><strong className="text-lg">Jimmy Bolter</strong>, <span className="text-slate-600 dark:text-slate-400">Deckhand <em>Badenia</em></span></li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}