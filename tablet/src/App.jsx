import { ButtonCrear } from "./components/ButtonCrear";
import { AuthProvider } from "./context/AuthProvider";
import Sidebar from "./components/Sidebar";

function App() {

  return (
    <>
    <AuthProvider>
      <Sidebar />
    </AuthProvider>
    </>
  );
}

export default App;
