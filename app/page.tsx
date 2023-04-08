import Link from "next/link";
import Image from "next/image";

import type { Photo } from "@/lib/types";
import { getPhotos } from "@/lib/unsplash";

const HomePage = async () => {
  const response = await getPhotos();
  const photos = (await response.json()) as Photo[];

  return (
    <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 xl:grid-cols-3">
      {photos.map((photo) => (
        <Link href={`/photo/${photo.id}`} key={photo.id}>
          <Image
            src={photo.urls.regular}
            width={500}
            height={500}
            alt={photo.alt_description}
            className="h-[500px] w-[500px] object-cover"
          />
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
