import { useRouter } from "next/router"

export default function Detail() {
  const router = useRouter();
  console.log(router);
  return (
    <div>detail {router.query.movie_id}</div>
  )
}
