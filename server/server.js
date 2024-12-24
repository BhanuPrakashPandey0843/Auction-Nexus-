const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('./database'); 
const app = express();


app.use(express.json());
app.use(cors());

// JWT Secret (replace with a secure secret in production)
const JWT_SECRET = 'your_jwt_secret';



const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
};


const generateToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email,
        role: user.role,
    };
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
};


app.post('/adduser', async (req, res) => {
    const { user_name, password, email, role } = req.body;

    try {
        
        if (!user_name || !password || !email || !role) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        
        const emailCheckQuery = 'SELECT * FROM accounts WHERE email = $1';
        const emailExists = await pool.query(emailCheckQuery, [email]);

        if (emailExists.rows.length > 0) {
            return res.status(400).json({ error: 'Email is already registered' });
        }

       
        const hashedPassword = await bcrypt.hash(password, 10);

      
        const insertQuery = `
            INSERT INTO accounts (user_name, password, email, role) 
            VALUES ($1, $2, $3, $4) RETURNING id, user_name, email, role;
        `;
        const response = await pool.query(insertQuery, [user_name, hashedPassword, email, role]);

        
        res.status(201).json({
            message: 'User registered successfully',
            user: response.rows[0],
        });
    } catch (error) {
        console.error('Error during registration:', error.message);
        res.status(500).json({ error: 'Failed to register user' });
    }
});


app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
      
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

       
        const query = 'SELECT * FROM accounts WHERE email = $1';
        const result = await pool.query(query, [email]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const user = result.rows[0];

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = generateToken(user);

       
        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                user_name: user.user_name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        console.error('Error during login:', error.message);
        res.status(500).json({ error: 'Failed to log in' });
    }
});


app.get('/protected', (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Authorization token missing' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        res.status(200).json({ message: 'Access granted', user: decoded });
    } catch (error) {
        console.error('Error verifying token:', error.message);
        res.status(403).json({ error: 'Invalid token' });
    }
});

// Use Error Handling Middleware
app.use(errorHandler);

// Start Server
app.listen(4000, () => console.log('Server running on http://localhost:4000'));
