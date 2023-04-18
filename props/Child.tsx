import React from 'react';

interface ChildProps {
  color: string;
  children?: React.ReactNode;
}

//forma 2

export const Child: React.FC<ChildProps> = ({ color }) => {
  return (
    <div>
      <h1>{color}</h1>
    </div>
  );
};

/*

forma 1 

export const Child = ({child}: ChildProps) => {
    return(
        <div>
            <h1>{child}</h1>
        </div>
    )
}

*/
