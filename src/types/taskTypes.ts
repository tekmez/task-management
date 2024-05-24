type status = "waiting" | "completed" | "canceled";
export type ActionType = "delete" | "complete" | "cancel";
export interface Task {
  id: string;
  title: string;
  description: string;
  status: status;
}

export interface TaskCardProps {
  type: status;
  title: string;
  description: string;
}
export interface AddTaskProps {
  title: string;
  description: string;
}
export interface ModalState {
  isOpen: boolean;
  actionType: ActionType;
  task: Task;
}
