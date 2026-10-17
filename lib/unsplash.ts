import "server-only";
import { createFetch } from "@better-fetch/fetch";
import { cacheLife } from "next/cache";
import { z } from "zod";
import { notFound } from "next/navigation";

const photoSchema = z.object({
  id: z.string(),
  blur_hash: z.string(),
  alt_description: z.string(),
  urls: z.object({
    regular: z.string(),
  }),
  user: z.object({
    name: z.string(),
    social: z.object({
      instagram_username: z.string().nullable(),
    }),
  }),
});

const $fetch = createFetch({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
  },
  throw: true,
});

export const getPhotos = async () => {
  "use cache";

  cacheLife("days");

  return await $fetch("/photos", {
    query: {
      per_page: 9,
      order_by: "popular",
    },
    output: z.array(photoSchema),
  });
};

export const getPhoto = async (id: string) => {
  "use cache";

  cacheLife("days");

  const { data, error } = await $fetch("/photos/:id", {
    params: {
      id,
    },
    output: photoSchema,
    throw: false,
  });

  if (error?.status === 404) {
    notFound();
  }

  return data;
};
