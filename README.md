# 🌍 Travel Planner Application

<div align="center">
  <img src="./screenshots/banner.png" alt="Travel Planner Banner" width="800px">

  ![PHP Version](https://img.shields.io/badge/PHP-7.4+-8892BF.svg)
  ![React Version](https://img.shields.io/badge/React-18.0+-61DAFB.svg)
  ![MySQL Version](https://img.shields.io/badge/MySQL-5.7+-4479A1.svg)
  ![License](https://img.shields.io/badge/License-MIT-green.svg)
  
  <h3>Your complete travel management solution</h3>
  
  <p>
    <a href="#demo">View Demo</a> •
    <a href="#features">Features</a> •
    <a href="#installation">Installation</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#detailed-setup-guide">Setup Guide</a>
  </p>
</div>

## ✨ At a Glance

Travel Planner is a comprehensive web application that streamlines travel planning and booking. With an intuitive user interface and powerful backend, it helps users discover destinations, book accommodations, plan activities, and manage their entire travel experience from a single platform.

## 🎬 Demo <a name="demo"></a>

<div align="center">
  <table>
    <tr>
      <td align="center"><b>Home Page</b></td>
      <td align="center"><b>Destination Search</b></td>
      <td align="center"><b>Booking Process</b></td>
    </tr>
    <tr>
      <td><img src="./screenshots/home.png" width="250px" /></td>
      <td><img src="./screenshots/destinations.png" width="250px" /></td>
      <td><img src="./screenshots/booking.png" width="250px" /></td>
    </tr>
  </table>
</div>

## 🚀 Features <a name="features"></a>

<div align="center">
  <table>
    <tr>
      <td>
        <h3>👤 User Management</h3>
        <ul>
          <li>Secure authentication system</li>
          <li>User profile customization</li>
          <li>Booking history & preferences</li>
          <li>Password recovery with OTP</li>
        </ul>
      </td>
      <td>
        <h3>🌐 Destination Discovery</h3>
        <ul>
          <li>Curated destination catalog</li>
          <li>Advanced search & filtering</li>
          <li>Detailed destination information</li>
          <li>Location-based recommendations</li>
        </ul>
      </td>
      <td>
        <h3>🏨 Accommodation</h3>
        <ul>
          <li>Diverse lodging options</li>
          <li>Price comparison tools</li>
          <li>Rich property details</li>
          <li>Availability calendar</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <h3>📅 Booking System</h3>
        <ul>
          <li>Streamlined booking flow</li>
          <li>Multiple payment options</li>
          <li>Instant confirmation</li>
          <li>Booking management</li>
        </ul>
      </td>
      <td>
        <h3>⭐ Reviews & Ratings</h3>
        <ul>
          <li>Verified customer reviews</li>
          <li>Rating system</li>
          <li>Photo uploads for reviews</li>
          <li>Helpful sorting and filtering</li>
        </ul>
      </td>
      <td>
        <h3>👨‍💼 Admin Tools</h3>
        <ul>
          <li>Comprehensive dashboard</li>
          <li>User and booking management</li>
          <li>Analytics and reports</li>
          <li>Content management</li>
        </ul>
      </td>
    </tr>
  </table>
</div>

## 💻 Tech Stack <a name="tech-stack"></a>

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="40px" /><br />
        <strong>React.js</strong><br />
        Frontend Framework
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" width="40px" /><br />
        <strong>Tailwind CSS</strong><br />
        Styling
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" width="40px" /><br />
        <strong>PHP</strong><br />
        Backend Language
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" width="40px" /><br />
        <strong>MySQL</strong><br />
        Database
      </td>
    </tr>
  </table>
</div>

Additional technologies:
- **Framer Motion**: Animation library for React
- **PHPMailer**: Email functionality
- **JSON Web Tokens**: Authentication mechanism

## 🏗️ Project Structure
```
Travel-Planner/
├── Frontend/               # React frontend application
│   ├── public/             # Public assets
│   ├── src/                # Source files
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── data/           # Mock data and constants
│   │   └── App.jsx         # Main application component
│   ├── index.html          # HTML entry point
│   └── package.json        # Frontend dependencies
│
├── backend/                # PHP backend
│   ├── config/             # Database configuration
│   ├── controllers/        # Business logic
│   ├── utils/              # Utility functions
│   └── *.php               # API endpoints
│
├── database/               # Database schema and migrations
├── PHPMailer/              # PHPMailer library for emails
└── README.md               # Project documentation
```

## Detailed Setup Guide

### Prerequisites
- [XAMPP](https://www.apachefriends.org/download.html) (version 7.4+ recommended)
- [Node.js](https://nodejs.org/) (version 18+ recommended) and npm
- Git (optional, for cloning the repository)

### Step 1: Setting Up XAMPP
1. Download and install XAMPP from the [official website](https://www.apachefriends.org/download.html)
2. Start the XAMPP Control Panel and start both Apache and MySQL services
3. Verify that services are running correctly:
   - Apache should be green and running on port 80
   - MySQL should be green and running on port 3306

### Step 2: Database Setup
1. Open your browser and go to phpMyAdmin: `http://localhost/phpmyadmin`
2. Create a new database:
   ```sql
   CREATE DATABASE travel_planner;
   ```
3. Select the newly created database and import the schema:
   - Click on the "Import" tab
   - Click "Browse" and navigate to `/Applications/XAMPP/xamppfiles/htdocs/img/Travel-Planner/database/travel_planner.sql`
   - Click "Go" to import the schema

Alternatively, you can set up the database manually with these SQL commands:

```sql
CREATE DATABASE travel_planner;
USE travel_planner;

-- Users Table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  is_admin BOOLEAN DEFAULT FALSE,
  registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert admin user
INSERT INTO users (name, email, password, is_admin) VALUES 
('Admin', 'admin@travelplanner.com', '$2y$10$YourHashedPasswordHere', TRUE);

-- Destinations Table
CREATE TABLE destinations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  location VARCHAR(100) NOT NULL,
  description TEXT,
  image VARCHAR(255),
  cost DECIMAL(10,2) NOT NULL,
  rating DECIMAL(3,1),
  reviews INT DEFAULT 0
);

-- Accommodations Table
CREATE TABLE accommodations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  location VARCHAR(100) NOT NULL,
  description TEXT,
  image VARCHAR(255),
  cost DECIMAL(10,2) NOT NULL,
  rating DECIMAL(3,1),
  reviews INT DEFAULT 0
);

-- Bookings Table
CREATE TABLE bookings (
  booking_id VARCHAR(20) PRIMARY KEY,
  user_id INT,
  destination VARCHAR(100),
  accommodation VARCHAR(100),
  check_in_date DATE,
  check_out_date DATE,
  num_nights INT,
  total_cost DECIMAL(10,2),
  booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  admin_status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
  payment_method VARCHAR(50),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Reviews Table
CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  booking_id VARCHAR(20),
  user_id INT,
  rating INT NOT NULL,
  review_text TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (booking_id) REFERENCES bookings(booking_id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- User Queries Table
CREATE TABLE user_queries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  user_name VARCHAR(100),
  user_email VARCHAR(100),
  subject VARCHAR(255),
  message TEXT,
  reply TEXT NULL,
  status ENUM('pending', 'answered') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### Step 3: Clone or Download the Project
1. If using Git, clone the repository to your XAMPP's htdocs folder:
   ```bash
   cd /Applications/XAMPP/xamppfiles/htdocs/img
   git clone https://github.com/yourusername/travel-planner.git Travel-Planner
   ```
2. If not using Git, download the ZIP and extract it to:
   ```
   /Applications/XAMPP/xamppfiles/htdocs/img/Travel-Planner
   ```

### Step 4: Configure Backend
1. Navigate to the backend configuration file:
   ```bash
   cd /Applications/XAMPP/xamppfiles/htdocs/img/Travel-Planner/backend/config
   ```

2. Create or edit the `database.php` file with your MySQL credentials:
   ```php
   <?php
   // Database configuration
   define('DB_SERVER', 'localhost');
   define('DB_USERNAME', 'root');  // Default XAMPP username
   define('DB_PASSWORD', '');      // Default XAMPP password is empty
   define('DB_NAME', 'travel_planner');
   
   // Attempt to connect to MySQL database
   $conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
   
   // Check connection
   if ($conn->connect_error) {
       die("Connection failed: " . $conn->connect_error);
   }
   ?>
   ```

3. Configure the email settings in PHPMailer (if using email features):
   ```php
   // Inside email-sending script
   $mail = new PHPMailer(true);
   $mail->isSMTP();
   $mail->Host = 'smtp.gmail.com';  // Or your SMTP server
   $mail->SMTPAuth = true;
   $mail->Username = 'your-email@gmail.com';
   $mail->Password = 'your-app-password';  // Use app password for Gmail
   $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
   $mail->Port = 587;
   ```

### Step 5: Set Up Frontend
1. Navigate to the Frontend directory:
   ```bash
   cd /Applications/XAMPP/xamppfiles/htdocs/img/Travel-Planner/Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The development server will start, typically at `http://localhost:3000`

### Step 6: Backend Configuration (If Needed)
1. Ensure your API endpoints are correctly pointing to the backend:
   ```javascript
   // Example in your React code
   const API_BASE_URL = 'http://localhost/img/Travel-Planner/backend';
   ```

2. You may need to configure CORS in your PHP backend:
   ```php
   // Add to the top of your PHP API files
   header("Access-Control-Allow-Origin: *");
   header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
   header("Access-Control-Allow-Headers: Content-Type, Authorization");
   ```

### Step 7: Creating Sample Data (Optional)
If you want to populate your database with sample data:

```sql
-- Sample destinations
INSERT INTO destinations (title, location, description, image, cost, rating, reviews) VALUES 
('Great Wall of China', 'Beijing, China', 'One of the Seven Wonders of the World.', 'https://example.com/greatwall.jpg', 499999, 4.9, 8000),
('Taj Mahal', 'Agra, India', 'A symbol of eternal love.', 'https://example.com/tajmahal.jpg', 9999, 4.9, 5500);

-- Sample accommodations
INSERT INTO accommodations (title, location, description, image, cost, rating, reviews) VALUES 
('Luxury Beach Resort', 'Maldives', 'Relax in a private villa with ocean access.', 'https://example.com/resort.jpg', 3499, 4.8, 290),
('Mountain Retreat', 'Swiss Alps', 'Cozy wooden lodge with breathtaking views.', 'https://example.com/lodge.jpg', 4999, 4.9, 340);
```

## Running the Application

### Accessing the Application
1. Frontend: Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

2. Backend API: Available at:
   ```
   http://localhost/img/Travel-Planner/backend/
   ```

### Default User Accounts
For testing purposes, you can use these accounts:

1. Admin Account:
   - Email: admin@travelplanner.com
   - Password: admin123

2. Sample User Account:
   - Email: user@example.com
   - Password: user123

### Testing Features
1. **User Registration**: Create a new account
2. **User Login**: Use the sample account or newly created one
3. **Browse Destinations**: View available destinations
4. **Book Accommodation**: Select dates and complete a booking
5. **Manage Bookings**: View your bookings in the user dashboard
6. **Admin Features**: Log in with the admin account to manage users, bookings, and queries

## Troubleshooting Common Issues

### Database Connection Issues
- **Error**: "Cannot connect to database"
  - **Solution**: Verify MySQL is running in XAMPP Control Panel
  - **Solution**: Double-check database name, username, and password in config file

### API Connection Issues
- **Error**: "Failed to fetch" in browser console
  - **Solution**: Ensure Apache is running
  - **Solution**: Check API endpoint URLs are correct
  - **Solution**: Verify CORS headers are properly set

### Frontend Build Problems
- **Error**: npm dependencies issues
  - **Solution**: Delete node_modules folder and run `npm install` again
  - **Solution**: Make sure you're using a compatible Node.js version

### PHP Errors
- **Error**: "Call to undefined function" or similar
  - **Solution**: Make sure PHP extensions are enabled in php.ini
  - **Solution**: Check XAMPP PHP version is 7.4 or higher

## Additional Resources
- [XAMPP Documentation](https://www.apachefriends.org/documentation.html)
- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
- [PHP Documentation](https://www.php.net/docs.php)
- [MySQL Documentation](https://dev.mysql.com/doc/)

## Contact & Support
- Email: support@travelplanner.com
- GitHub Issues: https://github.com/yourusername/travel-planner/issues
- Developer: Your Name
