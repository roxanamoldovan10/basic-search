import { Component, ReactElement } from 'react';

interface State {
  hasError: boolean;
}

interface Props {
  children: ReactElement;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops. There has been an error</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
