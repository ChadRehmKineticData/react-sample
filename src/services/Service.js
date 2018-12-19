import React, { Fragment } from 'react';
import hello from 'goodbye-world';

hello();

export const Service = props =>
  <Fragment>
    <h2>Services</h2>
    <ul>
      <li>Onboarding</li>
      <li>Help</li>
    </ul>
  </Fragment>;