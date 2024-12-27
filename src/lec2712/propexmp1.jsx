import * as React from "react";
import MyButton from "./propexmp2";
import MyList from "./propexmp3";

class PropExample extends React.Component {
  state = {
    text: "My Button",
    disabled: false,
    items: ["one", "icecream", " popcorn", "orange"],
  };
  constructor() {
    super();
    setTimeout(
      () => {
        this.setState({
          disabled: false,
          text: "Hello World!",
          items: ["apple", "banana", "cherry", "date"],
        });
      },

      2000
    );
  }
  render() {
    const { text, disabled, items } = this.state;
    return (
      <div>
        <MyButton text={text} disabled={disabled} />
        <MyList items={items} />
      </div>
    );
  }
}
export default PropExample;
