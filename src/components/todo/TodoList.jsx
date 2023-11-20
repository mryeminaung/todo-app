import { useEffect, useReducer, useState } from "react";
import { useTodoContext } from "../../contexts/TodoContext";
import TodoItem from "./TodoItem";
import FilterTodo from "../tasks/FilterTodo";

const TodoList = () => {
	const { todoList, searchQuery, doneCount, filteredTasks, setFilteredTasks } =
		useTodoContext();
	const [filterBy, setFilterBy] = useState(localStorage.getItem("filterBy") || "all");

	useEffect(() => {
		if (filterBy === "all") {
			setFilteredTasks(todoList);
		} else if (filterBy === "active") {
			const activeTasks = todoList.filter((task) => !task.done);
			setFilteredTasks(activeTasks);
		} else if (filterBy === "completed") {
			const completedTasks = todoList.filter((task) => task.done);
			setFilteredTasks(completedTasks);
		}
		localStorage.setItem("filterBy", filterBy);
	}, [filterBy, todoList]);

	// this function is used to search tasks based on search query
	const searchedTasks = todoList.filter((task) =>
		task.name.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<div className="mt-3 space-y-3">
			<div className="flex items-center justify-between border-y border-[#61DAFB] pr-3">
				<h2 className="text-xl md:text-2xl font-bold py-2 capitalize">
					{filterBy} Tasks
				</h2>

				{/* display the number of done tasks */}
				{todoList.length > 0 && (
					<span className="text-lg font-semibold">
						Done {doneCount} of {todoList.length}
					</span>
				)}
			</div>

			<FilterTodo filterBy={filterBy} setFilterBy={setFilterBy} />

			{/*
			if search query, show filtered tasks. if not , show todo lists
			*/}
			<ul className="w-full space-y-3 mt-3 overflow-y-auto p-3 rounded-md">
				{searchQuery ? (
					searchedTasks.length > 0 ? (
						searchedTasks.map((task) => <TodoItem key={task.id} task={task} />)
					) : (
						<h2 className="empty-text">No matching tasks</h2>
					)
				) : filterBy ? (
					filteredTasks.length > 0 ? (
						filteredTasks.map((task) => <TodoItem key={task.id} task={task} />)
					) : (
						<h2 className="empty-text">No tasks to show</h2>
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
