import Link from "next/link"

const News = () => (
  <>
    <h1>News Page</h1>
    <ul>
      <Link href="/news/1"><li>News 1</li></Link>
      <Link href="/news/2"><li>News 2</li></Link>
      <Link href="/news/3"><li>News 3</li></Link>
    </ul>
  </>
);

export default News;
