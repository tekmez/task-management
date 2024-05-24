import { ActionIcon, Tooltip, useMantineTheme } from "@mantine/core";
import { Ban, Check, FilePenLine, Trash2 } from "lucide-react";

const CardActions = ({ type, open }: { type: string; open: () => void }) => {
  const theme = useMantineTheme();
  const actionElements = [
    {
      icon: Check,
      color: theme.colors.green[6],
      tooltip: "complete",
      tooltipColor: "green",
      hideFor: ["completed", "canceled"],
      onclick: () => open(),
    },
    {
      icon: Ban,
      color: theme.colors.indigo[6],
      tooltip: "cancel",
      tooltipColor: "indigo",
      hideFor: ["canceled", "completed"],
      onclick: () => console.log("canceled"),
    },
    {
      icon: Trash2,
      color: theme.colors.red[6],
      tooltip: "delete",
      tooltipColor: "red",
      hideFor: [],
      onclick: () => open(),
    },
    {
      icon: FilePenLine,
      color: theme.colors.gray[6],
      tooltip: "edit",
      tooltipColor: "gray",
      hideFor: ["completed", "canceled"],
      onclick: () => console.log("edited"),
    },
  ];
  const filteredActions = actionElements.filter(
    (element) => !element.hideFor.includes(type)
  );
  return filteredActions.map((element, i) => (
    <Tooltip
      key={i}
      label={element.tooltip}
      color={element.tooltipColor}
      position="bottom"
    >
      <ActionIcon onClick={element.onclick} variant="subtle" color="gray">
        <element.icon color={element.color} />
      </ActionIcon>
    </Tooltip>
  ));
};

export default CardActions;
