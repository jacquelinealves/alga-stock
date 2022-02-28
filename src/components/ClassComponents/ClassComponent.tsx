import React from "react";

class ClassComponent extends React.Component<{ name: string }> {
  constructor(props: any) {
    super(props);
    console.log("constructor reached");
  }

  state = {
    name: "Mundo",
  };

  componentDidMount() {
    console.log("did mount reached");
  }

  componentDidUpdate() {
    console.log("did update reached");
  }

  componentWillUnmount() {
    console.log("unmount reached");
  }

  render() {
    console.log("render reached");
    return (
      // <div>Olá, {this.props.name}! Sou um componente baseado em classe</div>

      <div>
        <p>name: {this.state.name}</p>
        <button
          onClick={() => {
            this.setState({ name: "Jac" });
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default ClassComponent;
