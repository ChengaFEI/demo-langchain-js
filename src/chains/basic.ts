import { OpenAI } from "langchain/llms";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

export const run = async () => {
  const model = new OpenAI({ temperature: 0.1 });
  const template = "What is the capital of {country}";
  const prompt = new PromptTemplate({
    template: template,
    inputVariables: ["country"],
  });
  const chain = new LLMChain({
    llm: model,
    prompt,
  });
  const res = await chain.call({
    country: "France",
  });
  console.log({ res });
};
