# Password Generator React

A simple and secure password generator built with React. This application allows users to generate strong, customizable passwords with options for length, character types, and more.

## Features

- Generate passwords with customizable length (8-128 characters)
- Include/exclude uppercase letters, lowercase letters, numbers, and special characters
- Copy generated password to clipboard

## Tech Stack

- **Frontend**: React 18
- **Styling**: CSS
- **Build Tool**: Vite
- **CI/CD**: Jenkins with SonarQube analysis

## Installation

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Password-Generator-React.git
   cd Password-Generator-React
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

1. Adjust the password length using the slider.
2. Select the character types to include (uppercase, lowercase, numbers, symbols).
3. Click "Generate Password" to create a new password.
4. Click the copy icon to copy the password to your clipboard.

## CI/CD Pipeline

The project uses Jenkins for continuous integration and deployment:

- **Install**: Installs Node.js dependencies.
- **Analyze**: Runs SonarQube code analysis.
- **Build**: Builds the React application.
- **Package**: Creates a Docker image.
- **Publish**: Pushes the image to Docker Hub.

The pipeline is triggered on GitHub pushes.

## Project Structure

```
Password-Generator-React/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── App.css
│   ├── assets/
│   └── Components/
│       ├── PassGenComp.jsx
│       └── PassGenStyle.css
├── Dockerfile
├── Jenkinsfile
├── package.json
└── README.md
```

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.


## Acknowledgments

- Built with [React](https://reactjs.org/).
- CI/CD with [Jenkins](https://www.jenkins.io/).
