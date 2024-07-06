
This repository contains three parts of the project:
- **Back-end**: Built with NestJS
- **Website**: Built with Next.js
- **Mobile App**: Built with React Native using Expo

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:
- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) (for the mobile app)
- [Expo Go](https://expo.dev/client) (for the mobile app, available on iOS and Android)

### Running the Back-end, Database, and Website

To run the back-end, database, and website together, use Docker Compose:

1. Navigate to the project root directory.
2. Run the following command:

    docker-compose -f docker-compose.dev.yml up

This will start the back-end, database, and website. ( http://localhost:3000 )

### Running the Mobile App

To run the mobile app, follow these steps:

1. Navigate to the `mobile-app` directory:
    
    cd mobile-app

2. Start the Expo development server:

    npm run start

3. Scan the QR code displayed in the terminal using the Expo Go app on your mobile device.

## Project Structure

- **back-end/**: Contains the NestJS back-end application.
- **website/**: Contains the Next.js website.
- **mobile-app/**: Contains the React Native mobile application.

