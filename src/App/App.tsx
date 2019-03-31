import * as React from "react";
import Selector from "./Selector";
import CardList from "./CardList";
import ReportList from "./ReportList";

const {  useState } = React;

const App = () => {
  const [searchParams, updateSearch] = useState<string[]>([]);
  const onSearchSubmit = (text: string) => {
    updateSearch(searchParams.concat(text));
  };
  return (
    <div className="main">
      <Selector onSubmit={onSearchSubmit} />
      <CardList />
      <ReportList  searchParams={searchParams}/>
    </div>
  );
};

export default App;
