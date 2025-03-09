# Twitter Clone (Backend-Only)

This is a backend-only Twitter clone built using **Node.js, Express, and MongoDB**. It provides a REST API for core functionalities such as authentication, tweeting, following users, liking posts, and notifications. API requests can be tested using **Postman**.

## Tech Stack

### Languages & Frameworks:
- **Node.js** (JavaScript runtime)
- **Express.js** (Web framework for Node.js)
- **MongoDB** (NoSQL Database)
- **Mongoose** (MongoDB ODM)

### Modules & Dependencies:
- **bcryptjs** (Password hashing)
- **Cloudinary** (Image hosting)
- **jsonwebtoken** (Authentication via JWTs)
- **dotenv** (Environment variables)
- **cookie-parser** (Handling cookies)

## Features
- **User Authentication** (Signup, Login, JWT-based authentication)
- **Posting Tweets** (Create, Read, Delete tweets)
- **Following Users** (Follow/unfollow functionality)
- **Liking Tweets** (Like/unlike tweets)
- **Notifications** (Receive notifications for likes, follows, etc.)

## Project Structure
This project follows the **MVC (Model-View-Controller) architecture**. Since this is a backend-only project, there is no "View" component.

### Folder & File Structure
```
📦 twitter-clone-backend
 ┣ 📂 controllers
 ┃ ┣ 📜 auth.control.js
 ┃ ┣ 📜 notification.control.js
 ┃ ┣ 📜 post.control.js
 ┃ ┣ 📜 user.control.js
 ┣ 📂 models
 ┃ ┣ 📜 notification.model.js
 ┃ ┣ 📜 post.model.js
 ┃ ┣ 📜 user.model.js
 ┣ 📂 routes
 ┃ ┣ 📜 auth.route.js
 ┃ ┣ 📜 notification.route.js
 ┃ ┣ 📜 post.route.js
 ┃ ┣ 📜 user.route.js
 ┣ 📜 .env
 ┣ 📜 server.js
 ┣ 📜 package.json
```

##  Installation & Setup
### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+ recommended)
- **MongoDB** (locally installed or MongoDB Atlas for cloud)

### 1️⃣ Clone the repository
```sh
git clone https://github.com/yourusername/twitter-clone-backend.git
cd twitter-clone-backend
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the root directory and add the following:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4️⃣ Run the server
```sh
npm start
```

The backend will run on `http://localhost:5000/`

##  API Documentation

### Authentication Routes
| Method | Endpoint           | Description        |
|--------|-------------------|--------------------|
| POST   | `/api/auth/signup` | User Registration |
| POST   | `/api/auth/login`  | User Login        |

### Post Routes
| Method | Endpoint          | Description        |
|--------|-------------------|--------------------|
| POST   | `/api/posts/`     | Create a Post     |
| GET    | `/api/posts/`     | Get all Posts     |
| DELETE | `/api/posts/:id`  | Delete a Post     |

### User Routes
| Method | Endpoint                | Description          |
|--------|-------------------------|----------------------|
| GET    | `/api/users/:id`        | Get user profile    |
| POST   | `/api/users/follow/:id` | Follow a user       |
| POST   | `/api/users/unfollow/:id` | Unfollow a user    |

### Notification Routes
| Method | Endpoint              | Description          |
|--------|-----------------------|----------------------|
| GET    | `/api/notifications/` | Get user notifications |


##  Testing with Postman
- Import the provided **Postman collection** [here](https://www.postman.com/gold-trinity-127482/workspace/my-workspace/collection/41742693-e6cdc9fe-dea8-4faa-9e32-1231a06c1d3c?action=share&creator=41742693) 
- Make API requests to test authentication, posting, following, and liking features.

##  Deployment (Optional)
You can deploy the backend using:
- **Render**
- **Railway**
- **Heroku**
- **Vercel (Serverless Functions)**




