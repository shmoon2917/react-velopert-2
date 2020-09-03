import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./ch8/modules";
// import logger from "redux-logger";
// import ReduxThunk from "redux-thunk";
// import { Router } from "react-router-dom";
// import { createBrowserHistory } from "history";
// import createSagaMiddleware from "redux-saga";

// const customHistory = createBrowserHistory();
// const sagaMiddleware = createSagaMiddleware({
//   context: {
//     history: customHistory,
//   },
// });

// const store = createStore(
//   rootReducer,
//   applyMiddleware(
//     ReduxThunk.withExtraArgument({ history: customHistory }),
//     sagaMiddleware,
//     logger
//   )
// );
const store = createStore(rootReducer);

// sagaMiddleware.run(rootSaga);

ReactDOM.render(
  // <Router history={customHistory}>
  <Provider store={store}>
    <App />
  </Provider>,
  // </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
