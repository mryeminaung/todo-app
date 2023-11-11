import { TodoContextProvider } from "./contexts/TodoContext";
import Todo from "./components/Todo/Todo";
import { ThemeContextProvider } from "./contexts/ThemeContext";

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
