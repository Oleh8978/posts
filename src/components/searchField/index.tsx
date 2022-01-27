import React from 'react';
import { connect, useDispatch } from 'react-redux';

// actions
import * as actions from '../../controllers/searchReducer/actions';

// import 
import { IStore } from '../../controllers/interfaces';

interface IProps {
    searchWord: string
}

const SearchField: React.FC<IProps> = (props) => {
    const dispatch = useDispatch();
  return (
    <div className="search">
        <input 
            className="search-input"
            value={props.searchWord}
            placeholder='Find title by word'
            onChange={(e) => dispatch(actions.setWord({word: e.target.value}))}
        >
        </input>
    </div>
  );
}

export default connect((store: IStore) => ({
    searchWord: store.word.word
  }))(SearchField);