import * as React from "react";
import Card from './Card';
import EmptyCard from './EmptyCard'
interface IReportListParameters{
  searchParams:string[];
}


const CardList = (searchParams:IReportListParameters) => {
return <React.Fragment>{searchParams.searchParams.map(item=><Card item={item} />)}</React.Fragment>
}

const ReportList = ({searchParams}:IReportListParameters) => {
  return searchParams.length===0?<EmptyCard/>:<CardList searchParams= {searchParams}/>};



export default ReportList;