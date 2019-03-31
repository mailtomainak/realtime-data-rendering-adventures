import * as React from "react";
import Selector from "./Selector";
import CardList from "./CardList";
import ReportList from "./ReportList";

const { useEffect, useState } = React;

const App = () => {
  const [searchParams, updateSearch] = useState<string[]>([]);
  useEffect(() => {
    //make n/w call 
  });
  const onSearchSubmit = (text: string) => {
    
    updateSearch(searchParams.concat(text));
   
  };
  return (
    <div className="main">
      <Selector onSubmit={onSearchSubmit} />
      <CardList />
      <ReportList />
    </div>
  );
};

export default App;
