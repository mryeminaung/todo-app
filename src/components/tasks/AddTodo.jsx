import { useTodoContext } from "../../contexts/TodoContext";

const AddTodo = () => {
	const { task, setTask, dispatch } = useTodoContext();

	return (
		<>
			{/* add new task to todo list */}
			<div className="flex items-center gap-x-3">
				<input
					autoComplete="off"
					type="text"
					name="task"
					id="task"
					placeholder="Enter a new task"
					className="border border-[#61DAFB] text-black p-2 rounded-md w-3/4 focus:outline-none"
					value={task}
					onChange={(e) => setTask(e.target.value)}
				/>
				<button
					className="border border-[#61DAFB] font-semibold p-2 w-1/4 rounded-md hover:bg-[#61DAFB]  hover:text-black transition-colors duration-200"
					onClick={() => {
						dispatch({ type: "addTask", payload: task });
						setTask("");
					}}
				>
					Add
				</button>
			</div>
		</>
	);
};

export default AddTodo;
