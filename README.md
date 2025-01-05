# Chat-App

A real-time chat application built with modern web technologies:
- **Frontend**: React.js with Tailwind CSS for a responsive and beautiful UI.
- **Backend**: Node.js and Express.js for a robust and scalable server.
- **Real-Time Communication**: Socket.IO for seamless bidirectional communication.
- **Database**: MongoDB for efficient data storage and retrieval.

---

## Features

- **User Authentication**: Sign up, log in, and secure sessions using JSON Web Tokens (JWT).
- **Real-Time Messaging**: Instantly send and receive messages with Socket.IO.
- **Responsive Design**: Tailwind CSS ensures the application looks great on all devices.
- **Persistent Chat History**: Chat data is stored in MongoDB.
- **Group Chats**: Create and participate in group conversations.
- **Typing Indicator**: See when the other user is typing.
- **Read Receipts**: Know when your messages are read.

---

## Installation and Setup

Follow these steps to set up the project on your local machine:

### Prerequisites
- Node.js and npm installed on your system.
- MongoDB installed and running locally or access to a MongoDB Atlas cluster.

### Clone the Repository
```bash
git clone https://github.com/naitikmi/ChatHive.git
cd ChatHive
```

### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add the following variables:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

The application will be available at ``.

---

## Folder Structure

```plaintext
chat-app/
├── client/         # Frontend React application
├── server/         # Backend Express server
└── README.md       # Project documentation
```

---

## Technologies Used

### Frontend
- **React.js**: Component-based architecture for building dynamic UIs.
- **Tailwind CSS**: Utility-first CSS framework for styling.

### Backend
- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Minimalist web framework for Node.js.
- **Socket.IO**: Real-time, bidirectional communication.
- **MongoDB**: NoSQL database for storing application data.

---


## Contributing

Contributions are welcome! If you have any ideas, suggestions, or find bugs, feel free to open an issue or submit a pull request.

---


## Acknowledgments

- Thanks to the open-source community for providing the tools and libraries used in this project.

---


## Contact

For any inquiries, feel free to reach out:
- **Email**: naitikm947@example.com
- **GitHub**: [naitikmi](https://github.com/naitikmi)
