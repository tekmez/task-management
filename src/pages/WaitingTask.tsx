import PageTemplate from "../components/PageTemplate";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
const WaitingTask = () => {
  const tasks = useAppSelector((state: RootState) => state.tasks.tasks);
  const canceledTask = tasks.filter((task) => task.status === "waiting");
  return <PageTemplate tasks={canceledTask} />;
};

export default WaitingTask;
