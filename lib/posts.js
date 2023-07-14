import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(),'posts'); //投稿が入っているdirectoryを指定

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory,fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        return {
            id,
            ...matterResult.data,
        };
    });

    return allPostsData.sort((a, b) => {
        if(a.date < b.date) {
            return 1;
        }else {
            return -1;
        }
    });

}