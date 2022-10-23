import Layout from "../components/layout.jsx";
import "../styles/globals.css";

export default function MyApp({Component, pageProps}) {
  console.log(pageProps, 'ㅋㅋㅋ'); //이놈이 각 페이지의 getServerSideProps(SSR)을 가져와 주는것임
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
