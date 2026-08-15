# E-Commerce Management System

A full-stack e-commerce inventory management application built to manage products through a RESTful API and a responsive web interface.

## Features

* View all products in an inventory dashboard
* Add new products
* Edit existing products
* Delete products
* Track product price, stock, description, image, and active status
* RESTful API for product management
* Responsive UI built with Material UI
* SQL Server database for persistent data storage
* Swagger API documentation

## Tech Stack

### Frontend

* React
* TypeScript
* Material UI
* React Router
* Axios
* Vite

### Backend

* C#
* ASP.NET Core Web API
* Entity Framework Core
* REST APIs

### Database & Tools

* SQL Server
* Docker
* Swagger

## Architecture

The application follows a full-stack architecture:

```text
React + TypeScript
       │
       │ HTTP / Axios
       ▼
ASP.NET Core Web API
       │
       │ Entity Framework Core
       ▼
SQL Server
```

## Project Structure

```text
ecommerce-project/
├── ecommerce-client/       # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── router.tsx
│   └── package.json
│
└── ecommerce-api/          # ASP.NET Core backend
    ├── Controllers/
    ├── Models/
    ├── DTOs/
    ├── Data/
    └── Program.cs
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

* .NET SDK
* Node.js
* Docker Desktop
* SQL Server

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ecommerce-project
```

### 2. Start SQL Server

The application uses SQL Server running through Docker.

```bash
docker run -e "ACCEPT_EULA=Y" \
-e "MSSQL_SA_PASSWORD=<your-password>" \
-p 1433:1433 \
--name ecommerce-sql \
-d mcr.microsoft.com/mssql/server:2022-latest
```

### 3. Run the Backend

Navigate to the API project:

```bash
cd ecommerce-api
dotnet restore
dotnet run
```

The API will be available at:

```text
http://localhost:5001
```

Swagger documentation can be accessed at:

```text
http://localhost:5001/swagger
```

### 4. Run the Frontend

In a separate terminal:

```bash
cd ecommerce-client
npm install
npm run dev
```

The frontend will be available at the URL provided by Vite, typically:

```text
http://localhost:5173
```

## API Endpoints

| Method | Endpoint                         | Description           |
| ------ | -------------------------------- | --------------------- |
| GET    | `/api/products/Get-All-Products` | Retrieve all products |
| POST   | `/api/products`                  | Create a product      |
| PUT    | `/api/products/{id}`             | Update a product      |
| DELETE | `/api/products/{id}`             | Delete a product      |

## Product Data

Each product contains information such as:

* Product name
* Description
* Price
* Stock quantity
* Image URL
* Active status
* Created date

## Future Improvements

* User authentication and authorization
* Product categories
* Search and filtering
* Inventory alerts for low-stock products
* Automated testing

## Author

**Akshat**
