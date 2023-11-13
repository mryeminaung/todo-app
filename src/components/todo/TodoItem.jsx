import { useState } from "react";
import { useThemeContext } from "../../contexts/ThemeContext";
import { useTodoContext } from "../../contexts/TodoContext";
import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import UpdateTodo from "../tasks/UpdateTodo";

const TodoItem = ({ task }) => {
	const { dispatch } = useTodoContext();
	const { mode, themeState } = useThemeContext();
	const [isEdit, setIsEdit] = useState(false);
	const [updateText, setUpdateText] = useState(task.name);

	const theme = mode === "light" ? themeState.light : themeState.dark;

	return (
		<li
			className="border border-[#61DAFB] p-2 rounded-md flex items-center justify-between"
			style={{ backgroundColor: theme.body }}
		>
			<p className="flex items-center space-x-2 text-[18px]">
				{/* if checked is true, doneCount + 1 else doneCount - 1 */}
				<input
					type="checkbox"
					name={task.name}
					id={task.id}
					checked={task.done}
					className="accent-green-500 w-[20px] h-[20px]"
					// style={{ clipPath: "circle(50% at 50% 50%)" }}
					onChange={(e) => {
						dispatch({
							type: "doneTask",
							checked: e.target.checked,
							id: task.id,
						});
					}}
				/>
				<label htmlFor={task.id} className={`${task.done ? "line-through" : ""}`}>
					{task.name}
				</label>
			</p>

			{/* if edit is clicked, the update form for that id will appear */}
			{isEdit && (
				<UpdateTodo
					task={task}
					setIsEdit={setIsEdit}
					updateText={updateText}
					setUpdateText={setUpdateText}
				/>
			)}

			<div className="flex items-center">
				<button
					className="text-green-500 px-2 text-xl"
					onClick={() => {
						setIsEdit((preState) => !preState);
					}}
				>
					<FaPenToSquare />
				</button>
				<button
					className="text-red-500 px-2 text-xl"
					onClick={() => {
						dispatch({ type: "deleteTask", payload: task.id });
					}}
				>
					<FaTrashCan />
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
