import Modal from "@/components/modal";
import PhotoDetails from "@/components/photo-details";
import { getPhotos } from "@/lib/unsplash";

export const generateStaticParams = async () => {
  const photos = await getPhotos();

  return photos.map((photo) => ({
    id: photo.id,
  }));
};

const PhotoModalPage = ({ params }: PageProps<"/photo/[id]">) => {
  return (
    <Modal>
      <PhotoDetails params={params} />
    </Modal>
  );
};

export default PhotoModalPage;
