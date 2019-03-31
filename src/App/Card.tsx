import * as React from "react";

interface ICardProps {
  name: string;
  price: string;
}
const Card = ({ name, price }: ICardProps) => {
  return (
    <section>
      <p>
        <div>
          <label>Name</label>
          <label>{name}</label>
        </div>
        <div>
          <label>Price</label>
          <label>{price}</label>
        </div>
      </p>
    </section>
  );
};

export default Card;
