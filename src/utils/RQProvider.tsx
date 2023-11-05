"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function Providers({ children }: React.PropsWithChildren) {
	const client = new QueryClient({
		// defaultOptions: {
		// 	queries: { cacheTime: 1000 * 60 * 5 },
		// },
	});

	return (
		<QueryClientProvider client={client}>
			{children}
		</QueryClientProvider>
	);
}

export default Providers;
