import '@/styles/globals.css'
import configureStore from "../store/configureAppStore";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const store = configureStore();
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
