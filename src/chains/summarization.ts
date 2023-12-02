import { OpenAI } from "langchain/llms";
import { loadSummarizationChain, AnalyzeDocumentChain } from "langchain/chains";

export const run = async () => {
  const model = new OpenAI({
    temperature: 0.1,
  });
  const combineDocumentsChain = loadSummarizationChain(model);
  const chain = new AnalyzeDocumentChain({
    combineDocumentsChain: combineDocumentsChain,
  });
  const text =
    "A single piece of text as input. Use AnalyzeDocumentChain when you want to summarize a single peices of text as input. Otherwise, you would need to split the text into chunks and use a separate function to summarize";
  const res = await chain.call({
    input_document: text,
  });
  console.log(res);
};
