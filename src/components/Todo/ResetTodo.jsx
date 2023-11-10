import { useTodoContext } from "../../contexts/TodoContext";

const ResetTodo = () => {
	const { dispatch } = useTodoContext();

	return (
		<>
			{/* clear all tasks from todo list */}
			<button
				className="border border-[#61DAFB] hover:bg-[#61DAFB] hover:text-black mt-3 py-2 w-full font-semibold rounded-md transition-colors duration-200"
				onClick={() => {
					dispatch({ type: "clearTasks" });
				}}
			>
				Clear Tasks
			</button>
		</>
	);
};

export default ResetTodo;
