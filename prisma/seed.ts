import { PrismaClient } from "@prisma/client";
import imgTest from "~/assets/images/vanSketch.png";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getPosts().map((post) => {
      return db.post.create({ data: post});
    })
  );
}

seed();

function getPosts() {
  return [
    {
      name: "Chicago > North Carolina",
      date: "10-2-2022",
      preview: "Going chicago to north carolina duh.",
      content: "",
    },
    {
      name: "Chicago -> UP",
      date: "10.14.2022",
      preview: "chicago to the UP michicago",
      content: "CCCCCC _______ UUUUUUPPPPP Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus, velit vel imperdiet fringilla, libero leo efficitur purus, ut bibendum dui tellus ut justo. Nullam congue erat non pellentesque pretium."
    },
    {
      name: "UP -> Lexington",
      date: "10.22.2022",
      preview: "Going to grandma and grandpas",
      content: "UUUPPPPPP _______ LEXXXXXX Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus, velit vel imperdiet fringilla, libero leo efficitur purus, ut bibendum dui tellus ut justo. Nullam congue erat non pellentesque pretium."
    },
    {
      name: "Lexington -> Chicago",
      date: "11.12.2022",
      preview: "back to chicago",
      content: "LEXXXXX ________ CHIIIIIIIII Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus, velit vel imperdiet fringilla, libero leo efficitur purus, ut bibendum dui tellus ut justo. Nullam congue erat non pellentesque pretium."
    },
  ];
}