import { LoaderFunction, json, LinksFunction } from "@remix-run/node";
import { Link, useLoaderData, useParams } from "@remix-run/react";
import type { Post } from "@prisma/client";
import stylesUrl from "~/styles/postListIndex.css";

import { db } from "~/utils/db.server";
import { marked } from "marked";

type LoaderData = { post: Post };

export const links: LinksFunction = () => {
  return [{ rel:"stylesheet", href: stylesUrl }];
};

export const loader: LoaderFunction = async ({
  params,
}) => {
  const post = await db.post.findUnique({
    where: { id: params.postId },
  });


  if (!post) throw new Error("Post not found");
  const data: LoaderData = { post };
  return json(data);
};

export default function PostRoute() {
  const data = useLoaderData<LoaderData>();
  const html = marked.parse(data.post.content);
  return (
    <div className="postContainer">
      <h6>GH.{data.post.id}</h6>
      <h1>{data.post.name}</h1>
      <h4>{data.post.slug}</h4>
      <h4>{data.post.date}</h4>
      <div className="postContent" dangerouslySetInnerHTML={{__html: html}}/>
      <Link to="/postList" className="backButton">Back to more...</Link>
    </div>
  );
}