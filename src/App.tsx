// Import required components from React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CryptoInnovationPage } from "./views/CryptoInnovationPage";
import { MainPage } from "./views/MainPage";

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
