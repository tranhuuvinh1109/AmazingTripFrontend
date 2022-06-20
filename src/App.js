import { DefaultLayout } from "./components/Layout";
import Home from "./pages/Home";
import HostPage from "./components/Layout/HostPage";
import Form from "./components/Layout/Form";

function App() {
  return (
    // <HostPage />

    <DefaultLayout>
      <Home />
    </DefaultLayout>
  );
}

export default App;
