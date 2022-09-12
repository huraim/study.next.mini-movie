import NavBar from "./NavBar";

export default function Layout({children}) {
  return (
    <>
      <NavBar />
      <div className="wrapper">{children}</div>
    </>
  )
}
