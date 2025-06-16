'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ExpandableImageProps {
  src: string;
  alt: string;
  title?: string;
}

export default function ExpandableImage({ src, alt, title }: ExpandableImageProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="mb-6 rounded-lg overflow-hidden bg-white dark:bg-gray-800 p-4">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => setIsExpanded(true)}
          title="Click to view full size"
        />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
          Click image to view full size
        </p>
      </div>

      {/* Full-size modal */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsExpanded(false)}
        >
          <div className="relative max-w-7xl max-h-full overflow-auto">            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 z-10"
              onClick={() => setIsExpanded(false)}
              title="Close full size view"
              aria-label="Close full size view"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-full rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            {title && (
              <div className="absolute bottom-4 left-4 right-4 text-white bg-black bg-opacity-50 p-3 rounded-lg">
                <h3 className="font-medium">{title}</h3>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
