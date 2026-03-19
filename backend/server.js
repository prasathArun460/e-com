const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Configure Multer for local uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Ensuring the uploads directory exists
    const fs = require('fs');
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Initialize SQLite Database
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to SQLite database.');

    // Create Tables
    db.serialize(() => {
      // Products Table
      db.run(`CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        brand TEXT NOT NULL,
        price REAL NOT NULL,
        category TEXT NOT NULL,
        description TEXT,
        image_url TEXT
      )`);

      // Users/Customers Table
      db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        phone TEXT,
        orders INTEGER DEFAULT 0,
        joinDate TEXT
      )`);

      // Seed Initial Users Data if Empty
      db.get('SELECT count(*) as count FROM users', (err, row) => {
        if (row && row.count === 0) {
          const stmt = db.prepare('INSERT INTO users (name, email, phone, orders, joinDate) VALUES (?, ?, ?, ?, ?)');
          stmt.run('Rajesh Kumar', 'rajesh.k@gmail.com', '+91 9876543210', 4, '2023-11-12');
          stmt.run('Anand Construction', 'purchase@anandbuild.in', '+91 8765432109', 12, '2023-08-05');
          stmt.run('Priya Sharma', 'priya.sharma99@yahoo.com', '+91 7654321098', 1, '2024-01-20');
          stmt.run('TechPark Maint.', 'maintenance@techpk.com', '+91 9988776655', 25, '2022-04-18');
          stmt.finalize();
          console.log('Seeded dummy users.');
        }
      });
      
      // Seed Initial Products Data if Empty
      db.get('SELECT count(*) as count FROM products', (err, row) => {
        if (row && row.count === 0) {
          const stmt = db.prepare('INSERT INTO products (title, brand, price, category, description, image_url) VALUES (?, ?, ?, ?, ?, ?)');
          stmt.run('16A Modular Switch', 'SDE Premium', 45.00, 'Switches', 'Standard modular switch', '/assets/sde_product_switch_1773906989380.png');
          stmt.run('PVC Conduit Pipe 25mm', 'Polycab', 120.00, 'Electric Pipes', 'Rigid PVC conduit', '/assets/sde_product_conduit_1773907009268.png');
          stmt.run('Copper Wire 1.5 sq mm', 'Finolex', 950.00, 'Electrical', 'Multi-strand copper wire roll', '/assets/sde_product_wire_1773907065006.png');
          stmt.run('Standard PVC Water Pipe 1"', 'Ashirvad', 320.00, 'Water Pipes', 'Heavy duty water pipe', '/assets/sde_product_waterpipe_1773907033403.png');
          stmt.run('Fan Junction Box', 'Polycab', 65.00, 'Electric Pipes', 'Ceiling fan junction box', '/assets/sde_product_flexbox_1773907084517.png');
          stmt.run('Heavy Duty PVC Wire Box', 'Anchor', 85.00, 'Electric Pipes', 'Standard wire junction box', '/assets/sde_product_junction_1773907111064.png');
          stmt.finalize();
          console.log('Seeded initial products.');
        }
      });
    });
  }
});

// API Routes

// 1. Get all products
app.get('/api/products', (req, res) => {
  db.all('SELECT * FROM products ORDER BY id DESC', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// 2. Add new product (with image upload)
app.post('/api/products', upload.single('image'), (req, res) => {
  const { title, brand, price, category, description } = req.body;
  let imageUrl = null;
  
  if (req.file) {
    imageUrl = `/uploads/${req.file.filename}`;
  }

  const sql = `INSERT INTO products (title, brand, price, category, description, image_url) VALUES (?, ?, ?, ?, ?, ?)`;
  const params = [title, brand, parseFloat(price), category, description, imageUrl];

  db.run(sql, params, function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID, message: 'Product added successfully' });
  });
});

// 3. Get all users Data
app.get('/api/users', (req, res) => {
  db.all('SELECT * FROM users ORDER BY joinDate DESC', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
