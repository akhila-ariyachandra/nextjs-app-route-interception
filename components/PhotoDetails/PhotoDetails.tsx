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
    <div className="mx-auto max-h-[600px] w-[800px] overflow-hidden bg-white">
      <div className="float-left h-[600px] w-[600px]">
        <Image
          src={src}
          width={600}
          height={600}
          alt={alt}
          className="h-[750px] w-[750px] object-cover"
        />
      </div>

      <div className="float-right h-full w-[200px] p-2">
        <h3 className="text-2xl font-semibold text-gray-800">
          {photographer.name}
        </h3>
        <h4 className="text-lg font-normal text-gray-600">
          Taken by{" "}
          <a
            href={`https://www.instagram.com/${photographer.instagram}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-700"
          >
            {`@${photographer.instagram}`}
          </a>
        </h4>
      </div>
    </div>
  );
};

export default PhotoDetails;
