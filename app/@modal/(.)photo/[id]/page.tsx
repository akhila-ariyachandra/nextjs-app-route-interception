import Link from "next/link";
import Modal from "@/components/Modal";
import PhotoDetails from "@/components/PhotoDetails";
import type { Photo } from "@/lib/types";
import { notFound } from "next/navigation";
import { getPhoto } from "@/lib/unsplash";

interface PhotoModalPageProps {
  params: {
    id: string;
  };
}

const PhotoModalPage = async ({ params }: PhotoModalPageProps) => {
  const response = await getPhoto(params.id);

  if (response.status === 404) {
    notFound();
  }

  const photo = (await response.json()) as Photo;

  return (
    <Modal>
      <PhotoDetails
        src={photo.urls.regular}
        alt={photo.alt_description}
        photographer={{
          name: photo.user.name,
          instagram: photo.user.social.instagram_username,
        }}
      />
      <div className="mt-4 text-center">
        <Link
          href={`/photo/${params.id}`}
          className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-900"
        >
          See more
        </Link>
      </div>
    </Modal>
  );
};

export default PhotoModalPage;
