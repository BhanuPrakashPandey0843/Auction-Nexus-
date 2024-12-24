# Auction Nexus

Auction Nexus is a comprehensive online auction platform built with modern web technologies, offering seamless and intuitive functionality for hosting and participating in auctions.

## Features

- **User Registration and Authentication**: Secure user sign-up, login, and account management.
- **Real-Time Bidding**: Participate in live auctions with real-time updates.
- **Item Management**: Add, edit, and manage auction items.
- **Categories and Filters**: Browse items by categories and apply filters for efficient searching.
- **Admin Dashboard**: Comprehensive admin panel for managing users, auctions, and site settings.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: PostgreSQL
- **Real-Time Communication**: WebSocket/Socket.IO for live bidding
- **API Testing**: Postman

## Installation

### Prerequisites
Ensure you have the following installed on your system:

- Node.js (>= v14)
- PostgreSQL (>= v12)
- npm or yarn

### Steps to Run Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/auction-nexus.git
   cd auction-nexus
   ```

2. **Setup Database**:
   - Create a PostgreSQL database named `auction_nexus`.
   - Import the schema from `schema.sql` (provided in the repository).

   ```bash
   psql -U postgres -d auction_nexus -f schema.sql
   ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the root directory and add the following:
     ```env
     DATABASE_URL=postgres://<username>:<password>@localhost:5432/auction_nexus
     PORT=5000
     JWT_SECRET=your_jwt_secret
     SOCKET_PORT=5001
     ```

4. **Install Dependencies**:
   - Backend:
     ```bash
     cd backend
     npm install
     ```
   - Frontend:
     ```bash
     cd frontend
     npm install
     ```

5. **Start the Application**:
   - Backend:
     ```bash
     cd backend
     npm start
     ```
   - Frontend:
     ```bash
     cd frontend
     npm start
     ```

6. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## API Endpoints

Below are some of the core API endpoints:

### **User Authentication**
- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: User login.

### **Auctions**
- **GET /api/auctions**: Fetch all auctions.
- **POST /api/auctions**: Create a new auction (Admin only).

### **Bids**
- **POST /api/bids**: Place a bid on an auction.
- **GET /api/bids/:auctionId**: Fetch bids for a specific auction.

## Folder Structure

```
auction-nexus/
|-- backend/
|   |-- controllers/
|   |-- models/
|   |-- routes/
|   |-- server.js
|
|-- frontend/
|   |-- src/
|       |-- components/
|       |-- pages/
|       |-- App.js
|
|-- schema.sql
|-- README.md
```

## Contributing

We welcome contributions to Auction Nexus! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

Auction Nexus is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For any queries or support, please contact us at [support@auctionnexus.com](mailto:support@auctionnexus.com).

