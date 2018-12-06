import React, { Fragment } from 'react';
import hello from 'hello-world';

hello();

export const Queue = props =>
  <Fragment>
    <h2>Queues</h2>
    <ul>
      <li>Work</li>
      <li>Approval</li>
      <li>Work Order</li>
    </ul>
  </Fragment>;