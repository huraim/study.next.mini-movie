import NavBar from "./nav_bar.jsx";

export default function Layout({children}) {
  return (
    <>
      <NavBar />
      <div className="wrapper">{children}</div>
    </>
  )
}
