import { Box, NavLink } from "@mantine/core";
import { Ban, CheckCheck, ClipboardList, Hourglass } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const data = [
  {
    icon: ClipboardList,
    label: "All Tasks",
    href: "all-tasks",
  },
  {
    icon: Hourglass,
    label: "Waiting Tasks",
    href: "waiting-tasks",
  },
  { icon: CheckCheck, label: "Completed Tasks", href: "completed-tasks" },
  { icon: Ban, label: "Canceled Tasks", href: "canceled-tasks" },
];
const NavMenu = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      leftSection={<item.icon size="1.3rem" />}
      onClick={() => {
        navigate(item.href);
        setActive(index);
      }}
      color="indigo"
      styles={{
        root: {
          borderRadius: 10,
          fontSize: "var(--mantine-font-size-xl)",
        },
        label: {
          fontSize: "var(--mantine-font-size-md)",
        },
        body: {
          padding: "10px 20px",
        },
      }}
    />
  ));

  return <Box w="100%">{items}</Box>;
};

export default NavMenu;
