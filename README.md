# SecureCorp Decoy Environment

Containerized, intentionally vulnerable, multi-tier enterprise simulation for cybersecurity testing and adversarial AI training.

## Architecture

- **Client Layer (Frontend):** Professional company portal (`HTML/CSS/JS`) with user lookup, admin access, and response viewer.
- **Gateway Layer (Nginx):** Serves static UI and proxies `/api/*` to backend.
- **Application Layer (Node.js/Express):** Modular routes/controllers/services/middleware with logging + metrics.
- **Data Layer (PostgreSQL):** Preloaded user table with weak credentials.

## Intentional Vulnerabilities

> ⚠️ This project is intentionally insecure and for controlled simulation use only.

- SQL Injection at `GET /user?name=` (string interpolation in SQL query)
- Unauthenticated `GET /admin`
- Weak database credentials and sample passwords
- Exposed ports (`80`, `3000`, `5432`)

## Folder Structure

```text
decoy_app/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── db/
│   └── init.sql
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── nginx/
│   └── nginx.conf
└── docker-compose.yml
```

## Run

```bash
cd decoy_app
docker compose up --build
```

Then open `http://localhost`.

## API Endpoints (through Nginx)

- `GET /api/user?name=<value>`
- `GET /api/admin`
- `GET /api/metrics`

## Presentation Pitch

We developed a containerized, multi-tier decoy web application designed to simulate a real-world enterprise system for cybersecurity experimentation.

The system follows a standard industry architecture consisting of four primary layers:

1. **Client Layer (Frontend)**  
   A browser-based interface that mimics a corporate portal. It allows users to perform operations such as user lookup and accessing administrative panels. This layer communicates with backend APIs through HTTP requests.

2. **Gateway Layer (Nginx Reverse Proxy)**  
   Nginx acts as a reverse proxy that serves static frontend assets and routes API requests to the backend service. This reflects real-world deployment patterns where a gateway manages traffic flow.

3. **Application Layer (Backend)**  
   The backend is built using Node.js and follows a modular architecture with routes, controllers, services, and middleware. It processes business logic, handles database queries, logs requests, and exposes system metrics.

4. **Data Layer (PostgreSQL Database)**  
   A relational database stores user data and credentials. It is initialized with sample records to simulate realistic data access patterns.

The application is intentionally designed with vulnerabilities to simulate real-world cyber threats:

- **SQL Injection vulnerability** in the user lookup endpoint
- **Unauthenticated admin access**
- **Weak credentials stored in the database**
- **Exposed service ports for reconnaissance**

Additionally, the system includes observability features:

- Request logging middleware for tracking activity
- A `/metrics` endpoint for monitoring system behavior
- Structured logs to support attack visualization

All components are containerized using Docker Compose, enabling reproducible deployment and realistic network interaction between services.
