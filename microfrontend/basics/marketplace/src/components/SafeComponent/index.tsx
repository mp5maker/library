import * as React from "react";

interface ISafeComponentProps {
  children?: React.ReactNode;
}

interface ISafeComponentState {
  hasError?: boolean;
}

class SafeComponent extends React.Component<
  ISafeComponentProps,
  ISafeComponentState
> {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}

export default SafeComponent;
