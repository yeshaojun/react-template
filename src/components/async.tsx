import { RouterConfig } from '@/router';
import React  from 'react';

export default function AsyncComponent(importComponent: () => any) {
  class AsyncComponent extends React.Component<{ routes?: RouterConfig[]; [key: string]: any; }> {
    constructor(props: { routes?: RouterConfig[]; [key: string]: any; }) {
      super(props);
      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({ component: component });
    }

    render() {
      const C = (this.state as any).component;
      return C ? <C {...this.props} /> : null;
    }
  }
  return AsyncComponent;
}
