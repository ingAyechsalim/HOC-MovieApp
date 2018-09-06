import React from "react";
import Spinner from "./spinner";

const Fadeine = WrappedComponent => {
  return class Fadeine extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      };
      setTimeout(
        () =>
          this.setState({
            loading: false
          }),
        3000
      );
    }

    render() {
      return this.state.loading ? (
        <div>
          {" "}
          <Spinner />
          <div>loading.....</div>
        </div>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default Fadeine;
