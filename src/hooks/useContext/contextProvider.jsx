import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
export function useTheme() {
	return useContext(ThemeContext);
}

export default function ContextProvider({ children }) {
	const [theme, setTheme] = useState(false);

	return (
		<>
			<ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
		</>
	);
}
