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
              to="/postList"
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
          <a href="/" className="imageLink"><img className="vanImage" src={vanSketch} alt="vanImage"/></a>
          <span className="hovercard">
            <div className="tooltiptext">
              Exit
            </div>
          </span>
        </div>
      </div>
      <footer className="footer">
        <div className="footerContainer">
          <div className="footerMain">
            <div className="topContainer">
              <li className="links">
                <a href="https://blankpagedesign.org/gabehug">About</a>
                <a href="https://blankpagedesign.org/photography/fading">Photography</a>
                <a href="https://blankpagedesign.org/prints">Prints</a>
                <a href="https://ko-fi.com/gabrielhug">Support</a>
              </li>
              <li className="rightLinks">
                <a className="gitIcon" href="https://github.com/gabehug/notes" target="_blank"></a>
                <a className="instaIcon" href="https://www.instagram.com/shutter_hug/" target="_blank"></a>
              </li>
            </div>
          </div>
          <div className="bottomContainer">
            <h6>Created by <a href="https://blankpagedesign.org">BPD</a></h6>
          </div>
        </div>
      </footer>
    </div>
  );
}