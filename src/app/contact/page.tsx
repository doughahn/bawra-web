import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
      {/* Page Header */}
      <div className="mb-12 text-center pt-6 md:pt-8">
        <h1 className="text-5xl md:text-7xl heading-font mb-5">
          <span className="text-slate-800 dark:text-slate-200">Contact</span> 
          <span className="text-primary ml-2">BAWRA</span>
        </h1>
        <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
          <div className="relative h-64 md:h-80">
            <Image
              src="/images/Contact us.jpg"
              alt="BAWRA Contact"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="p-8 md:p-10">
            <div className="space-y-8 mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 dark:text-slate-200">
                  Do you want to row?
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  Interested in whaleboat rowing? BAWRA welcomes new rowers of all experience levels.
                  Reach out to learn about clubs in your area, practice schedules, and how to get started.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 dark:text-slate-200">
                  Do you want to officiate?
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  BAWRA races need volunteers and officials. If you're interested in helping organize or 
                  officiate at our racing events, we'd love to hear from you.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 dark:text-slate-200">
                  Do you want to find out more about BAWRA?
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  Have questions about the Bay Area Whaleboat Rowing Association, our events, 
                  or anything else related to whaleboat rowing in the Bay Area? We're happy to help.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200">
                Send us an email at:
              </h3>
              <a 
                href="mailto:bawra+owner@groups.io" 
                className="text-xl md:text-2xl text-primary hover:underline font-medium"
              >
                bawra+owner@groups.io
              </a>
              
              <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
                <Link 
                  href="https://waiver.smartwaiver.com/w/60184b57585d5/web/" 
                  target="_blank" 
                  className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Sign Waiver
                </Link>
                
                <Link 
                  href="https://groups.io/g/bawra" 
                  target="_blank" 
                  className="px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white rounded-md hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Join Mailing List
                </Link>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-slate-600 dark:text-slate-400">
                Follow us on social media for updates, photos, and more
              </p>
              <div className="flex justify-center gap-6 mt-4">
                <a 
                  href="https://www.facebook.com/BAWRA.org/" 
                  target="_blank" 
                  className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/bayareawhaleboatrowing/" 
                  target="_blank" 
                  className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}