import { useTodoContext } from "../../contexts/TodoContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTodo = () => {
	const { task, setTask, dispatch } = useTodoContext();

	return (
		<>
			{/* success message */}
			<ToastContainer
				position="bottom-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			{/* error message */}
			<ToastContainer
				position="top-center"
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
			{/* add new task to todo list */}
			<div className="flex flex-col md:flex-row md:items-center gap-y-2 md:gap-x-3">
				<input
					autoComplete="off"
					type="text"
					name="task"
					id="task"
					placeholder="Enter a new task"
					className="border border-[#61DAFB] text-black p-2 rounded-md w-full md:w-3/4 focus:outline-none"
					value={task}
					onChange={(e) => setTask(e.target.value)}
				/>
				<button
					className="border border-[#61DAFB] font-semibold p-2 w-full md:w-1/4 rounded-md hover:bg-[#61DAFB] text-sm md:text-base hover:text-black transition-colors duration-200"
					onClick={() => {
						if (task) {
							dispatch({ type: "addTask", payload: task });
							setTask("");
							toast.success("Added successfully", {
								position: "bottom-right",
								autoClose: 1000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined,
								theme: "light",
								className: "mx-auto w-[85%] md:w-auto",
							});
						} else {
							toast.error("Input is empty!", {
								position: "top-center",
								autoClose: 1000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined,
								theme: "light",
								className: "mx-auto w-[85%] md:w-auto",
							});
						}
					}}
				>
					Add
				</button>
			</div>
		</>
	);
};

export default AddTodo;
