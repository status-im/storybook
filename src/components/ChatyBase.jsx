import React, { Fragment } from 'react';
import styled from 'styled-components';
import { triangle } from 'polished';

const TriDiv = styled.div`
  ${triangle({ pointingDirection: 'bottom', width: '20px', height: '20px', foregroundColor: '#495B73' })}
  border-width: ${props => props.borderWidth}px ${props => props.borderWidth}px 0 0;
`

export default ({ component, borderWidth }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
    {component}
    <TriDiv borderWidth={borderWidth} />
  </div>
)
