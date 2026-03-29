import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, org, message } = await req.json();

    if (!name || !email || !org) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'RawEval Research <noreply@raweval.com>',
      to: 'contact@raweval.com',
      replyTo: email,
      subject: `Research Inquiry from ${name} — ${org}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 560px;">
          <h2 style="margin: 0 0 16px; font-size: 18px; color: #1a1a1a;">New Research Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 120px;">Name</td>
              <td style="padding: 8px 0; color: #1a1a1a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Email</td>
              <td style="padding: 8px 0; color: #1a1a1a;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Organization</td>
              <td style="padding: 8px 0; color: #1a1a1a;">${org}</td>
            </tr>
          </table>
          ${message ? `
          <div style="margin-top: 16px; padding: 12px 16px; background: #f5f5f4; border-radius: 6px; font-size: 14px; color: #333; line-height: 1.6;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          ` : ''}
          <p style="margin-top: 24px; font-size: 12px; color: #999;">Sent from research.raweval.com</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
