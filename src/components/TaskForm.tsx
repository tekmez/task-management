import { useForm } from "@mantine/form";
import { TextInput, Button, Textarea } from "@mantine/core";
import { zodResolver } from "mantine-form-zod-resolver";
import schema from "../form-schema/taskSchema";

const TaskForm = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { title: "", description: "" },
    validate: zodResolver(schema),
  });

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        console.log(values);
        form.reset();
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
