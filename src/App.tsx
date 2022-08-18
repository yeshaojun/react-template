import React from "react";
import { ErrorBoundary } from "react-error-boundary"
import { FullPageErrorFallback } from "./components/lib"
import Layout from "./layout/index"
function App() {
  return (
    <ErrorBoundary fallbackRender={FullPageErrorFallback} onReset={() => {
      
    }}>
      <Layout></Layout>
    </ErrorBoundary>

  );
}

export default App;
