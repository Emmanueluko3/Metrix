import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/templates/layout";
import { EventProvider } from "./context/EventContext";

function App() {
  return (
    <div className="">
      <EventProvider>
        <Layout />
      </EventProvider>
    </div>
  );
}

export default App;
