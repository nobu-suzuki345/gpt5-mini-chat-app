import OpenAI from 'openai';
import { NextRequest } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return Response.json({ error: 'メッセージが必要です' }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // GPT-5-miniはまだリリースされていないため、gpt-4o-miniを使用
      messages: [{ role: "user", content: message }],
      max_tokens: 1000,
      temperature: 0.7,
    });

    return Response.json({ 
      reply: completion.choices[0].message.content 
    });
  } catch (error) {
    console.error('API Error:', error);
    return Response.json(
      { error: 'APIエラーが発生しました' }, 
      { status: 500 }
    );
  }
}

