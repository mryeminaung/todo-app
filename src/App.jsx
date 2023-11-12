import { ThemeContextProvider } from "./contexts/ThemeContext";
import { TodoContextProvider } from "./contexts/TodoContext";
import Todo from "./components/todo/Todo";

const App = () => {
	return (
		<ThemeContextProvider>
			<TodoContextProvider>
				<Todo />
			</TodoContextProvider>
		</ThemeContextProvider>
	);
};

export default App;
