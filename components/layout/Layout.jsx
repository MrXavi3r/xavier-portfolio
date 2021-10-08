import Nav from "../nav/Nav";
import { Menu } from "../menu/Menu";
import Meta from "../../components/Meta";
import { useState } from "react";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Meta />
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div>{children}</div>
    </>
  );
};

export default Layout;
