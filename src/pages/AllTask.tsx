import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import PageTemplate from "../components/PageTemplate";
import { Chip, Group } from "@mantine/core";
import { useState } from "react";
const AllTask = () => {
  const [value, setValue] = useState<string[]>(["react"]);
  const tasks = useAppSelector((state: RootState) => state.tasks.tasks);
  const filteredTasks = tasks.filter((task) => value.includes(task.status));
  return (
    <>
      <Chip.Group multiple value={value} onChange={setValue}>
        <Group justify="center" mb={12}>
          <Chip color="green" value="waiting">
            Waiting
          </Chip>
          <Chip color="green" value="completed">
            Completed
          </Chip>
          <Chip color="green" value="canceled">
            Canceled
          </Chip>
        </Group>
      </Chip.Group>
      <PageTemplate tasks={filteredTasks.length > 0 ? filteredTasks : tasks} />
    </>
  );
};

export default AllTask;
