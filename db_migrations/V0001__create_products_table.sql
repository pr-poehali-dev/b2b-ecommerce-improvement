CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(500) NOT NULL,
    price INTEGER NOT NULL,
    image_url TEXT NOT NULL,
    original_url TEXT,
    category VARCHAR(100) DEFAULT 'Косметика',
    description TEXT,
    in_stock BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);