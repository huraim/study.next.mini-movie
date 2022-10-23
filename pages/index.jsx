import { useEffect, useState } from "react";
import Link from "next/link.js";
import Seo from "../components/seo.jsx";
import { useRouter } from "next/router.js";

export default function Index({ results }) {
  const router = useRouter();
  console.log(results);
  const movieClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  }
  // const [movies, setMovies] = useState(); //CSR 방식
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(`/api/movies`);
  //     const { results } = await response.json();
  //     setMovies(results);
  //   })();
  // },[])
  return (
    <div className="container">
      <Seo title="Index" />
      
      {/* {!movies && <h4>Loading...</h4>}
      {movies?.map(movie => ( */}
      {!results && <h4>Loading...</h4>}
      {results?.map(movie => (
        <div onClick={() => movieClick(movie.id, movie.title)} className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <Link href={`/movies/${movie.title}/${movie.id}`}>
            <h4>{movie.original_title}</h4>
          </Link>
        </div>
      ))}

      <style jsx>{/*css*/`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

/** 
 * SSR 방식은 html을 로딩없이 엄청 빠르게 보여주지만, API 응답이 느리면 사용자들은 화면이 하나도 보이지 않음. 그러므로 때에 따라 선택이 필요함
 * 사용자가 JS사용을 안해도 HTML을 그대로 노출시켜버림 React 노출이 아님
 * HTML 그대로 노출로 인해 SEO 검색엔진에 최상으로 잡힘
 * 즉 로딩을 유저에게 보이게 하고싶으면 위 주석처리 CSR 방식 선택*/
export async function getServerSideProps() { //SSR 방식 얘는 함수명 변경 불가능 Back 서버에서만 실행
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json(); //백엔드라서 URL 형태로 적어줘야한다.
  return {
    props: {
      results,
    }
  }
}