import { useTodoContext } from "../../contexts/TodoContext";
import { FaTrashCan } from "react-icons/fa6";

const TodoItem = ({ task }) => {
	const { dispatch } = useTodoContext();

	return (
		<li className="border border-[#61DAFB] p-2 rounded-md flex items-center justify-between">
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
			<button
				className="text-red-500 px-2 text-xl"
				onClick={() => {
					dispatch({ type: "deleteTask", payload: task.id });
				}}
			>
				<FaTrashCan />
			</button>
		</li>
	);
};

export default TodoItem;
