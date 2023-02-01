import { json, LinksFunction } from "@remix-run/node";
import { 
  LiveReload,
  Links,
  Outlet,
  useLoaderData,
  useLocation
} from "@remix-run/react";


import globalStylesUrl from "./styles/global.css";
import globalMediumStylesUrl from "./styles/global-medium.css";
import globalLargeStylesUrl from "./styles/global-large.css";
import { useEffect } from "react";
import * as gtag from "~/utils/gtags.client";


export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalStylesUrl,
    },
    {
      rel: "stylesheet",
      href: globalMediumStylesUrl,
      media: "print, (min-width: 640px)",
    },
    {
      rel: "stylesheet",
      href: globalLargeStylesUrl,
      media: "screen and (min-width: 1024px)",
    },
  ];
};

export const loader = async () => {
  return json({ gaTrackingId: process.env.GOOGLE_ID });
};

export default function App() {
  const location = useLocation();
  const { gaTrackingId } = useLoaderData<typeof loader>();

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId);
    }
  }, [location, gaTrackingId]);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" charSet="utf-8" />
        <title>BPD Blog</title>
        <Links />
        <LiveReload />
      </head>
      <body>
        <Outlet />
      </body>
    </html>
  );
}