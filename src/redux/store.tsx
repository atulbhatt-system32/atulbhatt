import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const enhancers = [];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension =
    ((window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()) ||
    compose;
  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension);
  }
}

const composeEnhancers = compose(applyMiddleware(thunk), ...enhancers);

// devtools for debugging in dev environment.
export const store = createStore(rootReducer, composeEnhancers);
