import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Post } from "@prisma/client";
import { db } from "~/utils/db.server";
import stylesUrl from "~/styles/postListIndex.css";

type LoaderData = { 
  postListItems: Array<Post>;
};

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    postListItems: await db.post.findMany({
      orderBy: {id:"desc"}
    }),
  };
  return json(data);
};

export const links: LinksFunction = () => {
  return [{ rel:"stylesheet", href: stylesUrl }];
};

export default function PostIndexRoute() {
  const data = useLoaderData<LoaderData>();

  return (
    <div className="postListContainer">
      <div className= "postListContent">
      {data.postListItems.map((post) => (
        <li className="postPreview" key={post.id}>
          <h3>{post.name}</h3>
          <h6>{post.date}</h6>
          <p>{post.preview}</p>
          <Link to={post.id} className="openButton">Read more</Link>
        </li>
      ))}
      
      </div>
    </div>
  );
}