import Link from "next/link";
import type { FC } from "react";

const Header: FC = () => {
  return (
    <header className="container p-4">
      <Link href="/">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-4xl">
          Next.js Intercepting Routes Modal example
        </h1>
      </Link>

      <p className="my-3 text-sm font-medium text-gray-700 sm:text-lg">
        An example showing Next.js 13&apos;s{" "}
        <a
          href="https://beta.nextjs.org/docs/routing/intercepting-routes"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Intercepting Routes
        </a>{" "}
        feature.
      </p>

      <p className="my-3 text-sm font-medium text-gray-700 sm:text-lg">
        Navigating into the photo page client-side will open a modal instead of
        a full page, while still updating the URL. Navigating directly into the
        photo page URL or refreshing the page while the modal is open will bring
        up the photo page instead.
      </p>

      <a
        href="https://github.com/akhila-ariyachandra/nextjs-app-route-interception"
        target="_blank"
        rel="noopener noreferrer"
        className="flex max-w-fit flex-row items-center gap-2 rounded bg-[#171515] px-2 py-1 text-white"
      >
        <span className="text-base font-medium leading-none sm:text-xl">
          View Source
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
      </a>
    </header>
  );
};

export default Header;
