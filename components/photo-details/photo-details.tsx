import Image from "next/image";
import { getPhoto } from "@/lib/unsplash";
import { Suspense, type ComponentProps } from "react";

const PhotoDetailsRoot = async ({
  params,
}: Pick<PageProps<"/photo/[id]">, "params">) => {
  const { id } = await params;
  const photo = await getPhoto(id);

  return (
    <>
      <div className="float-left size-150">
        <Image
          unoptimized
          src={photo.urls.regular}
          width={600}
          height={600}
          alt={photo.alt_description}
          className="size-150 object-cover"
        />
      </div>

      <div className="float-right h-full w-50 p-2">
        <h3 className="text-2xl font-semibold text-gray-800">
          {photo.user.name}
        </h3>
        <h4 className="text-lg font-normal text-gray-600">
          Taken by{" "}
          <a
            href={`https://www.instagram.com/${photo.user.social.instagram_username}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-700"
          >
            {`@${photo.user.social.instagram_username}`}
          </a>
        </h4>
      </div>
    </>
  );
};

const PhotoDetails = async (props: ComponentProps<typeof PhotoDetailsRoot>) => {
  return (
    <div className="mx-auto max-h-150 w-200 overflow-hidden bg-white">
      <Suspense
        fallback={
          <>
            <div className="float-left size-150">
              <div className="size-150 animate-pulse bg-gray-100" />
            </div>

            <div className="float-right h-full w-50 p-2">
              <div className="h-16 animate-pulse rounded bg-gray-100" />

              <div className="h-14 animate-pulse rounded bg-gray-100" />
            </div>
          </>
        }
      >
        <PhotoDetailsRoot {...props} />
      </Suspense>
    </div>
  );
};

export default PhotoDetails;
