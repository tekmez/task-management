import { Grid } from "@mantine/core";
import TaskCard from "../components/Card";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
interface Task {
  id: number;
  title: string;
  description: string;
  status: "waiting" | "completed" | "canceled";
}
const AllTask = () => {
  const tasks: Task[] = [
    {
      id: 1,
      title: "Task 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris augue, bibendum ut magna non, hendrerit suscipit massa. Nulla orci enim, auctor vel est eget, dapibus accumsan eros. Praesent non elementum mi. Phasellus lorem eros, rutrum pellentesque fringilla ac, feugiat eu orci. Praesent fermentum purus diam, at posuere orci varius ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis aliquam nisl. Suspendisse a vestibulum lectus. Vestibulum ut elit id eros maximus mattis at ut est. Curabitur dignissim nibh et luctus efficitur. Praesent nec mi nec mauris mollis imperdiet.",
      status: "waiting",
    },
    {
      id: 2,
      title: "Task 2",
      description: "This is task 2",
      status: "completed",
    },
    {
      id: 3,
      title: "Task 3",
      description: "This is task 3",
      status: "canceled",
    },
    {
      id: 4,
      title: "Task 4",
      description: "This is task 4",
      status: "waiting",
    },
    {
      id: 5,
      title: "Task 5",
      description: "This is task 5",
      status: "completed",
    },
    {
      id: 6,
      title: "Task 6",
      description: "This is task 6",
      status: "canceled",
    },
    {
      id: 7,
      title: "Task 7",
      description: "This is task 7",
      status: "waiting",
    },
  ];
  const taskes = useAppSelector((state: RootState) => state.tasks.tasks);
  console.log(taskes);
  return (
    <div>
      <Grid grow gutter="sm">
        {tasks.map((task, i) => (
          <Grid.Col key={i} span={{ base: 12, md: 6, lg: 3 }}>
            <TaskCard
              key={task.id}
              type={task.status}
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
