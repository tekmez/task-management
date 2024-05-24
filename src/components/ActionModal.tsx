import { Alert, Button, Flex, Modal } from "@mantine/core";
import { CircleAlert } from "lucide-react";

const ActionModal = ({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      withCloseButton={false}
      centered
      padding={0}
    >
      <Alert
        variant="light"
        color="red"
        title="Delete Task"
        icon={<CircleAlert />}
      >
        <Flex direction={"column"}>
          <p>Are you sure you want to delete this task?</p>
          <Flex justify={"end"} gap={8}>
            <Button onClick={close} color="gray">
              Cancel
            </Button>
            <Button onClick={close} color="red">
              Delete
            </Button>
          </Flex>
        </Flex>
      </Alert>
    </Modal>
  );
};

export default ActionModal;
