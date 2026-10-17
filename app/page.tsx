import Link from "next/link";
import Image from "next/image";
import { getPhotos } from "@/lib/unsplash";

const HomePage = async () => {
  const photos = await getPhotos();

  return (
    <div className="grid grid-cols-3 place-items-center gap-4">
      {photos.map((photo, index) => (
        <div key={photo.id} className="aspect-square overflow-hidden">
          <Link href={`/photo/${photo.id}`} prefetch>
            <Image
              unoptimized
              src={photo.urls.regular}
              width={600}
              height={600}
              alt={photo.alt_description}
              className="h-full object-cover object-center"
              placeholder="blur"
              blurDataURL={photo.blur_hash}
              priority={index < 6}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
