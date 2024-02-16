import React, { Component } from 'react';
import loadable from '@loadable/component';

const ErrorPage = loadable(() => import('./pages/ErrorPage'));

class ErrorProcess extends Component {
  state = {
    message: '', // 에러 출력하는 컴포넌트에 보여줄 것
  };

  componentDidCatch(error, info) {
    this.setState({
      message: error.message,
    });
    console.error({ error, info });
  }

  render() {
    const { message } = this.state;
    return message ? <ErrorPage>{message}</ErrorPage> : this.props.children;
  }
}

export default React.memo(ErrorProcess);
