import { PromptTemplate } from "langchain/prompts";

export const run = async () => {
  const template = "What is the capital for {country}?";
  const prompt = new PromptTemplate({
    template: template,
    inputVariables: ["country"],
  });
  const res = prompt.format({
    country: "France",
  });
  console.log(res);
};
