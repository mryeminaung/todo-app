import { useTodoContext } from "../../contexts/TodoContext";

const SearchTodo = () => {
	const { searchQuery, setSearchQuery } = useTodoContext();

	return (
		<>
			{/* search task or tasks from todo list */}
			<div className="mt-3">
				<input
          autoComplete="off"
					type="text"
					name="task"
					id="task"
					placeholder="Type something to search"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="border border-[#61DAFB] text-black p-2 rounded-md w-full focus:outline-none"
				/>
			</div>
		</>
	);
};

export default SearchTodo;
