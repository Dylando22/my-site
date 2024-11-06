import { RouterProvider, createHashRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import About from "./pages/About";
import History from "./pages/History";
import Projects from "./pages/Projects";
import RandomHat from "./pages/RandomHat";
import Quotes from "./quotes/Quotes";
import WaterHome from "./water/WaterHome";
import BudgetHome from "./budget/BudgetHome";
import TriviaMenu from "./trivia/components/TriviaMenu";
import TriviaGame from "./trivia/components/TriviaGame";
import TriviaGameOver from "./trivia/components/TriviaGameOver";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "history", element: <History /> },
      { path: "projects", element: <Projects /> },
      { path: "trivia-home", element: <TriviaMenu /> },
      { path: "trivia-game", element: <TriviaGame /> },
      { path: "trivia-game-over", element: <TriviaGameOver /> },
      { path: "quotes", element: <Quotes /> },
      { path: "water-stats", element: <WaterHome /> },
      { path: "budget", element: <BudgetHome /> },
      { path: "random-hat-selection", element: <RandomHat /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
