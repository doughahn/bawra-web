import Link from 'next/link';

type ResultYear = {
  year: string;
  label: string;
  link: string;
  isExternal?: boolean;
};

// Group 1: Recent years (2022-2024)
const recentResults: ResultYear[] = [
  { 
    year: '2024', 
    label: '2024',
    link: 'https://drive.google.com/file/d/1dQOdC7lD-Y3O4F8B7zqzCBs1Hv4dUMRC/view?usp=sharing',
    isExternal: true
  },
  { year: '2023', label: '2023', link: '/results/2023 BAWRA Results.xlsx' },
  { year: '2022', label: '2022', link: '/results/2022 BAWRA Results.xlsx' },
  { year: '2021', label: '2020, 2021 Covid Pandemic', link: '#', isExternal: true },
];

// Group 2: 2010-2019
const results2010s: ResultYear[] = [
  { year: '2019', label: '2019', link: '/results/2019 BAWRA Results.xlsx' },
  { year: '2018', label: '2018', link: '/results/2018 BAWRA Results.xlsx' },
  { year: '2017-2', label: '2017 Fall', link: '/results/2017 BAWRA FALL Results1.xlsx' },
  { year: '2017-1', label: '2017 Spring (except Alcatraz, B2B)', link: '/results/2017 BAWRA Results.xlsx' },
  { year: '2016', label: '2016', link: '/results/2016 BAWRA Results.xlsx' },
  { year: '2015', label: '2015', link: '/results/2015 BAWRA Results.xlsx' },
  { year: '2014', label: '2014', link: '/results/2014 BAWRA Results.xlsx' },
  { year: '2013', label: '2013', link: '/results/2013 BAWRA Results.xlsx' },
  { year: '2012-2', label: '2012 Fall', link: '/results/2012 BAWRA SW - Fall Results.xlsx' },
  { year: '2012-1', label: '2012 Spring (except B2B)', link: '/results/2012 Spring except B2B.pdf' },
  { year: '2012-b2b', label: '2012 B2B', link: '/results/2012 B2B.jpg' },
  { year: '2011', label: '2011', link: '/results/2011 BAWRA Results.xls' },
  { year: '2010-erc', label: '2010 ERC-STP', link: '/results/2010 BAWRA erc-stp.pdf' },
  { year: '2010-hoe', label: '2010 HOE', link: '/results/2010 HOE.jpg' },
  { year: '2010-fall', label: '2010 Fall Championships', link: '/results/2010 Fall Season Champ.jpg' },
  { year: '2010-spring', label: '2010 Spring (except B2B)', link: '/results/2010 BAWRA Spring Results except b2b.pdf' },
];

// Group 3: 2000-2009
const results2000s: ResultYear[] = [
  { year: '2009', label: '2009 (except B2B)', link: '/results/2009 BAWRA Results.xls' },
  { year: '2008', label: '2008 (except B2B)', link: '/results/2008 BAWRA Results.xlsx' },
  { year: '2007', label: '2007', link: '/results/2007 BAWRA Results.xls' },
  { year: '2006', label: '2006 (except B2B)', link: '/results/2006 BAWRA Results except b2b.xls' },
  { year: '2005', label: '2005 Spring (Partial Alcatraz) and STP, HOE', link: '/results/2005 Spring - partial Alcatraz - and STP-HOE.xlsx' },
  { year: '2004', label: '2004 Alcatraz, CGC, HOE', link: '/results/2004 spring alcatraz and cgc.docx' },
  { year: '2003', label: '2003 Spring', link: '/results/2003 Spring Standings 2003.xls' },
  { year: '2002', label: '2002 Spring (except B2B) and HOE', link: '/results/2002 BAWRA Spring less B2B plus HOE.xls' },
  { year: '2001-lane', label: '2001 Lane Draws', link: '/results/2001 Lane Draws.pdf' },
  { year: '2001-alc', label: '2001 Alcatraz', link: '/results/2001 Alcatraz.pdf' },
  { year: '2001-cgc', label: '2001 CGC', link: '/results/2001 BAWRA CGC Results.doc' },
  { year: '2001-b2b', label: '2001 B2B', link: '/results/2001 bridge to bridge.pdf' },
  { year: '2000', label: '2000 Spring (except B2B)', link: '/results/2000 spring (except b2b).pdf' },
];

// Group 4: 1990-1999
const results1990s: ResultYear[] = [
  { year: '1999', label: '1999', link: '/results/1999 BAWRA results.pdf' },
  { year: '1998', label: '1998 B2B', link: '/results/1998 B2B.png' },
  { year: '1997', label: '1997 Spring', link: '/results/1997 spring.pdf' },
  { year: '1996', label: '1996 Spring', link: '/results/1996 Spring.png' },
  { year: '1995', label: '1995 Spring', link: '/results/1995 Spring.pdf' },
  { year: '1994', label: '1994 Spring (except CGC, B2B)', link: '/results/1994 Spring except CGC and B2B.pdf' },
  { year: '1993', label: '1993 B2B', link: '/results/1993 B2B Results.pdf' },
  { year: '1992-spring', label: '1992 Spring Results', link: '/results/1992 Spring Results.pdf' },
  { year: '1992-b2b', label: '1992 B2B Times', link: '/results/1992 B2B Times.pdf' },
  { year: '1991', label: '1991 Alcatraz', link: '/results/1991 Alcatraz.pdf' },
  { year: '1990', label: '1990 Spring', link: '/results/1990 BAWRA Spring Results.pdf' },
];

// Group 5: 1980-1989 (No files)
const results1980s: ResultYear[] = [
  { year: '1989', label: '1989', link: '#', isExternal: true },
  { year: '1988', label: '1988', link: '#', isExternal: true },
  { year: '1987', label: '1987', link: '#', isExternal: true },
  { year: '1986', label: '1986', link: '#', isExternal: true },
  { year: '1985', label: '1985', link: '#', isExternal: true },
  { year: '1984', label: '1984', link: '#', isExternal: true },
  { year: '1983', label: '1983', link: '#', isExternal: true },
  { year: '1982', label: '1982', link: '#', isExternal: true },
  { year: '1981', label: '1981', link: '#', isExternal: true },
  { year: '1980', label: '1980', link: '#', isExternal: true },
];

export default function ResultsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
      {/* Page Header */}
      <div className="mb-12 text-center pt-6 md:pt-8">
        <h1 className="text-5xl md:text-7xl heading-font mb-5">
          <span className="text-slate-800 dark:text-slate-200">Race</span> 
          <span className="text-primary ml-2">Results</span>
        </h1>
        <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-lg max-w-3xl mx-auto text-slate-700 dark:text-slate-300">
          Historical race results from BAWRA events dating back to 1990.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Results Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Column 1: Recent + 2010s */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
                Recent Results
              </h2>
              <ul className="space-y-3">
                {recentResults.map((result) => (
                  <ResultLink key={result.year} result={result} />
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
                2010-2019
              </h2>
              <ul className="space-y-3">
                {results2010s.map((result) => (
                  <ResultLink key={result.year} result={result} />
                ))}
              </ul>
            </div>
          </div>
          
          {/* Column 2: 2000s */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
              2000-2009
            </h2>
            <ul className="space-y-3">
              {results2000s.map((result) => (
                <ResultLink key={result.year} result={result} />
              ))}
            </ul>
          </div>
          
          {/* Column 3: 1990s + 1980s */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
                1990-1999
              </h2>
              <ul className="space-y-3">
                {results1990s.map((result) => (
                  <ResultLink key={result.year} result={result} />
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
                1980-1989
              </h2>
              <ul className="space-y-3">
                {results1980s.map((result) => (
                  <ResultLink key={result.year} result={result} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Scoring Information */}
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-8 shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">
            BAWRA Season Championships
          </h2>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p>
              BAWRA declares Men, Women and Mixed team Champions for both Spring and Fall seasons. 
              Additionally, in the Fall, an overall Club Champion is declared.
            </p>
            <p>
              In 2003 BAWRA switched from a "high point" to a "low point" scoring system to determine Spring and Fall Championships:
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic">
              <p>1. Points assigned equals the place finished for teams that start and finish their event.</p>
              <p>
                2. Teams are given points for last place plus 1 point that:<br />
                —Are Disqualified (DQ)<br />
                —Did Not Finish (DNF) (started, but did not finish the race)<br />
                —Did Not Start (DNS)
              </p>
            </blockquote>
          </div>
        </div>
        
      </div>
    </div>
  );
}

// Result Link Component
function ResultLink({ result }: { result: ResultYear }) {
  // For items without a real link, show them differently
  if (result.isExternal === true && result.link === '#') {
    return (
      <li className="text-slate-500 dark:text-slate-400">
        {result.label}
      </li>
    );
  }

  return (
    <li>
      {result.isExternal ? (
        <a 
          href={result.link}
          target="_blank"
          rel="noopener noreferrer" 
          className="text-primary hover:underline hover:text-primary/80 flex items-center"
        >
          {result.label}
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      ) : (
        <Link 
          href={result.link}
          download
          className="text-primary hover:underline hover:text-primary/80 flex items-center"
        >
          {result.label}
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </Link>
      )}
    </li>
  );
}