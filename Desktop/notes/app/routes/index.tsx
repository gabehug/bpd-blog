import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function IndexRoute() {
  return (
    <div className="container">
      <div className="content">
        <h1>Notes from the road</h1>
        <a href="/postList" className="button">Click me please!</a>
        <h4>THIS IS WHERE THE MAIN COVER (maybe animation of book will go) AND LANDING PAGE</h4>
      </div>
    </div>
  );
}