import { TodoContextProvider } from "./contexts/TodoContext";
import Todo from "./components/Todo/Todo";

const App = () => {
	return (
		<TodoContextProvider>
			<Todo />
		</TodoContextProvider>
	);
};

export default App;
