import PhotoDetails from "@/components/photo-details";
import { getPhotos } from "@/lib/unsplash";

export const generateStaticParams = async () => {
  const photos = await getPhotos();

  return photos.map((photo) => ({
    id: photo.id,
  }));
};

const PhotoPage = ({ params }: PageProps<"/photo/[id]">) => {
  return <PhotoDetails params={params} />;
};

export default PhotoPage;
