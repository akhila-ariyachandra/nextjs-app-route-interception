import Link from "next/link";
import Image from "next/image";

import type { Photo } from "@/lib/types";
import { getPhotos } from "@/lib/unsplash";

const HomePage = async () => {
  const response = await getPhotos();
  const photos = (await response.json()) as Photo[];

  return (
    <div className="grid grid-cols-3 place-items-center gap-4">
      {photos.map((photo) => (
        <div key={photo.id} className="aspect-1 overflow-hidden">
          <Link href={`/photo/${photo.id}`}>
            <Image
              src={photo.urls.regular}
              width={600}
              height={600}
              alt={photo.alt_description}
              className="h-full object-cover object-center"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
