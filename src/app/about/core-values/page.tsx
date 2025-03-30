import Image from 'next/image';

export default function CoreValuesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
      {/* Page Header */}
      <div className="mb-12 text-center pt-6 md:pt-8">
        <h1 className="text-5xl md:text-7xl heading-font mb-5">
          <span className="text-slate-800 dark:text-slate-200">Core</span> 
          <span className="text-primary ml-2">Values</span>
        </h1>
        <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg dark:prose-invert mx-auto mb-10">
          <p>
            We have five core values promoting the bringing together of people of all walks of life to enjoy the Bay Area in a unique way from the water. Our community includes rowers with their families and friends, as well as officials and volunteers. 
            Our activities include practices and training, races, the development of rules and procedures, and celebrations.
          </p>
          <p className="font-medium">
            Our <em>Overarching Values</em> are <strong>Safety</strong> and <strong>Fairness</strong>. Our <em>People Values</em> are <strong>Inclusivity</strong>, <strong>Community</strong> and <strong>Fun</strong>.
          </p>
        </div>

        {/* Core Values Cards */}
        <div className="grid grid-cols-1 gap-6 mb-12">
          {/* Overarching Values */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-4">
            <h2 className="text-2xl text-center font-bold mb-6">Overarching Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-center">Safety</h3>
                <p className="text-center">Safety comes first.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-center">Fairness</h3>
                <p className="text-center">Only fair activities and a fair community will keep people coming back.</p>
              </div>
            </div>
          </div>
          
          {/* People Values */}
          <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl text-center font-bold mb-6 text-slate-800 dark:text-slate-200">People Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-center text-primary">Inclusivity</h3>
                <p className="text-center text-slate-700 dark:text-slate-300">
                  We value the individual contribution, skills, values, perspective, and identities of everyone in our community.
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-center text-primary">Community</h3>
                <p className="text-center text-slate-700 dark:text-slate-300">
                  We develop our community by creating an inclusive, safe, respectful, and welcoming culture for all.
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-center text-primary">Fun</h3>
                <p className="text-center text-slate-700 dark:text-slate-300">
                  Being able to laugh, love, and celebrate our unique sport is at the heart of whaleboat rowing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Intersection */}
        <div className="mb-10">
          <h2 className="text-2xl text-center font-bold mb-6 text-slate-800 dark:text-slate-200">
            The Intersection of Our Values
          </h2>
          <p className="text-center text-slate-700 dark:text-slate-300 mb-8">
            The intersection of the <em>Overarching</em> and <em>People Values</em> describes how they operate together:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 p-4 text-slate-800 dark:text-slate-200">Values</th>
                  <th className="border border-slate-300 dark:border-slate-600 bg-blue-50 dark:bg-blue-900/30 p-4 text-slate-800 dark:text-slate-200">
                    <span className="font-bold text-lg">Safety</span><br/>
                    <span className="text-sm">Safety comes first.</span>
                  </th>
                  <th className="border border-slate-300 dark:border-slate-600 bg-blue-50 dark:bg-blue-900/30 p-4 text-slate-800 dark:text-slate-200">
                    <span className="font-bold text-lg">Fairness</span><br/>
                    <span className="text-sm">Only fair activities and a fair community will keep people coming back.</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 p-4 text-slate-800 dark:text-slate-200">
                    <span className="font-bold text-lg">Inclusivity</span><br/>
                    <span className="text-sm">We value the individual contribution, skills, values, perspective, and identities of everyone in our community.</span>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-600 p-4 text-slate-700 dark:text-slate-300">
                    We want the safe participation of everyone, as themselves, in whatever capacity they are able to safely participate.
                  </td>
                  <td className="border border-slate-300 dark:border-slate-600 p-4 text-slate-700 dark:text-slate-300">
                    We must welcome and treat everyone fairly both inside and outside our community during all our activities, regardless of race, gender identity, orientation and or sexual orientation, religious affiliation, ability, national origin, or age.
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 p-4 text-slate-800 dark:text-slate-200">
                    <span className="font-bold text-lg">Community</span><br/>
                    <span className="text-sm">We develop our community by creating an inclusive, safe, respectful, and welcoming culture for all.</span>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-600 p-4 text-slate-700 dark:text-slate-300">
                    Safety for everyone threads throughout our activities to keep our community safe.
                  </td>
                  <td className="border border-slate-300 dark:border-slate-600 p-4 text-slate-700 dark:text-slate-300">
                    Inclusive, safe, respectful, welcoming — these words amplify our idea of how to treat each other fairly. And for racing, racing teams are to row under equally fair conditions with an equally fair chance of winning.
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 p-4 text-slate-800 dark:text-slate-200">
                    <span className="font-bold text-lg">Fun</span><br/>
                    <span className="text-sm">Being able to laugh, love, and celebrate our unique sport is at the heart of whaleboat rowing.</span>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-600 p-4 text-slate-700 dark:text-slate-300">
                    Safety and fun are not mutually exclusive. But fun without safety can take away the fun for all.
                  </td>
                  <td className="border border-slate-300 dark:border-slate-600 p-4 text-slate-700 dark:text-slate-300">
                    It's not fair to have this much fun.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Background Image Banner */}
        <div className="relative h-60 md:h-80 rounded-lg overflow-hidden mt-14 mb-10">
          <Image
            src="/images/callout-bg.jpg"
            alt="BAWRA Rowing"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
            <blockquote className="text-white text-xl md:text-2xl font-medium italic max-w-2xl text-center px-6">
              "Our core values guide every aspect of our rowing community, from practices and races to celebrations, ensuring we all row forward together."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}