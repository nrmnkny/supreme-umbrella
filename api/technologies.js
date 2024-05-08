import pool from './db';  

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const results = await pool.query('SELECT * FROM technologies');
            res.status(200).json(results);
        } catch (err) {
            console.error('Error fetching technologies:', err);
            res.status(500).send('Error fetching technologies');
        }
    } else {
        res.status(405).send('Method not allowed');
    }
}
