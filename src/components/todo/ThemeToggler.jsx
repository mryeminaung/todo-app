import { useThemeContext } from "../../contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa6";

const ThemeToggler = () => {
	const { mode, setMode } = useThemeContext();

	return (
		<div className="flex items-center justify-between mb-5">
			<h1 className="font-bold text-2xl md:text-3xl text-center">Todo App</h1>
			<div className="theme-toggler">
				<input
					type="checkbox"
					className="checkbox"
					id="checkbox"
					checked={mode === "dark"}
					onChange={() => {
						setMode((preMode) => (preMode === "light" ? "dark" : "light"));
					}}
				/>
				<label htmlFor="checkbox" className="checkbox-label">
					<FaMoon className="text-black" />
					<FaSun className="text-white" />
					<span className="ball"></span>
				</label>
			</div>
		</div>
	);
};

export default ThemeToggler;
