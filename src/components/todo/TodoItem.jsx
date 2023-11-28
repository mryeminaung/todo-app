import { useState } from "react";
import { useThemeContext } from "../../contexts/ThemeContext";
import { useTodoContext } from "../../contexts/TodoContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
			className="border border-[#61DAFB] p-3 rounded-md flex flex-col sm:flex-row md:items-center justify-between gap-x-2 gap-y-1"
			style={{ backgroundColor: theme.body }}
		>
			<p className="flex items-start space-x-2 text-[18px]">
				{/* if checked is true, doneCount + 1 else doneCount - 1 */}
				<input
					type="checkbox"
					name={task.name}
					id={task.id}
					checked={task.done}
					className="accent-green-500 min-w-[20px] h-[20px] mt-[6px]"
					// style={{ clipPath: "circle(50% at 50% 50%)" }}
					onChange={(e) => {
						dispatch({
							type: "doneTask",
							checked: e.target.checked,
							id: task.id,
						});
					}}
				/>
				<label htmlFor={task.id} className={` ${task.done ? "line-through" : ""}`}>
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

			<div className="flex justify-end items-center gap-x-3">
				<button
					className="text-green-500 text-xl"
					onClick={() => {
						setIsEdit((preState) => !preState);
					}}
				>
					<FaPenToSquare />
				</button>
				{/* delete message */}
				<ToastContainer
					position="bottom-right"
					autoClose={1500}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
				<button
					className="text-red-500 text-xl"
					onClick={() => {
						dispatch({ type: "deleteTask", payload: task.id });
						toast.error("Deleted successfully", {
							position: "bottom-right",
							autoClose: 1000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "light",
							className: "mx-auto w-[80%] md:w-auto",
						});
					}}
				>
					<FaTrashCan />
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
