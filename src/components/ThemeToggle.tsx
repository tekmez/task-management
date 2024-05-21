import {
  useMantineColorScheme,
  useComputedColorScheme,
  Switch,
} from "@mantine/core";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const sunIcon = <Sun color="yellow" />;

  const moonIcon = <Moon />;
  return (
    <Switch
      onChange={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      size="lg"
      color="dark.4"
      onLabel={sunIcon}
      offLabel={moonIcon}
    />
  );
};

export default ThemeToggle;
