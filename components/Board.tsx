"use client";

import useBoardStore from "@/store/BoardStore";
import { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function Board() {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  return (
    <DragDropContext>
      <Droppable droppableId="board" direction="horizontal">
        {(provided) => <div>{/* render all the columns */}</div>}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
