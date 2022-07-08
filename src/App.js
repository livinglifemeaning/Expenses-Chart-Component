import Balance from "./components/Balance";
import Spending from "./components/Spending";

const App = () => {
  return (
    <main>
      <div className="container">
        <Balance />
        <Spending />
      </div>
    </main>
  );
};

export default App;
