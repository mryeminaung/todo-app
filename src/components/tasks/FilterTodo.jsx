const FilterTodo = ({ filterBy, setFilterBy }) => {
	return (
		<div className="flex items-center justify-start gap-x-2">
			<label htmlFor="filterBy" className="font-bold">
				Filter By
			</label>
			<select
				className="filter-btn"
				name="filterBy"
				id="filterBy"
				value={filterBy}
				onChange={(e) => setFilterBy(e.target.value)}
			>
				<option value="all">All</option>
				<option value="active">Active</option>
				<option value="completed">Completed</option>
			</select>
		</div>
	);
};

export default FilterTodo;
