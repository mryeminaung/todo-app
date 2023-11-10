import { useTodoContext } from "../../contexts/TodoContext";

const TodoItem = ({ task }) => {
	const { dispatch } = useTodoContext();

	return (
		<li className="border border-[#61DAFB] p-2 rounded-md flex items-center justify-between">
			<label htmlFor={task.id}>{task.name}</label>
			<button
				className="text-red-500 px-2 text-xl"
				onClick={() => {
					dispatch({ type: "deleteTask", payload: task.id });
				}}
			>
				&times;
			</button>
		</li>
	);
};

export default TodoItem;
