import ContextProvider from './contextProvider';
import ThemeDemo from './themeDemo';

export default function UseContextHook() {
	return (
		<ContextProvider>
			<ThemeDemo />
		</ContextProvider>
	);
}
