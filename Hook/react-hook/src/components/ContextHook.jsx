import { React, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ContextHook() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  static contextType = ThemeContext;

  render() {
    return (
      <div>
        <Button theme={this.context.text} />
        <h3>ThemeContext에서 받아온 값: {this.context.text}</h3>
      </div>
    );
  }
}
// ThemeButton.contextType = ThemeContext;

const Button = (props) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div>
      <h1>{props.theme}</h1>
      <h3>{themeContext.text}</h3>
    </div>
  );
};

export default ContextHook;
