import React, { memo } from 'react';
import useService from './hooks/useService';
import { ServiceTest } from './ServiceTest';
import { model } from './hooks/utils';
import { ServiceTest2 } from './serviceTest2';

function Test() {
  const person = useService(ServiceTest);
  console.log('render children');
  return (
    <div>
      <input
        onInput={() => {
          person.fn();
        }}
      />

      {person.name}
    </div>
  );
}

export default Test;
