import pool from './db';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;
        try {
            await pool.query('INSERT INTO contact_submissions (name, email, message) VALUES (?, ?, ?)', [name, email, message]);
            res.status(200).send('Contact form submission saved successfully');
        } catch (err) {
            console.error('Error saving contact form submission:', err);
            res.status(500).send('Failed to save contact form submission');
        }
    } else {
        res.status(405).send('Method not allowed');
    }
}
