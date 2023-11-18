"use client";

import { DragDropContext, Droppable } from "react-beautiful-dnd";

function Board() {
  return (
    <DragDropContext>
      <Droppable droppableId="board" direction="horizontal">
        {(provided) => <div>{/* render all the columns */}</div>}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
