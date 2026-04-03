CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT
);

INSERT INTO users (name, password) VALUES
('admin', 'admin123'),
('user1', 'password'),
('guest', 'guest');
