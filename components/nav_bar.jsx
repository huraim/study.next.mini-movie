import { useRouter } from "next/router"
import Link from "next/link"
import styles from "../styles/components/nav_bar.module.css"

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className={styles.nav_wrapper}>
      <img src="/vercel.svg" alt="vercel" />
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? styles.active : ""}>Index</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? styles.active : ""}>About</a>
        </Link>
      </div>
    </nav>
  )
}
