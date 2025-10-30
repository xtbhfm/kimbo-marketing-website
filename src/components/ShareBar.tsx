'use client';

import { useEffect, useState } from 'react';

type Props = { title: string };

export default function ShareBar({ title }: Props) {
  const [shareUrl, setShareUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    }
  }, []);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const links = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    x: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    quora: `https://www.quora.com/share?url=${encodedUrl}&title=${encodedTitle}`,
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const handleWebShare = async () => {
    if (navigator.share && shareUrl) {
      try {
        await navigator.share({ title, url: shareUrl });
      } catch {}
    } else {
      handleCopy();
    }
  };

  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <span className="text-sm text-gray-500 mr-1">Share:</span>
      <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 text-sm rounded-full border border-gray-200 hover:bg-gray-50">
        LinkedIn
      </a>
      <a href={links.x} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 text-sm rounded-full border border-gray-200 hover:bg-gray-50">
        X
      </a>
      <a href={links.quora} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 text-sm rounded-full border border-gray-200 hover:bg-gray-50">
        Quora
      </a>
      <button onClick={handleWebShare} className="px-3 py-1.5 text-sm rounded-full border border-gray-200 hover:bg-gray-50">
        Instagram
      </button>
      <button onClick={handleCopy} className="px-3 py-1.5 text-sm rounded-full border border-gray-200 hover:bg-gray-50">
        {copied ? 'Link copied' : 'Copy link'}
      </button>
    </div>
  );
}


