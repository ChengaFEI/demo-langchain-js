import { OpenAI } from "langchain/llms";
import { loadQAChain } from "langchain/chains";
import { Document } from "langchain/document";

export const run = async () => {
  const model = new OpenAI({
    temperature: 0.1,
  });
  const chain = loadQAChain(model);
  const docs = [
    new Document({
      pageContent: "Rachel went to Harvard",
    }),
    new Document({
      pageContent: "Tom went to Stanford",
    }),
  ];
  const res = await chain.call({
    input_documents: docs,
    question: "Where did rachel go to college",
  });
  console.log(res);
};
