import React from 'react';
import { connect } from 'react-redux';

// components
import ErrorWarning from './components/errorPlate';

// routing
import Routing from './routing';

// interfaces
import { IStore } from './controllers/interfaces';

interface IProps {

}

const App: React.FC<IProps> = () => {
  return (
    <div className="main">
      <Routing />
      <ErrorWarning />
    </div>
  );
}

export default connect((store: IStore) => ({
  errors: store.errors.errors,
}))(App);
