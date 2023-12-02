import { OpenAI } from "langchain/llms";
import { ConversationChain } from "langchain/chains";

export const run = async () => {
  const model = new OpenAI();
  const chain = new ConversationChain({
    llm: model,
  });
  const res1 = await chain.call({
    input: "Hi, my name is Cheng Fei.",
  });
  const res2 = await chain.call({
    input: "What is my name?",
  });
  console.log(res2);
};
