import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composedWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import ReduxPromise from "redux-promise";
import "bootstrap/dist/css/boostrap.min.css";
import "./index.css";

const store = createStor(rootReducer, {}, composedWithDevTools(applyMiddleware(ReduxPromise))
);

reactDOM.render(
	<Provider store = {store}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path = "/api/posts/new" component = {PostsNew} />
					<Route path = "/api/posts" component = {PostsIndex} />
					<Route exact path = "/" component = {PostsIndex} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);