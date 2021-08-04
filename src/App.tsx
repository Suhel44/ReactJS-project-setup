import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./rootReducer";
import logo from "./logo.svg";
import Counter from "./CounterData";
import { addCount, minusCount } from "./counters";
import "./App.css";

export const incrementAsync = () => ({
  type: "INCREMENT_ASYNC",
});

function App() {
  const dispatch = useDispatch();
  const { clicks } = useSelector((state: RootState) => state.count);

  const increment = (page: number) => {
    dispatch(addCount(page));
  };

  const decrement = (page: number) => {
    dispatch(minusCount(page));
  };

  return (
    <div className="App">
      {/* Route component will comes here */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter
          value={clicks}
          onIncrement={() => increment(1)}
          onDecrement={() => decrement(1)}
          onIncrementAsync={() => dispatch(incrementAsync())}
        />

        <p>City moves Sales Associate</p>
      </header>
    </div>
  );
}

export default App;
