import React from 'react';
import data from './data';

const apidata = () => {
  return (
    <div>
      {data.map(({ id, name, job }) => {
        return (
          <div
            key={id}
            style={{
              textAlign: 'center',
              border: '1px solid tomato',
              margin: '5% 10%',
              padding: '10px',
            }}
          >
            <h1>{name}</h1>
            <p>{job}</p>
          </div>
        );
      })}
    </div>
  );
};

export default apidata;
