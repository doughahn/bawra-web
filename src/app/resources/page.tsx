"use client";

import { useState } from 'react';
import Link from 'next/link';

// Define resource types
type Resource = {
  id: string;
  title: string;
  description: string;
  link?: string;
  file?: string;
  type: 'officials' | 'coxswains';
};

// Resource data
const resources: Resource[] = [
  // Race Officials Resources
  {
    id: "race-official-manual",
    title: "Race Official Manual",
    description: "Comprehensive guide for race officials covering race preparation, rules enforcement, and safety procedures.",
    file: "https://docs.google.com/document/d/1XHrvyGhW8h0b6rTPhZ_Y-j8NKzSzxRVZCcJfIBlZnDo/edit?usp=drive_link",
    type: 'officials'
  },
  {
    id: "rules-of-racing",
    title: "Rules of Racing",
    description: "Official BAWRA rules governing all sanctioned races, including starting procedures, penalties, and protests.",
    file: "https://docs.google.com/document/d/1ZcCfA4k7qFuyIAq737fXqmzM-8zPrxmE/edit?usp=drive_link&ouid=117779544056723520082&rtpof=true&sd=true",
    type: 'officials'
  },
  {
    id: "race-official-procedures",
    title: "Race Official Procedures",
    description: "Detailed procedures for race officials, including pre-race briefing, on-water positioning, and post-race reporting.",
    file: "https://drive.google.com/drive/folders/1MWaAPKcLM1TesvHavI-N3QrvhbV-6bvi?usp=drive_link",
    type: 'officials'
  },
  {
    id: "ro-training-signup",
    title: "Sign up for RO Training",
    description: "Register for upcoming Race Official training sessions to learn the skills needed to officiate BAWRA events.",
    link: "https://bawra.netlify.app/ro-check-in",
    type: 'officials'
  },
  {
    id: "cro-exam",
    title: "CRO Exam",
    description: "Certification exam for Certified Race Officials (CRO) who wish to serve as head officials at BAWRA events.",
    file: "https://docs.google.com/document/d/1uATndb_Hz_HOWPny4OUUW4pfIsjfPUnP/edit?usp=drive_link&ouid=117779544056723520082&rtpof=true&sd=true",
    type: 'officials'
  },
  {
    id: "ro-directory",
    title: "List of Trained ROs and Certified CROs",
    description: "Directory of all trained Race Officials and Certified Race Officials available to support BAWRA events.",
    file: "https://bawra.netlify.app/race-officials",
    type: 'officials'
  },
  
  // Coxswains Resources
  {
    id: "coxswain-manual",
    title: "Coxswain Manual",
    description: "Essential guide for whaleboat coxswains covering commands, techniques, race strategy, and safety procedures.",
    file: "https://drive.google.com/file/d/15GeEbpKVINqXrS01ADQjY5UKm5u5QkKP/view?usp=drive_link",
    type: 'coxswains'
  },
  {
    id: "coxswain-resources",
    title: "Coxswain Resources",
    description: "Collection of resources for coxswains including course diagrams, tide charts, and strategy guides.",
    file: "https://drive.google.com/drive/folders/1WSDN2k4F2mMFSbjIOWSdHsDg4TQL5tL9?usp=drive_link",
    type: 'coxswains'
  },
  {
    id: "cox-rules-of-racing",
    title: "Rules of Racing",
    description: "Official racing rules used in all BAWRA competitions, with emphasis on coxswain responsibilities and proper procedures.",
    file: "https://docs.google.com/document/d/1ZcCfA4k7qFuyIAq737fXqmzM-8zPrxmE/edit?usp=drive_link&ouid=117779544056723520082&rtpof=true&sd=true",
    type: 'coxswains'
  },
  {
    id: "cox-training-signup",
    title: "Sign up for Cox Training",
    description: "Register for upcoming Coxswain training sessions to learn essential skills or advance your coxing abilities.",
    link: "https://bawra.netlify.app/cox-check-in",
    type: 'coxswains'
  },
  {
    id: "cox-certification",
    title: "Cox Certification",
    description: "Information about the BAWRA coxswain certification program, including requirements and certification process.",
    file: "https://bawra.netlify.app/coxswains",
    type: 'coxswains'
  },
  {
    id: "cox-requirements",
    title: "Certification Requirements",
    description: "Detailed list of requirements needed to obtain BAWRA coxswain certification, including experience and skills demonstration.",
    file: "https://drive.google.com/file/d/1nL5e-KoFh4JqfDbGATwEWZgUapL6n66G/view?usp=sharing",
    type: 'coxswains'
  },
  {
    id: "cox-exam",
    title: "Coxswain Exam",
    description: "Certification exam for coxswains covering rules knowledge, navigation, safety procedures, and race strategy.",
    file: "https://drive.google.com/file/d/1nL5e-KoFh4JqfDbGATwEWZgUapL6n66G/view?usp=sharing",
    type: 'coxswains'
  },
  {
    id: "cox-directory",
    title: "List of Trained and Certified Coxswains",
    description: "Directory of all trained and certified coxswains recognized by BAWRA to cox in official events.",
    file: "https://bawra.netlify.app/coxswains",
    type: 'coxswains'
  }
];

export default function ResourcesPage() {
  // State to track active tab
  const [activeTab, setActiveTab] = useState<'officials' | 'coxswains'>('officials');

  // Filter resources by type
  const officialsResources = resources.filter(resource => resource.type === 'officials');
  const coxswainsResources = resources.filter(resource => resource.type === 'coxswains');

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
      {/* Page Header */}
      <div className="mb-12 text-center pt-6 md:pt-8">
        <h1 className="text-5xl md:text-7xl heading-font mb-5">
          <span className="text-slate-800 dark:text-slate-200">BAWRA</span> 
          <span className="text-primary ml-2">Resources</span>
        </h1>
        <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-lg max-w-3xl mx-auto text-slate-700 dark:text-slate-300">
          Essential documents, guides, and references for race officials and coxswains.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className={`py-3 px-6 md:px-10 text-sm md:text-base font-medium rounded-l-lg ${
              activeTab === 'officials'
                ? 'bg-primary text-white'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
            } border border-slate-200 dark:border-slate-700 focus:z-10 focus:outline-none transition-colors`}
            onClick={() => setActiveTab('officials')}
          >
            Race Officials
          </button>
          <button
            type="button"
            className={`py-3 px-6 md:px-10 text-sm md:text-base font-medium rounded-r-lg ${
              activeTab === 'coxswains'
                ? 'bg-primary text-white'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
            } border border-slate-200 dark:border-slate-700 focus:z-10 focus:outline-none transition-colors`}
            onClick={() => setActiveTab('coxswains')}
          >
            Coxswains
          </button>
        </div>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {activeTab === 'officials' ? (
          <>
            {officialsResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </>
        ) : (
          <>
            {coxswainsResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </>
        )}
      </div>

      {/* Additional Information */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg shadow-md p-6 md:p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">
          Requesting Additional Resources
        </h2>
        <p className="text-slate-700 dark:text-slate-300 mb-6">
          If you need additional resources or have questions about race officiating or coxing in BAWRA events, 
          please contact the BAWRA board or your club representative.
        </p>
        <p className="text-slate-700 dark:text-slate-300 mb-0">
          For specific inquiries, you can email{' '}
          <a 
            href="mailto:info@bawra.org" 
            className="text-primary hover:underline"
          >
            info@bawra.org
          </a>
        </p>
      </div>
    </div>
  );
}

// Resource Card Component
function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">
          {resource.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          {resource.description}
        </p>
        {resource.link && (
          <Link 
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline"
          >
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Visit Website
          </Link>
        )}
        {resource.file && (
          <Link 
            href={resource.file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline"
          >
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            View Document
          </Link>
        )}
      </div>
    </div>
  );
}