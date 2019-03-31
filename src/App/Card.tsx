import * as React from "react";

interface ICardProps {
  // name: string;
  // price: string;
  item:string;
}
const Card = ({ item }: ICardProps) => {
  return <section>
    <p>
      <div>
        {item}
      </div>
    </p>
  </section>
  // return (
  //   <section>
  //     <p>
  //       <div>
  //         <label>Name</label>
  //         <label>{name}</label>
  //       </div>
  //       <div>
  //         <label>Price</label>
  //         <label>{price}</label>
  //       </div>
  //     </p>
  //   </section>
  // );
};

export default Card;
