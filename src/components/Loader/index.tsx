import React from 'react';

interface IProps {
    
}

const  Loader: React.FC<IProps> = () =>{
  return (
        <div className='loader-wrapper' id="loader">
            <div className='loading'>
                <div className='loading__square'></div>
                <div className='loading__square'></div>
                <div className='loading__square'></div>
                <div className='loading__square'></div>
                <div className='loading__square'></div>
                <div className='loading__square'></div>
                <div className='loading__square'></div>
            </div>
        </div>
  );
}

export default Loader;