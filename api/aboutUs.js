import pool from './db';  

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const results = await pool.query('SELECT * FROM about_us');
            res.status(200).json(results);
        } catch (err) {
            console.error('Error fetching about us data:', err);
            res.status(500).send('Failed to retrieve about us data');
        }
    } else {
        res.status(405).send('Method not allowed');
    }
}
