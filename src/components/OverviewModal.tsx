import { Modal, TextInput, Button, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import schema from "../form-schema/taskSchema";
import { AddTaskProps } from "../types/taskTypes";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { closeOverViewModal } from "../redux/reducers/overViewModalReducer";
import { useEffect } from "react";
import { updateTask } from "../redux/reducers/taskReducer";

const OverviewModal = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state: RootState) => state.tasks.tasks);
  const { isOpen, task } = useAppSelector((state) => state.overViewModal);
  const close = () => dispatch(closeOverViewModal());
  const form = useForm({
    initialValues: { title: "", description: "" },
    validate: zodResolver(schema),
  });

  useEffect(() => {
    form.setValues(task);
  }, [task]);

  return (
    <Modal
      opened={isOpen}
      onClose={close}
      withCloseButton
      centered
      size={"xl"}
      padding={"md"}
      title={"Overview Task"}
    >
      <form
        onSubmit={form.onSubmit((values: AddTaskProps) => {
          const updatedTask = { ...task, ...values };
          const existingTask = tasks.find(
            (task) => task.title === values.title
          );
          if (existingTask) {
            return form.setErrors({
              title: "Task with this title already exists",
            });
          }
          dispatch(updateTask(updatedTask));
          dispatch(closeOverViewModal());
          form.reset();
        })}
      >
        <TextInput
          label="Title"
          placeholder="Title"
          key={form.key("title")}
          defaultValue={task.title}
          {...form.getInputProps("title")}
        />
        <Textarea
          mt="sm"
          label="Description"
          placeholder="Description"
          key={form.key("description")}
          defaultValue={task.description}
          minRows={8}
          maxRows={12}
          autosize
          {...form.getInputProps("description")}
        />
        <Button fullWidth variant="light" color="green" type="submit" mt="sm">
          Update
        </Button>
      </form>
    </Modal>
  );
};

export default OverviewModal;
