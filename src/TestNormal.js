import React, { useContext, memo, useEffect } from 'react';
import { observer } from 'mobx-react';
import { component, injectService } from './hooks';
import { ServiceTest } from './ServiceTest';
import { model } from './hooks/utils';
import { ServiceTest2 } from './serviceTest2';
import { ctx } from './App';

function TestNormal(props) {
  const service = injectService(ServiceTest);

  console.log('render children');
  return (
    <div>
      <input onInput={service.models.age} />
    </div>
  );
}
export default component(TestNormal);
