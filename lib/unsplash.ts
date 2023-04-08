import "server-only";

const headers = {
  Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
};

export const getPhotos = async () => {
  return await fetch("https://api.unsplash.com/photos", {
    headers,
    next: {
      revalidate: 3600,
    },
  });
};

export const getPhoto = async (id: string) => {
  return await fetch(`https://api.unsplash.com/photos/${id}`, {
    headers,
    next: {
      revalidate: 3600,
    },
  });
};
