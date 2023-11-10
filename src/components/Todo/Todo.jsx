import AddTodo from "./AddTodo";
import ResetTodo from "./ResetTodo";
import SearchTodo from "./SearchTodo";
import TodoList from "./TodoList";

const Todo = () => {
	return (
		<section className="container mx-auto h-full flex flex-col items-center justify-start">
			<div className="w-[700px] mt-16 p-6 py-8 rounded-lg border shadow-sm shadow-[#61dafb80] border-[#61dafb]">
				<h1 className="font-bold text-3xl text-center mb-3">Todo App</h1>

				<AddTodo />
				<SearchTodo />
				<ResetTodo />
				<TodoList />
				
			</div>
		</section>
	);
};

export default Todo;
