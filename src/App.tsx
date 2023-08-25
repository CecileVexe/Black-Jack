import "./App.css";
import Board from "./board/Board";
import Providers from "./providers/Providers";

const App = () => {
  return (
    <Providers>
      <Board />
    </Providers>
  );
};

export default App;
