# Career Path Guidance Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern web application that helps users discover suitable career paths through an interactive quiz system and provides detailed career insights.

## Features

- 🔍 **Interactive Career Quiz**: Comprehensive assessment with 8 carefully designed questions
- 📊 **Smart Scoring System**: Advanced algorithm to match user preferences with career paths
- 👤 **User Authentication**: Secure login with Firebase Authentication
- 📱 **Responsive Design**: Works seamlessly on all devices
- 🎯 **Detailed Career Insights**: Information about required skills, salary ranges, and growth potential
- 📈 **Career Planning Tools**: Resources for skill development and career path planning

## Tech Stack

- **Frontend**: React with TypeScript
- **Routing**: React Router
- **Authentication**: Firebase
- **Styling**: CSS with modern design principles
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/career-app.git
cd career-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your Firebase configuration:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
career-app/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── data/          # Quiz questions and career data
│   ├── styles/        # CSS styles
│   ├── firebaseConfig.ts  # Firebase configuration
│   └── App.tsx        # Main application component
├── public/            # Static assets
└── package.json       # Project dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Career data and insights are based on industry research and trends
- Icons and images from [Unsplash](https://unsplash.com) and [Freepik](https://freepik.com)
