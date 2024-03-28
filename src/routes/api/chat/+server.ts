import { StreamingTextResponse } from 'ai';
import { ChatOpenAI } from '@langchain/openai';
import { AIMessage, HumanMessage, type BaseMessageFields } from '@langchain/core/messages';
import { RunnableSequence } from '@langchain/core/runnables';
import { BytesOutputParser } from '@langchain/core/output_parsers';
import { OPENAI_API_KEY } from '$env/static/private';

//server endpoint for chatGpt Stream Chat
export const POST = async ({ request }) => {
	const { messages } = await request.json();

	const chain = RunnableSequence.from([
		new ChatOpenAI({
			temperature: 0.8,
			openAIApiKey: OPENAI_API_KEY,
		}),
		new BytesOutputParser()
	]);

	const stream = await chain.stream([
		...messages.map((m: { role: string; content: string | BaseMessageFields; }) =>
			m.role == 'user' ? new HumanMessage(m.content) : new AIMessage(m.content)
		)
	]);

	return new StreamingTextResponse(stream);
};
