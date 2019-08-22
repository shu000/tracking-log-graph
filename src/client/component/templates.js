import React from 'react';

import TemplatesHeader from '../container/templates-header';
import TemplatesForm from '../container/templates-form';

export default class Templates extends React.Component {
  render() {
    return (
      <>
        <TemplatesHeader />
        <TemplatesForm />
      </>
    );
  }
}
