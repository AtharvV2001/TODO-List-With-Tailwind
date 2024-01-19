import "./App.css";
import MainCard from "./components/mainCard";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-main-bg w-full min-h-screen grid place-items-center p-13">
      <Toaster />
      <MainCard />
    </div>
  );
}

export default App;
