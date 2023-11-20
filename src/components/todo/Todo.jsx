import { useThemeContext } from "../../contexts/ThemeContext";
import AddTodo from "../tasks/AddTodo";
import ResetTodo from "../tasks/ResetTodo";
import SearchTodo from "../tasks/SearchTodo";
import ThemeToggler from "./ThemeToggler";
import TodoList from "./TodoList";

const Todo = () => {
	const { mode, themeState } = useThemeContext();
	const theme = mode === "light" ? themeState.light : themeState.dark;

	return (
		<div
			className={`h-full min-h-screen w-full`}
			style={{ backgroundColor: theme.body, color: theme.text }}
		>
			<section className="container mx-auto h-full flex flex-col items-center justify-start">
				<div
					className="my-10 w-[90%] md:w-[700px] p-6 py-8 rounded-lg border shadow-sm shadow-[#61dafb80] border-[#61dafb]"
					style={{ backgroundColor: theme.bg }}
				>
					<ThemeToggler />
					<AddTodo />
					<SearchTodo />
					<ResetTodo />
					<TodoList />
				</div>
			</section>
		</div>
	);
};

export default Todo;
