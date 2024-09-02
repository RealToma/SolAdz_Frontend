// Import required components from React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { CryptoInnovationPage } from "./components/CryptoInnovationPage";
import { MainPage } from "./components/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/innovation",
    element: <CryptoInnovationPage />
  }
]);

// Main App component
function App() {
  return <RouterProvider router={router} />;
}

export default App;
