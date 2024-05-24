import { Grid } from "@mantine/core";
import TaskCard from "./Card";
import ActionModal from "./ActionModal";
import OverviewModal from "./OverviewModal";
import { Task } from "../types/taskTypes";

const PageTemplate = ({ tasks }: { tasks: Task[] }) => {
  return (
    <>
      <Grid grow gutter="sm">
        {tasks?.map((task, i) => (
          <Grid.Col key={i} span={{ base: 12, md: 6, lg: 3 }}>
            <TaskCard key={task.id} task={task} />
          </Grid.Col>
        ))}
      </Grid>
      <ActionModal />
      <OverviewModal />
    </>
  );
};

export default PageTemplate;
