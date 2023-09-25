import { useRouter } from "next/router";

const NewsPage = () => {
  const router = useRouter();

  return <div>news page {router.query.slug}</div>;
};

export default NewsPage;
