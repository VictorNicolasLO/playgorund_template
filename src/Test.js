import React, { memo } from 'react';
import useService from './hooks/useService';
import { ServiceTest } from './ServiceTest';
import { model } from './hooks/utils';
import { ServiceTest2 } from './serviceTest2';

function Test(props) {
  const person = useService(ServiceTest);
  const personModel = person;
  console.log('render children');
  return (
    <div>
      <input onInput={person.models.nameV_model} />
      {person.name}
    </div>
  );
}

export default memo(Test);
