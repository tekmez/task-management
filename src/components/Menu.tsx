import { Button } from "@mantine/core";
import NavMenu from "./NavMenu";

const Menu = () => {
  return (
    <>
      <NavMenu />
      <Button fullWidth variant="light" color="indigo">
        Create task
      </Button>
    </>
  );
};

export default Menu;
