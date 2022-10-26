import { StrictMode } from "react"
import { render } from "react-dom"
import store from './redux/store'
import App from "./App"
import { Provider } from "react-redux"

render(

	<Provider store={store}>
		<StrictMode>
			<App />
		</StrictMode>
	</Provider>,
	document.getElementById("root")
);
