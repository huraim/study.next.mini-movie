import { useRouter } from "next/router"
import Seo from "../../components/seo";

export default function Detail({params}) {
  const router = useRouter(); // Router는 CSR임 SEO 별로
  const [title, id] = params || []; // || []를 해줘야 그냥 URL 진입해도 백엔드 오류 없이 가능
  return (
    <>
      <Seo title={title} />
      <h4>{title || "Loading..."}</h4>
    </>
  )
}

/** SEO 하려면 백으로 HTML 설정해줘야 겠지 */
export function getServerSideProps({params:{params}}) { //URL 정보를 백으로 받아냄
  return {
    props: {
      params,
    },
  };
}