import "@mantine/core/styles.css";
import { ScrollArea, Title } from "@mantine/core";
import ThemeToggle from "./components/ThemeToggle";
import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
export default function App() {
  const [opened, { close, toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: { base: 200, md: 300, lg: 400 },
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Title>Task Manager</Title>
          <ThemeToggle />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md" component={ScrollArea}>
        <Menu closeNavMenu={close} />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
