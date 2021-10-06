import Nav from "../nav/Nav";
import Meta from "../../components/Meta";
import { useState } from "react";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Meta />
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div>{children}</div>
    </>
  );
};

export default Layout;
