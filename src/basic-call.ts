import { OpenAI } from "langchain/llms";

export const run = async () => {
  const model = new OpenAI({ temperature: 0.1 });
  const res = await model.call("What is the capital city of France?");
  console.log({ res });
};
