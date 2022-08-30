interface Todo {
  text: string;
  complete: boolean;
}

type ToggleComplete = (selectedTodo: Todo) => void;
type AddTodo = (newTodo: string) => void;
type RemoveTodo = (todoToRemove: Todo) => void;

type Option = {
  value: string;
  onClick: () => void;
  color?: string;
};
