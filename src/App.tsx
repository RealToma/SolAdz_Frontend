// Import required components from React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CryptoInnovationPage } from "./views/CryptoInnovationPage";
import { MainPage } from "./views/MainPage";
import Lottie from "lottie-react";
import animationData from "./assets/loading/loading.json";
import { useEffect, useState } from "react";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div
        className={`${
          isLoading ? "opacity-100" : "opacity-0"
        } transition-all duration-300 absolute min-h-screen w-full h-full top-0 left-0 bg-blue-400 z-[99999] pointer-events-none`}
      >
        <div className="h-full w-full flex items-center justify-center">
          <Lottie
            className="max-w-[800px]"
            height={500}
            width={500}
            animationData={animationData}
          />
        </div>
      </div>
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
