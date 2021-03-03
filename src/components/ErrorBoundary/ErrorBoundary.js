import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      stack: null,
      message: null,
    };
  }
  static getDerivedStateFromError(error) {
    console.dir(error.stack);
    return { hasError: true, stack: error.stack, message: error.message };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Error</h1>
          <button onClick={() => window.location.reload()}>Refresh</button>
          <button>Show technical informations</button>
          {this.state.stack}
        </div>
      );
    }
    return this.props.children;
  }
}
