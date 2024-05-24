import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import PageTemplate from "../components/PageTemplate";
const AllTask = () => {
  const tasks = useAppSelector((state: RootState) => state.tasks.tasks);
  return <PageTemplate tasks={tasks} />;
};

export default AllTask;
