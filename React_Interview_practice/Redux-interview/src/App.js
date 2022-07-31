import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import MainRoutes from "./Components/MainRoutes";
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <MainRoutes />
      </AuthContextProvider>
    </div>
  );
}
export default App;
