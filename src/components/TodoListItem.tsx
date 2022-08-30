import { FC, useState } from "react";
import { Dropdown } from "./Dropdown";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
}

export const TodoListItem: FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  onRemoveTodo,
}) => {
  const [isEditOn, setIsEditOn] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(todo.text);

  const onDelete = () => {
    onRemoveTodo(todo);
  };

  const onEdit = () => {
    setIsEditOn(!isEditOn);
  };

  const onTodoUpdate = (e: any) => {
    let newText = e.target;
    setInputText(newText.value);
    todo.text = e.target.value;
  };

  const dropdownOptions: Array<Option> = [
    {
      value: "Delete",
      onClick: onDelete,
      color: "red",
    },
    {
      value: "Edit",
      onClick: onEdit,
      color: "blue",
    },
  ];
  return (
    <li className={todo.complete ? "todo-row completed" : "todo-row"}>
      <label>
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
        {isEditOn ? (
          <input
            className="edit-input"
            type="text"
            value={inputText}
            onChange={(e) => onTodoUpdate(e)}
          />
        ) : (
          todo.text
        )}
      </label>
      <Dropdown isEditOn={isEditOn} options={dropdownOptions} />
    </li>
  );
};
