import MyDrawer from "./Drawer";
import NavMenu from "./NavMenu";

const Menu = ({ closeNavMenu }: { closeNavMenu: () => void }) => {
  return (
    <>
      <NavMenu closeNavMenu={closeNavMenu} />
      <MyDrawer />
    </>
  );
};

export default Menu;
