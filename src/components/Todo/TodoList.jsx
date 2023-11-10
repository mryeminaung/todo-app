import { useTodoContext } from "../../contexts/TodoContext";

const TodoList = () => {
	const { todoList, dispatch } = useTodoContext();

	// to display all the tasks : todo list
	const displayTasks = (task) => {
		return (
			<li
				key={task.id}
				className="border border-[#61DAFB] p-2 rounded-md flex items-center justify-between transition-all"
			>
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

	return (
		<>
			{todoList.length > 0 ? (
				<ul className="space-y-2 max-h-[600px] overflow-y-auto">{todoList.map((task) => displayTasks(task))}</ul>
			) : (
				<h2 className="font-bold text-3xl text-center bg-gray-300 rounded-lg py-3 text-black border border-[#61DAFB]">
					No tasks to show
				</h2>
			)}
		</>
	);
};

export default TodoList;
