/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY; //env 파일을 만들고 분리 가능

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects(){
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false, //이 리다이렉션의 영구 여부에 따라 브라우저, 검색엔진이 이 정보를 기억하는지 여부가 결정됨
      },
      { 
        //ID값만 가져올 때
        source: "/old-blog/:path",
        destination: "/new-sexy-blog/:path",
        permanent: false,
      },
      {
        //뒤 내용도 추가로 다 가져올 때
        source: "/old-string/:path*",
        destination: "/new-string/:path*",
        permanent: false,
      }
    ]
  },
  async rewrites() { //개발자 툴 NETWORK API 출처 숨김 및 JSON URL 처리 가능
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
    ]
  }
}

module.exports = nextConfig
