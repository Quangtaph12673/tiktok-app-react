import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {publicRouter} from "./routes";
const Page404 = React.lazy(() => import("pages/404"));

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<React.Suspense fallback={"loading ..."}>
					<Routes>
						{publicRouter.map(
							(item: {path: string; component: any}, index: number) => {
								return (
									<Route
										key={index}
										element={<item.component />}
										path={item.path}
									/>
								);
							}
						)}
						<Route path='*' element={<Page404 />} />
					</Routes>
				</React.Suspense>
			</BrowserRouter>
		</div>
	);
}

export default App;
