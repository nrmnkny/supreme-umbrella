import pool from './db';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const results = await pool.query('SELECT * FROM users');
            res.status(200).json(results);
        } catch (err) {
            console.error('Error fetching users:', err);
            res.status(500).send('Error fetching users');
        }
    } else if (req.method === 'POST') {
        // Assuming you're receiving username, email, and password in the request body
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).send('Missing username, email, or password');
        }
        try {
            const result = await pool.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
            res.status(201).send('User created successfully');
        } catch (err) {
            console.error('Error creating user:', err);
            res.status(500).send('Failed to create user');
        }
    } else {
        res.status(405).send('Method not allowed');
    }
}
