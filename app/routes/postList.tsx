import type { LinksFunction } from "@remix-run/node";
import { Outlet, Link } from "@remix-run/react";
import vanSketch from "~/assets/images/vanSketch.png";

import stylesUrl from "~/styles/postList.css";

export const links: LinksFunction = () => {
  return [{ rel:"stylesheet", href: stylesUrl }];
};

export default function PostListRoute() {
  return (
    <div className="postList-layout">
      <header className="postList-header">
        <div className="container">
          <h1 className="home-link">
            <Link 
              to="/"
              title="Notes from the road"
              aria-label="notes"
              >
                <span className="logo"><h1>NOTES FROM THE ROAD</h1></span>
                <span className="logo-medium"><h1>NOTES FROM THE ROAD</h1></span>
              </Link>
          </h1>
        </div>
      </header>
      <main className="postList-main">
        <div className="container">
          <div className="postList-list">
            <Outlet />
          </div>
        </div>
      </main>
      <div className="imageContainer">
        <div className="content">
          <a href="/"><img className="vanImage" src={vanSketch} alt="vanImage"/></a>
        </div>
      </div>
      <footer className="footer">
        <div className="footerContainer">
          <div className="content">
            <div className="topContainer">
              <h4>Top Container</h4>
            </div>
            <div className="bottomContainer">
              <h6>Web Design by <a href="https://blankpagedesign.org">BPD</a></h6>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}