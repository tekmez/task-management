import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Button, Drawer } from "@mantine/core";
import TaskForm from "./TaskForm";

const MyDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const matches = useMediaQuery("(min-width: 56.25em)");
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Create Task"
        transitionProps={{
          transition: "slide-left",
          duration: 150,
          timingFunction: "linear",
        }}
        position={matches ? "right" : "bottom"}
        radius={10}
      >
        <TaskForm closeDrawer={close} />
      </Drawer>

      <Button mt={6} fullWidth variant="light" color="indigo" onClick={open}>
        Create Task
      </Button>
    </>
  );
};
export default MyDrawer;
