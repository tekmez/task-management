import { Grid } from "@mantine/core";
import TaskCard from "../components/Card";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import ActionModal from "../components/ActionModal";
import { useDisclosure } from "@mantine/hooks";
const AllTask = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const tasks = useAppSelector((state: RootState) => state.tasks.tasks);
  console.log(tasks);
  return (
    <div>
      <Grid grow gutter="sm">
        {tasks?.map((task, i) => (
          <Grid.Col key={i} span={{ base: 12, md: 6, lg: 3 }}>
            <TaskCard
              key={task.id}
              type={task.status as "waiting" | "completed" | "canceled"}
              title={task.title}
              description={task.description}
              open={open}
            />
          </Grid.Col>
        ))}
      </Grid>
      <ActionModal opened={opened} close={close} />
    </div>
  );
};

export default AllTask;
