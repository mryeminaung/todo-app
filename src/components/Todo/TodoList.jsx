import { useTodoContext } from "../../contexts/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
	const { todoList, searchQuery, doneCount } = useTodoContext();

	// this function is used to filter tasks based on search query
	const filteredTasks = todoList.filter((task) =>
		task.name.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<div className={`mt-3 space-y-3 ${todoList.length >= 10 && "h-[500px]"} overflow-y-auto`}>
			<div className="flex items-center justify-between border-y border-[#61DAFB]">
				<h2 className="text-2xl font-bold py-2">Tasks</h2>

				{/* display the number of done tasks */}
				{todoList.length > 0 && (
					<span className="text-xl">
						Done {doneCount} of {todoList.length}
					</span>
				)}
			</div>

			{/*
			if search query, show filtered tasks. if not , show todo lists
			*/}
			<ul className="w-full space-y-3 mt-3 overflow-y-auto">
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
