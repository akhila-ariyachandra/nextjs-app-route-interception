import Image from "next/image";
import type { FC } from "react";

interface PhotoDetailsProps {
  src: string;
  alt: string;
  photographer: {
    name: string;
    instagram: string;
  };
}

const PhotoDetails: FC<PhotoDetailsProps> = ({ src, alt, photographer }) => {
  return (
    <div className="mx-auto flex max-w-fit flex-row border border-gray-500">
      <Image
        src={src}
        width={750}
        height={750}
        alt={alt}
        className="h-[750px] w-[750px] object-cover"
      />

      <div className="w-[300px] p-2">
        <h1 className="text-2xl font-semibold text-gray-800">
          {photographer.name}
        </h1>
        <h2 className="text-lg font-normal text-gray-600">
          Taken by{" "}
          <a
            href={`https://www.instagram.com/${photographer.instagram}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-700"
          >
            {`@${photographer.instagram}`}
          </a>
        </h2>
      </div>
    </div>
  );
};

export default PhotoDetails;
