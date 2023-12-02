import { OpenAI } from "langchain/llms";
import { initializeAgentExecutor } from "langchain/agents";
import { Calculator } from "langchain/tools";

export const run = async () => {
  const model = new OpenAI({
    temperature: 0.1,
  });
  const tools = [new Calculator()];
  const executor = await initializeAgentExecutor(
    tools,
    model,
    "zero-shot-react-description"
  );
  const input = "3 * 3 = ?";
  const res = await executor.call({ input });
  console.log(res);
};
