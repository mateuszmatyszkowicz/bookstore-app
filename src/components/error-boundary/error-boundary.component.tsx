import React, { Component, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  message: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  // Here we can also make a call to our analytic service like Sentry
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {}

  render() {
    if (this.state) {
      <div>{this.props.message}</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
