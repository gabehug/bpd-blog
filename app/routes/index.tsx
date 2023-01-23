import type { LinksFunction } from "@remix-run/node";
import cover from "~/assets/images/bookCover.png";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};


export default function IndexRoute() {
  return (
    <div className="container">
      <div className="content">
        <a href="/postList" className="openButton">OPEN HERE</a>
        <img className="mainImage" src={cover} alt="cover image"/>
        <h6 className="copyright">© <a href="https://blankpagedesign.org">BPD</a></h6>
      </div>
    </div>
  );
}