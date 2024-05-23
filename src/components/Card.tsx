import {
  ActionIcon,
  Badge,
  Card,
  Group,
  ScrollArea,
  Title,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import "../styles/card.css";
import { Ban, Check, FilePenLine, Trash2 } from "lucide-react";

interface TaskCardProps {
  type: "waiting" | "completed" | "canceled";
  title: string;
  description: string;
}

const TaskCard = ({ type, title, description }: TaskCardProps) => {
  const theme = useMantineTheme();
  const actionElements = [
    {
      icon: Check,
      color: theme.colors.green[6],
      tooltip: "complete",
      tooltipColor: "green",
      hideFor: ["completed", "canceled"],
    },
    {
      icon: Ban,
      color: theme.colors.indigo[6],
      tooltip: "cancel",
      tooltipColor: "indigo",
      hideFor: ["canceled", "completed"],
    },
    {
      icon: Trash2,
      color: theme.colors.red[6],
      tooltip: "delete",
      tooltipColor: "red",
      hideFor: [],
    },
    {
      icon: FilePenLine,
      color: theme.colors.gray[6],
      tooltip: "edit",
      tooltipColor: "gray",
      hideFor: ["completed", "canceled"],
    },
  ];

  const filteredActions = actionElements.filter(
    (element) => !element.hideFor.includes(type)
  );

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
            {filteredActions.map((element, i) => (
              <Tooltip
                key={i}
                label={element.tooltip}
                color={element.tooltipColor}
                position="bottom"
              >
                <ActionIcon variant="subtle" color="gray">
                  <element.icon color={element.color} />
                </ActionIcon>
              </Tooltip>
            ))}
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default TaskCard;
