import { Grid } from "@mantine/core";
import TaskCard from "../components/Card";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import ActionModal from "../components/ActionModal";
import OverviewModal from "../components/OverviewModal";
const AllTask = () => {
  const tasks = useAppSelector((state: RootState) => state.tasks.tasks);
  return (
    <div>
      <Grid grow gutter="sm">
        {tasks?.map((task, i) => (
          <Grid.Col key={i} span={{ base: 12, md: 6, lg: 3 }}>
            <TaskCard key={task.id} task={task} />
          </Grid.Col>
        ))}
      </Grid>
      <ActionModal />
      <OverviewModal />
    </div>
  );
};

export default AllTask;
