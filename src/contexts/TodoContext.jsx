import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// retrieve todo list from localstorage. if not, return []
const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

const reducer = (state, action) => {
	switch (action.type) {
		case "addTask":
			return [...state, { id: uuidv4(), name: action.payload, done: false }];

		case "deleteTask":
			return state.filter((task) => task.id !== action.payload);

		case "doneTask":
			return state.map((task) => {
				return task.id === action.id ? { ...task, done: action.checked } : task;
			});

		case "updateTask":
			return state.map((task) => {
				return task.id === action.updateId ? { ...task, name: action.updateTask } : task;
			});

		case "updateStatus":
			return state.map((task) => {
				return task.id === action.StatusId ? { ...task, done: action.status } : task;
			});

		case "clearDoneTasks":
			return state.filter((task) => !task.done);

		case "clearTasks":
			return [];

		default:
			return state;
	}
};

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
	const [todoList, dispatch] = useReducer(reducer, initialState);
	const [task, setTask] = useState("");
	const [searchQuery, setSearchQuery] = useState("");
	const [doneCount, setDoneCount] = useState(0);
	const [filteredTasks, setFilteredTasks] = useState([]);
	const [status, setStatus] = useState("");

	// store todo list using localstorage
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(todoList));
		const countDoneTasks = todoList.filter((task) => task.done).length;
		setDoneCount(countDoneTasks);
	}, [todoList]);

	return (
		<TodoContext.Provider
			value={{
				todoList,
				dispatch,
				task,
				setTask,
				searchQuery,
				setSearchQuery,
				doneCount,
				setDoneCount,
				filteredTasks,
				setFilteredTasks,
				status,
				setStatus,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

export const useTodoContext = () => {
	return useContext(TodoContext);
};

export default TodoContext;
