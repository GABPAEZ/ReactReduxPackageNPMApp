import React from 'react';

const EventComponent: React.FC = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('I am starting to drag');
    console.log(event.clientX, event.clientY);
  };

  const handleDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('I am starting to drag');
    console.log(event.clientX, event.clientY);
  };

  return (
    <div>
      <h1>Hello</h1>
      {/* {<input onChange={(e) => console.log(e.target.value)} /> */}
      <input onChange={handleChange} />
      <div draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        drag me!
      </div>
    </div>

    //draggable event
  );
};

export default EventComponent;

/**
 * Si quiero scar el evento a un funcion aparte como esta aca, la inferencia de tipo no detecta el evento, por lo que tenemos que
 * inferilo explicitamente como en este caso a event:React.ChangeEvent<HTMLInputElement>, si lo dejamos como el primer ejempl que
 * esta comentado, typescript lo infiere directamente, es el diferencia entre dejarlo como el ejemplo uno o como el ejemplo dos.
 */
