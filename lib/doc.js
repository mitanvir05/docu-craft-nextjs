import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";


const postDirectory = path.join(process.cwd(), "docs");

export function getDocuments() {
  console.log(postDirectory);
  const fileNames = fs.readdirSync(postDirectory);

  const allDocuments = fileNames.map((fileName) => {
    const id = fileName.replace("md", "");

    const fullPath = path.join(postDirectory, fileName);

    const fileContent = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContent);
    return {
      id,
      ...matterResult.data,
    };
  });
}
