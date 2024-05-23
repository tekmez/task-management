import { useForm } from "@mantine/form";
import { TextInput, Button, Textarea } from "@mantine/core";
import { zodResolver } from "mantine-form-zod-resolver";
import schema from "../form-schema/taskSchema";
import { v4 as uuid } from "uuid";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addTask } from "../redux/reducers/taskReducer";
import { RootState } from "../redux/store";
const TaskForm = ({ closeDrawer }: { closeDrawer: () => void }) => {
  const tasks = useAppSelector((state: RootState) => state.tasks.tasks);
  const uniqId = uuid().slice(0, 8);
  const dispatch = useAppDispatch();
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { title: "", description: "" },
    validate: zodResolver(schema),
  });

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        const task = { id: uniqId, status: "waiting", ...values };
        const existingTask = tasks.find((task) => task.title === values.title);
        if (existingTask) {
          return form.setErrors({
            title: "Task with this title already exists",
          });
        }
        dispatch(addTask(task));
        form.reset();
        closeDrawer();
      })}
    >
      <TextInput
        label="Title"
        placeholder="Title"
        key={form.key("title")}
        {...form.getInputProps("title")}
      />
      <Textarea
        mt="sm"
        label="Description"
        placeholder="Description"
        key={form.key("description")}
        {...form.getInputProps("description")}
      />
      <Button fullWidth variant="light" color="green" type="submit" mt="sm">
        Create
      </Button>
    </form>
  );
};
export default TaskForm;
