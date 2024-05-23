import { Grid } from "@mantine/core";
import TaskCard from "../components/Card";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
const AllTask = () => {
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
            />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default AllTask;
