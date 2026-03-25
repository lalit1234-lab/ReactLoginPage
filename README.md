# 🔐 React Login Page

A modern, responsive **UI-only login page** built with React.js and Vite. Features glassmorphism design, form validation, animated transitions, and a polished user experience — all without any backend or CSS frameworks.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/Styling-Plain%20CSS-1572B6?logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

| Feature | Description |
|---|---|
| 📧 **Email Validation** | Regex-based format checking with real-time error clearing |
| 🔑 **Password Validation** | Minimum 6 character enforcement |
| 👁️ **Show/Hide Password** | Toggle password visibility with eye icon |
| ☑️ **Remember Me** | Custom styled checkbox |
| ⏳ **Loading State** | Animated spinner with disabled button during fake sign-in |
| ✅ **Success Message** | Animated green banner on valid login |
| 🎨 **Glassmorphism UI** | Frosted glass card with gradient background |
| 📱 **Fully Responsive** | Optimized for mobile (≤480px) and desktop |
| 🎬 **Smooth Animations** | Fade-in, slide-down, and hover micro-interactions |

---

## 🛠️ Tech Stack

- **React 19** — Functional components with hooks (`useState`)
- **Vite 8** — Lightning-fast dev server and build tool
- **Plain CSS** — No Tailwind, no Bootstrap, no UI libraries
- **Google Fonts** — Inter typeface for modern typography

---

## 📁 Project Structure

```
src/
├── components/
│   └── Login.jsx        # Login form component with validation logic
├── styles/
│   └── login.css        # All login page styles (glassmorphism, animations)
├── App.jsx              # Root component
├── index.css            # Global reset & theme variables
└── main.jsx             # React entry point
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/lalit1234-lab/ReactLoginPage.git
cd ReactLoginPage

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at **http://localhost:5173/**

### Build for Production

```bash
npm run build
```

The optimized output will be in the `dist/` folder.

---

## ⚙️ How It Works

This is a **frontend-only** application with no real authentication.

1. **Form Submission** — On clicking "Sign In", the inputs are validated client-side.
2. **Validation Rules**:
   - Email must match a standard email pattern (`user@domain.tld`)
   - Password must be at least 6 characters long
3. **Mock Login** — If validation passes, a 1.5-second `setTimeout` simulates a network request, then a success banner is displayed.
4. **Error Handling** — Inline error messages appear below each invalid field and auto-clear when the user starts typing.

### Key Code Concepts

```jsx
// State management with useState
const [email, setEmail] = useState('');
const [isLoading, setIsLoading] = useState(false);

// Email validation with regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Fake async login with setTimeout
setTimeout(() => {
  setIsLoading(false);
  setSuccessMessage('Login Successful');
}, 1500);
```

---

## 🎨 Design Details

- **Background** — Deep purple-to-navy gradient (`#0f0c29 → #302b63 → #24243e`)
- **Card** — Glassmorphism with `backdrop-filter: blur(20px)` and subtle inner glow
- **Button** — Animated gradient (`indigo → violet → purple`) with hover lift effect
- **Typography** — [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts
- **Colors** — Indigo accent (`#6366f1`), red errors (`#f87171`), green success (`#4ade80`)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ using React + Vite
</p>
