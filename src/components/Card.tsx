import { Badge, Card, Group, ScrollArea, Title } from "@mantine/core";
import CardActions from "./CardActions";
import "../styles/card.css";
import { Task } from "../types/taskTypes";

const TaskCard = ({ task }: { task: Task }) => {
  const badgeProps = {
    waiting: { color: "orange", label: "waiting" },
    completed: { color: "green", label: "completed" },
    canceled: { color: "red", label: "canceled" },
  }[task.status];

  return (
    <Card className="card" withBorder padding="sm" radius="md" shadow="sm">
      <Title order={3}>{task.title}</Title>
      <ScrollArea
        h={100}
        offsetScrollbars
        scrollbarSize={8}
        scrollHideDelay={1000}
      >
        {task.description}
      </ScrollArea>
      <Card.Section className="card-footer">
        <Group justify="space-between">
          <Badge w="fit-content" variant="light" color={badgeProps.color}>
            {badgeProps.label}
          </Badge>
          <Group gap={0}>
            <CardActions type={task.status} task={task} />
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default TaskCard;
