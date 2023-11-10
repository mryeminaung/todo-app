import { useTodoContext } from "../../contexts/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
	const { todoList, searchQuery } = useTodoContext();

	// this function is used to filter tasks based on search query
	const filteredTasks = todoList.filter((task) =>
		task.name.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<div className="mt-3 space-y-3">
			<div className="flex items-center justify-between border-y border-[#61DAFB]">
				<h2 className="text-2xl font-bold py-2">Tasks</h2>
			</div>

			{/* 
			if search query, show filtered tasks. if not , show todo lists
			*/}
			<ul className="w-full space-y-3 mt-3">
				{searchQuery ? (
					filteredTasks.length > 0 ? (
						filteredTasks.map((task) => <TodoItem key={task.id} task={task} />)
					) : (
						<h2 className="empty-text">No matching tasks</h2>
					)
				) : todoList.length > 0 ? (
					todoList.map((task) => <TodoItem key={task.id} task={task} />)
				) : (
					<h2 className="empty-text">No tasks to show</h2>
				)}
			</ul>
		</div>
	);
};

export default TodoList;
