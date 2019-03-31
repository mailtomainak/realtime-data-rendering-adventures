import * as React from "react";
const { useState } = React;

interface ISelectorProps {
  onSubmit: any;
}

const Selector = ({ onSubmit }: ISelectorProps) => {
  const [textValue, onChange] = useState("");

  return (
    <section>
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit(textValue);
          onChange("");
        }}
      >
        <label>
          <input
            type="text"
            value={textValue}
            name="symbol"
            placeholder="Symbol"
            onChange={e => onChange(e.target.value)}
          />
          <input type="submit" value="Search and Add" />
        </label>
      </form>
    </section>
  );
};

export default Selector;
