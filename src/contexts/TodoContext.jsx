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

		default:
			return state;
	}
};

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
	const [todoList, dispatch] = useReducer(reducer, initialState);
	const [task, setTask] = useState("");

	// store todo list using localstorage
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(todoList));
	}, [todoList]);

	return (
		<TodoContext.Provider value={{ todoList, dispatch, task, setTask }}>
			{children}
		</TodoContext.Provider>
	);
};

export const useTodoContext = () => {
	return useContext(TodoContext);
};

export default TodoContext;
