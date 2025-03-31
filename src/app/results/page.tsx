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
      <section className="mb-24">
        <div className="mb-16 text-center pt-6 md:pt-8">
          <h1 className="text-5xl md:text-7xl heading-font mb-5">
            <span className="text-slate-800 dark:text-slate-200">Race</span> 
            <span className="text-primary ml-2">Results</span>
          </h1>
          <div className="w-32 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Introduction Card */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-primary/20 mb-16 overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 heading-font text-slate-800 dark:text-slate-200">
              Historical Race Results
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              Browse race results from BAWRA events dating back to 1990. Results are available in various formats including PDF, Excel, and image files.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full text-primary text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                PDF Documents
              </div>
              <div className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/20 rounded-full text-green-700 dark:text-green-300 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Excel Spreadsheets
              </div>
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/20 rounded-full text-blue-700 dark:text-blue-300 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Image Files
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mb-24">
        {/* Results Section */}
        <h2 className="text-3xl font-bold mb-8 heading-font text-slate-800 dark:text-slate-200">
          Results by Year
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Column 1: Recent + 2010s */}
          <div className="space-y-12">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
                Recent Results
              </h3>
              <ul className="space-y-3 mt-4">
                {recentResults.map((result) => (
                  <ResultLink key={result.year} result={result} />
                ))}
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
                2010-2019
              </h3>
              <ul className="space-y-3 mt-4">
                {results2010s.map((result) => (
                  <ResultLink key={result.year} result={result} />
                ))}
              </ul>
            </div>
          </div>
          
          {/* Column 2: 2000s */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
              2000-2009
            </h3>
            <ul className="space-y-3 mt-4">
              {results2000s.map((result) => (
                <ResultLink key={result.year} result={result} />
              ))}
            </ul>
          </div>
          
          {/* Column 3: 1990s + 1980s */}
          <div className="space-y-12">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
                1990-1999
              </h3>
              <ul className="space-y-3 mt-4">
                {results1990s.map((result) => (
                  <ResultLink key={result.year} result={result} />
                ))}
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
                1980-1989
              </h3>
              <ul className="space-y-3 mt-4">
                {results1980s.map((result) => (
                  <ResultLink key={result.year} result={result} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
        
      {/* Scoring Information */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-primary/20 p-8 overflow-hidden">
          <h2 className="text-3xl font-bold mb-6 heading-font text-slate-800 dark:text-slate-200">
            Championship Scoring System
          </h2>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg">
              BAWRA declares Men, Women and Mixed team Champions for both Spring and Fall seasons. 
              Additionally, in the Fall, an overall Club Champion is declared.
            </p>
            <p>
              In 2003 BAWRA switched from a "high point" to a "low point" scoring system to determine Spring and Fall Championships:
            </p>
            <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-lg my-6">
              <ol className="list-decimal pl-6 space-y-4">
                <li className="text-slate-700 dark:text-slate-300">
                  Points assigned equals the place finished for teams that start and finish their event.
                </li>
                <li className="text-slate-700 dark:text-slate-300">
                  Teams are given points for last place plus 1 point that:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Are Disqualified (DQ)</li>
                    <li>Did Not Finish (DNF) (started, but did not finish the race)</li>
                    <li>Did Not Start (DNS)</li>
                  </ul>
                </li>
              </ol>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm italic">
              The team with the lowest total points at the end of the season is declared the champion in their division.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Result Link Component
function ResultLink({ result }: { result: ResultYear }) {
  // For items without a real link, show them differently
  if (result.isExternal === true && result.link === '#') {
    return (
      <li className="py-2 px-3 rounded-md text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/30">
        {result.label}
        <span className="ml-2 text-xs italic">(No results available)</span>
      </li>
    );
  }

  // Determine file type for icon
  const getFileIcon = (link: string) => {
    if (link === '#') return null;
    
    if (link.endsWith('.pdf')) {
      return (
        <span className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 text-xs px-2 py-0.5 rounded-full ml-2">
          PDF
        </span>
      );
    } else if (link.endsWith('.xlsx') || link.endsWith('.xls') || link.endsWith('.doc') || link.endsWith('.docx')) {
      return (
        <span className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-xs px-2 py-0.5 rounded-full ml-2">
          DOC
        </span>
      );
    } else if (link.endsWith('.jpg') || link.endsWith('.png') || link.endsWith('.gif')) {
      return (
        <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs px-2 py-0.5 rounded-full ml-2">
          IMG
        </span>
      );
    }
    return null;
  };

  // Determine if URL is external
  const isExternal = result.isExternal || (!result.link.startsWith('/') && !result.link.startsWith('#'));
  
  return (
    <li className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/30 rounded-md">
      {isExternal ? (
        <a 
          href={result.link}
          target="_blank"
          rel="noopener noreferrer" 
          className="text-primary hover:text-primary/80 flex items-center justify-between py-2 px-3"
        >
          <span className="flex items-center">
            {result.label}
            {getFileIcon(result.link)}
          </span>
          <svg className="w-4 h-4 ml-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      ) : (
        <Link 
          href={result.link}
          download
          className="text-primary hover:text-primary/80 flex items-center justify-between py-2 px-3"
        >
          <span className="flex items-center">
            {result.label}
            {getFileIcon(result.link)}
          </span>
          <svg className="w-4 h-4 ml-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </Link>
      )}
    </li>
  );
}