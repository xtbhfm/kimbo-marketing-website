'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';

type Props = {
  alt: string;
  srcBase?: string; // e.g. "/images/Chad-Headshot.jpg" or "/images/chad-headshot.jpg"
  name?: string; // used to derive fallbacks like /images/{name}.jpg
  fill?: boolean;
  className?: string;
};

function toSlug(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function AvatarImage({ alt, srcBase, name, fill = true, className }: Props) {
  const derived = useMemo(() => (name ? toSlug(name) : undefined), [name]);

  const bases: string[] = useMemo(() => {
    const list: string[] = [];
    if (srcBase) {
      // try given path first, and a lowercased filename variant
      list.push(srcBase);
      const lower = srcBase.replace(/([^/]+)$/g, (m) => m.toLowerCase());
      if (lower !== srcBase) list.push(lower);
    }
    if (derived) {
      list.push(`/images/${derived}`);
    }
    return list;
  }, [srcBase, derived]);

  const exts = ['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG', '.WEBP'];
  const candidates = useMemo(() => {
    const list: string[] = [];
    for (const b of bases) {
      // if path already has extension, use as-is
      if (/\.(jpg|jpeg|png|webp)$/i.test(b)) {
        list.push(b);
      } else {
        for (const e of exts) list.push(`${b}${e}`);
      }
    }
    // final fallback generic avatar
    list.push('/images/screenshot-removebg-preview.png');
    return list;
  }, [bases]);

  const [idx, setIdx] = useState(0);
  const src = candidates[idx];

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className ?? 'object-cover'}
      sizes="160px"
      onError={() => setIdx((i) => (i + 1 < candidates.length ? i + 1 : i))}
    />
  );
}


