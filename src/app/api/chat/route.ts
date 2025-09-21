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
      model: "gpt-5-mini", // GPT-5-miniを使用
      messages: [{ role: "user", content: message }],
      max_completion_tokens: 1000, // GPT-5-miniでは max_completion_tokens を使用
      // temperature: GPT-5-miniではデフォルト値(1)のみサポート
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

