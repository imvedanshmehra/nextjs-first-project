import { useRouter } from "next/router";

const NewsDetails = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  console.log(newsId);
  return <p>News {newsId}</p>;
};
export default NewsDetails;
