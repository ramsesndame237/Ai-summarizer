import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
const showDevtools = false
const ReactQueryDevtoolsProduction = React.lazy(() =>
    import('@tanstack/react-query-devtools/build/modern/production.js').then(
        (d) => ({
            default: d.ReactQueryDevtools,
        }),
    ),
)
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App/>
            <ReactQueryDevtools initialIsOpen />
            {showDevtools ? (
                <React.Suspense fallback={null}>
                    <ReactQueryDevtoolsProduction />
                </React.Suspense>
            ):null}
        </QueryClientProvider>
    </React.StrictMode>,
)
