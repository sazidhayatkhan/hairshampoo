"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from '../store/store'
function Providers({ children }: React.PropsWithChildren) {
	const client = new QueryClient({
		// defaultOptions: {
		// 	queries: { cacheTime: 1000 * 60 * 5 },
		// },
	});

	return (
		<Provider store={store}>
			<QueryClientProvider client={client}>
				{children}
			</QueryClientProvider>
		</Provider>
	);
}

export default Providers;
