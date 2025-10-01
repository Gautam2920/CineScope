import React, { Component } from 'react';
import ErrorMessage from "../Common/ErrorMessage.jsx";


class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error("Uncaught error in component:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-8 my-10 bg-[#0B0C10] rounded-xl border-4 border-red-500 shadow-2xl">
                    <ErrorMessage
                        message="Something went wrong. A crucial part of the application failed to render. Please refresh or try again later."
                    />
                    <details className="mt-4 text-sm text-red-300">
                        <summary className="text-red-400 cursor-pointer">View Details</summary>
                        <pre className="whitespace-pre-wrap mt-2 p-2 bg-red-900/50 rounded">{this.state.error && this.state.error.toString()}</pre>
                    </details>
                </div>
            );
        }
        return this.props.children;
    }
}

const WithErrorBoundary = (WrappedComponent) => (props) => (
    <ErrorBoundary>
        <WrappedComponent {...props} />
    </ErrorBoundary>
);

export default WithErrorBoundary;