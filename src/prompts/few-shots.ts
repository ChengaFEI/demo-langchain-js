import { OpenAI } from "langchain/llms";
import { FewShotPromptTemplate, PromptTemplate } from "langchain";

export const run = async () => {
  const exampleTemplate = "Country: {country}\nCapital: {capital}\n";
  const examples = [
    { country: "United States", capital: "Washington, D.C." },
    { country: "Canada", capital: "Ottawa" },
  ];
  const examplePrompt = new PromptTemplate({
    template: exampleTemplate,
    inputVariables: ["country", "capital"],
  });
  const fewShotPrompt = new FewShotPromptTemplate({
    examples,
    examplePrompt,
    prefix: "What is the capital city of the country below?",
    suffix: "Country: {country}\nCapital:",
    inputVariables: ["country"],
    exampleSeparator: "\n\n",
    templateFormat: "f-string",
  });
  const res = fewShotPrompt.format({
    country: "France",
  });
  console.log(res);
};
