import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import ReduxPromise from "redux-promise";
// import App from "./components/app";
import PostsIndex from "./containers/posts_index";
import PostsNew from "./containers/posts_new";
import rootReducer from "./reducers";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// const store = createStore(rootReducers, {}, applyMiddleware());
// const store = createStore(
// 	rootReducer,
// 	{},
// 	composeWithDevTools(applyMiddleware())
// );

const store = createStore(
	rootReducer,
	{},
	composeWithDevTools(applyMiddleware(ReduxPromise))
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/api/posts/new" component={PostsNew} />
					<Route path="/api/posts" component={PostsIndex} />
					<Route exact path="/" component={PostsIndex} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);