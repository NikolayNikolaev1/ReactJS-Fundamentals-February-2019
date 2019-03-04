import React from "react";

function errorHandlingWrapper(WrappeedComponent) {
  return class ErrorHandlingWrapper extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              hasError: false
          }
      }
    componentDidCatch(error, info) {
      console.log(error, info);
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if(this.state.hasError) {
            return (<h1>Something went wrong!</h1>)
        }

      return <WrappeedComponent {...this.props} />;
    }
  };
}

export default errorHandlingWrapper;
