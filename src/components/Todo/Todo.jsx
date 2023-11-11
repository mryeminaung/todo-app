import { useThemeContext } from "../../contexts/ThemeContext";
import AddTodo from "./AddTodo";
import ResetTodo from "./ResetTodo";
import SearchTodo from "./SearchTodo";
import TodoList from "./TodoList";
import { FaMoon, FaSun } from "react-icons/fa6";

const Todo = () => {
	const { mode, setMode, themeState } = useThemeContext();
	const theme = mode === "light" ? themeState.light : themeState.dark;

	return (
		<div
			className="h-screen w-full"
			style={{ backgroundColor: theme.body, color: theme.text }}
		>
			<section className="container mx-auto py-10 h-full flex flex-col items-center justify-start">
				<div
					className="w-[700px] p-6 py-8 rounded-lg border shadow-sm shadow-[#61dafb80] border-[#61dafb]"
					style={{ backgroundColor: theme.bg }}
				>
					<div className="flex items-center justify-between mb-5">
						<h1 className="font-bold text-3xl text-center">Todo App</h1>
						<div className="theme-toggler">
							<input
								type="checkbox"
								className="checkbox"
								id="checkbox"
								checked={mode === "dark"}
								onChange={() => {
									setMode((preMode) => (preMode === "light" ? "dark" : "light"));
								}}
							/>
							<label htmlFor="checkbox" className="checkbox-label">
								<FaMoon className="text-black" />
								<FaSun className="text-white" />
								<span className="ball"></span>
							</label>
						</div>
					</div>
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
