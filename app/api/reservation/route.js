import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const data = await request.json();
        const { name, email, phone, date, time, guests, location, notes } = data;

        // Validate required fields
        if (!name || !phone || !date || !time || !guests) {
            return NextResponse.json(
                { error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
                { status: 400 }
            );
        }

        // Configure email transporter
        // NOTE: In production, use environment variables
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO || process.env.EMAIL_USER, // Default to sender if no receiver set
            subject: `Neue Reservierung: ${name} - ${date} ${time}`,
            html: `
        <h2>Neue Tischreservierung</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Telefon:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>Email:</strong> ${email || 'Nicht angegeben'}</p>
        <hr />
        <p><strong>Datum:</strong> ${date}</p>
        <p><strong>Uhrzeit:</strong> ${time} Uhr</p>
        <p><strong>Personen:</strong> ${guests}</p>
        <p><strong>Bereich:</strong> ${location === 'indoor' ? 'Drinnen' : 'Draußen'}</p>
        <p><strong>Anmerkungen:</strong> ${notes || '-'}</p>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Reservierung erfolgreich gesendet' });
    } catch (error) {
        console.error('Reservation Error:', error);
        return NextResponse.json(
            { error: 'Fehler beim Senden der Reservierung. Bitte rufen Sie uns an.' },
            { status: 500 }
        );
    }
}
