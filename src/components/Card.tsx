import { Badge, Card, Group, ScrollArea, Title } from "@mantine/core";
import CardActions from "./CardActions";
import "../styles/card.css";

interface TaskCardProps {
  type: "waiting" | "completed" | "canceled";
  title: string;
  description: string;
  open: () => void;
}

const TaskCard = ({ type, title, description, open }: TaskCardProps) => {
  const badgeProps = {
    waiting: { color: "orange", label: "waiting" },
    completed: { color: "green", label: "completed" },
    canceled: { color: "red", label: "canceled" },
  }[type];

  return (
    <Card className="card" withBorder padding="sm" radius="md" shadow="sm">
      <Title order={3}>{title}</Title>
      <ScrollArea
        h={100}
        offsetScrollbars
        scrollbarSize={8}
        scrollHideDelay={1000}
      >
        {description}
      </ScrollArea>
      <Card.Section className="card-footer">
        <Group justify="space-between">
          <Badge w="fit-content" variant="light" color={badgeProps.color}>
            {badgeProps.label}
          </Badge>
          <Group gap={0}>
            <CardActions open={open} type={type} />
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default TaskCard;
