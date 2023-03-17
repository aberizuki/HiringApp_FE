import React from "react";
import Routers from "./routers";
import "src/assets/Styles/style.css";
import AppContextProvider from './AppContext';

function App() {
  return (
    <AppContextProvider>
      <Routers />
    </AppContextProvider>
  );
}

export default App;
