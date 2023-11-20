"use client";

import useBoardStore from "@/store/BoardStore";
import { XCircleIcon } from "@heroicons/react/24/solid";
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";

type Props = {
  todo: Todo;
  id: TypedColumn;
  index: number;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};

function TodoCard({
  todo,
  index,
  id,
  innerRef,
  draggableProps,
  dragHandleProps,
}: Props) {
  const deleteTodo = useBoardStore((state) => state.deleteTodo);

  return (
    <div
      className="bg-white dark:bg-slate-900/30 rounded-md space-y-2 drop-shadow-md dark:shadow-xl"
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
    >
      <div className="flex justify-between items-center p-5">
        <p>{todo.title}</p>
        <button
          onClick={() => deleteTodo(index, todo, id)}
          className="text-red-500 hover:text-red-600  dark:text-[#B423F8] dark:hover:text-[#B423F8]/70"
        >
          {/* <button className="text-red-500 hover:text-red-600 dark:text-pink-600/90 dark:text-[#B423F8]"> */}
          <XCircleIcon className="ml-5 h-8 w-8" />
        </button>
      </div>

      {/* Add image here */}
    </div>
  );
}

export default TodoCard;
