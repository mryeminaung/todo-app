import { useTodoContext } from "../../contexts/TodoContext";

const ResetTodo = () => {
	const { dispatch } = useTodoContext();

	return (
		<div className="flex flex-col-reverse gap-y-2 md:flex-row md:items-center md:gap-x-3 mt-3">
			{/* clear done tasks from todo list */}
			<button
				className="border border-[#61DAFB] hover:bg-[#61DAFB] hover:text-black py-2 w-full text-sm md:text-base font-semibold rounded-md transition-colors duration-200"
				onClick={() => {
					dispatch({ type: "clearDoneTasks" });
				}}
			>
				Delete Done Tasks
			</button>
			{/* clear all tasks from todo list */}
			<button
				className="border border-[#61DAFB] hover:bg-[#61DAFB] hover:text-black py-2 w-full text-sm md:text-base font-semibold rounded-md transition-colors duration-200"
				onClick={() => {
					dispatch({ type: "clearTasks" });
				}}
			>
				Clear All Tasks
			</button>
		</div>
	);
};

export default ResetTodo;
