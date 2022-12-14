import { LoaderFunction, json, LinksFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { Post } from "@prisma/client";
import stylesUrl from "~/styles/postListIndex.css";

import { db } from "~/utils/db.server";

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

  return (
    <div className="postContainer">
      <h1>{data.post.name}</h1>
      <h5>{data.post.date}</h5>
      <p>{data.post.content}</p>
      <Link to="/postList">Back to more...</Link>
    </div>
  );
}