'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';

type Props = {
  title: string;
  slug: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  imageId?: string;
};

function toSlug(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function ArticleImage({ title, slug, className, fill = true, sizes, priority, imageId }: Props) {
  const derivedTitleSlug = useMemo(() => toSlug(title), [title]);
  const candidates = useMemo(() => {
    const bases = [
      // explicit id first if provided (always through route)
      ...(imageId
        ? [
            `/article-images/${encodeURIComponent(imageId)}`,
            `/article-images/${toSlug(imageId)}`,
          ]
        : []),
      // Prefer custom route that reads from project-root /images (avoids public/ shadowing)
      `/article-images/${slug}`,
      `/article-images/${derivedTitleSlug}`,
      `/article-images/${encodeURIComponent(title)}`,
      `/article-images/${toSlug(title)}`,

      // Fallbacks to public/ locations
      `/images/research/${slug}`,
      `/images/research/${derivedTitleSlug}`,
      `/images/research/${encodeURIComponent(title)}`,
      `/images/research/${toSlug(title)}`,
      `/images/${slug}`,
      `/images/${derivedTitleSlug}`,
      `/images/${encodeURIComponent(title)}`,
      `/images/${toSlug(title)}`,
    ];
    const exts = ['.jpg', '.png', '.webp', '.jpeg', '.JPG', '.PNG', '.WEBP', '.JPEG'];
    const list: string[] = [];
    for (const b of bases) {
      for (const e of exts) list.push(`${b}${e}`);
    }
    return list;
  }, [slug, derivedTitleSlug]);

  const [index, setIndex] = useState(0);
  const src = candidates[index];

  return (
    <Image
      src={src}
      alt={title}
      fill={fill}
      className={className ?? 'object-cover'}
      sizes={sizes}
      priority={priority}
      onError={() => {
        setIndex((i) => (i + 1 < candidates.length ? i + 1 : i));
      }}
    />
  );
}


