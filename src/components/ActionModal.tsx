import { Alert, Button, Flex, Modal } from "@mantine/core";
import { CircleAlert } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { closeModal } from "../redux/reducers/actionModalReducer";
import {
  cancelTask,
  completeTask,
  deleteTask,
} from "../redux/reducers/taskReducer";

const ActionModal = () => {
  const { isOpen, task, actionType } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const close = () => dispatch(closeModal());

  const handleAction = () => {
    switch (actionType) {
      case "delete":
        dispatch(deleteTask(task.id));
        break;
      case "complete":
        dispatch(completeTask(task.id));
        break;
      case "cancel":
        dispatch(cancelTask(task.id));
        break;
      default:
        return;
    }

    close();
  };

  const actionProps = {
    delete: { color: "red", label: "Delete", title: "Delete Task" },
    complete: { color: "green", label: "Complete", title: "Complete Task" },
    cancel: { color: "indigo", label: "Cancel", title: "Cancel Task" },
  }[actionType];

  return (
    <Modal
      opened={isOpen}
      onClose={close}
      withCloseButton={false}
      centered
      padding={0}
    >
      <Alert
        variant="light"
        color={actionProps.color}
        title={actionProps.title}
        icon={<CircleAlert />}
      >
        <Flex direction={"column"}>
          <p>
            {`Are you sure you want to ${actionProps.title.toLowerCase()} the task " ${
              task.title
            } " ?`}
          </p>
          <Flex justify={"end"} gap={8}>
            <Button onClick={close} color="gray">
              Close
            </Button>
            <Button onClick={handleAction} color={actionProps.color}>
              {actionProps.label}
            </Button>
          </Flex>
        </Flex>
      </Alert>
    </Modal>
  );
};

export default ActionModal;
