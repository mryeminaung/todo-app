import { useEffect } from "react";
import { useThemeContext } from "../../contexts/ThemeContext";
import { useTodoContext } from "../../contexts/TodoContext";

const UpdateTodo = ({ task, setIsEdit, setUpdateText, updateText }) => {
	const { dispatch, status, setStatus } = useTodoContext();
	const { mode, themeState } = useThemeContext();

	const theme = mode === "light" ? themeState.light : themeState.dark;

	useEffect(() => {
		setStatus(task.done ? "completed" : "active");
	}, [task]);

	return (
		<div className="absolute top-0 left-0 w-screen h-screen">
			<div
				className="w-[80%] md:w-[650px] border border-[#61DAFB] shadow-sm shadow-[#61dafb80]h-[400px] absolute left-[50%] top-[50%] -translate-x-[50%] p-5 md:p-8 -translate-y-[50%] rounded-md"
				style={{ backgroundColor: theme.body, color: theme.text }}
			>
				<h2 className="font-bold text-xl md:text-3xl text-center mb-5">Update Todo</h2>

				<div className="space-y-3">
					<label htmlFor={task.id} className="font-bold text-lg md:text-xl">
						Task Name
					</label>
					<input
						type="text"
						name={task.name}
						id={task.id}
						value={updateText}
						onChange={(e) => {
							setUpdateText(e.target.value);
						}}
						className="border border-[#61DAFB] text-black p-2 rounded-md w-full focus:outline-none"
					/>
					<label
						htmlFor="status"
						className="font-bold text-lg md:text-xl mt-3 block"
						value={task.done}
						onChange={(e) => {
							console.log(e.target.value);
						}}
					>
						Status
					</label>
					<select
						name="status"
						id="status"
						className="block w-full border border-[#61DAFB] focus:outline-none font-semibold p-3 text-black rounded-md hover:text-black transition-colors duration-200"
						value={status}
						onChange={(e) => setStatus(e.target.value)}
					>
						<option value="active">Active</option>
						<option value="completed">Completed</option>
					</select>
				</div>

				<div className="flex flex-col-reverse gap-y-4 md:flex-row items-center gap-x-3 mt-3">
					<button
						className="border border-[#61DAFB] hover:bg-[#61DAFB] hover:text-black py-2 w-full text-sm md:text-base font-semibold rounded-md transition-colors duration-200"
						onClick={() => {
							setIsEdit((preState) => !preState);
							setStatus(task.done ? "completed" : "active");
						}}
					>
						Cancel
					</button>
					<button
						className="border border-[#61DAFB] hover:bg-[#61DAFB] hover:text-black py-2 w-full text-sm md:text-base font-semibold rounded-md transition-colors duration-200"
						onClick={() => {
							setIsEdit(false);
							dispatch({
								type: "updateStatus",
								StatusId: task.id,
								status: status === "active" ? false : true,
							});
							dispatch({
								type: "updateTask",
								updateId: task.id,
								updateTask: updateText,
							});
						}}
					>
						Update
					</button>
				</div>
			</div>
		</div>
	);
};

export default UpdateTodo;
