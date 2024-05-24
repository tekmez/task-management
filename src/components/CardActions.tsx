import { ActionIcon, Tooltip, useMantineTheme } from "@mantine/core";
import { Ban, Check, FilePenLine, Trash2 } from "lucide-react";
import { useAppDispatch } from "../redux/hooks";
import { openModal } from "../redux/reducers/actionModalReducer";
import { ActionTypeAll, Task } from "../types/taskTypes";
import { openOverViewModal } from "../redux/reducers/overViewModalReducer";

const CardActions = ({ type, task }: { type: string; task: Task }) => {
  const theme = useMantineTheme();
  const dispatch = useAppDispatch();
  const handleActionClick = (actionType: ActionTypeAll) => {
    switch (actionType) {
      case "delete":
        dispatch(openModal({ isOpen: true, actionType: "delete", task }));
        break;
      case "complete":
        dispatch(openModal({ isOpen: true, actionType: "complete", task }));
        break;
      case "cancel":
        dispatch(openModal({ isOpen: true, actionType: "cancel", task }));
        break;
      case "edit":
        dispatch(openOverViewModal({ isOpen: true, task }));
        break;
      default:
        return;
    }
  };
  const actionElements = [
    {
      icon: Check,
      color: theme.colors.green[6],
      tooltip: "complete",
      tooltipColor: "green",
      hideFor: ["completed", "canceled"],
      onclick: () => handleActionClick("complete"),
    },
    {
      icon: Ban,
      color: theme.colors.indigo[6],
      tooltip: "cancel",
      tooltipColor: "indigo",
      hideFor: ["canceled", "completed"],
      onclick: () => handleActionClick("cancel"),
    },
    {
      icon: Trash2,
      color: theme.colors.red[6],
      tooltip: "delete",
      tooltipColor: "red",
      hideFor: [],
      onclick: () => handleActionClick("delete"),
    },
    {
      icon: FilePenLine,
      color: theme.colors.gray[6],
      tooltip: "overview & edit",
      tooltipColor: "gray",
      hideFor: ["completed", "canceled"],
      onclick: () => handleActionClick("edit"),
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
