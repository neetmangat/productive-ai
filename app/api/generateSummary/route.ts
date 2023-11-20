import getGptSummary from "@/lib/getGptSummary";
import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // todos in the body of the POST req
  const { todos } = await request.json();
  console.log(todos);

  // communicate with OpenAI API
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `When responding, say welcome to 'Productive.AI', without quotes around the app name, and greet the user as Mr. Neet. Limit the response to 200 characters.`,
      },
      {
        role: "user",
        content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To Do, In Progress, and Done, then find a unique, creative way to tell the user to "have a productive day!" Here's the data: ${JSON.stringify(
          todos
        )}`,
      },
    ],
  });

  const { data } = response;

  return new NextResponse(JSON.stringify(data.choices[0].message), {
    headers: {
      "content-type": "application/json",
    },
  });
}
