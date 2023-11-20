import formatTodosForGpt from "./formatTodosFoGpt";

export default async function getGptSummary(board: Board) {
  const todos = formatTodosForGpt(board);

  const res = await fetch("/api/generateSummary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todos }),
  });

  const GPTdata = await res.json();
  const { content } = GPTdata;

  return content;
}
