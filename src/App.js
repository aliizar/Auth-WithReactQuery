import { useSelector } from "react-redux";
import LandingPage from "./Pages/LandingPage";

function App() {
  const Theme = useSelector((store) => store.theme.mode);
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
