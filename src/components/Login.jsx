import { useState } from 'react';
import '../styles/login.css';

/**
 * Login Component
 * 
 * A fully functional UI-only login form with:
 * - Email and password validation
 * - Show/hide password toggle
 * - Remember me checkbox
 * - Fake loading state with setTimeout
 * - Animated success/error messages
 */
const Login = () => {
  // ---- State Management ----
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // ---- Validation Helpers ----

  /**
   * Validates email format using a standard regex pattern.
   * @param {string} value - The email string to validate.
   * @returns {string} Error message or empty string if valid.
   */
  const validateEmail = (value) => {
    if (!value.trim()) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return 'Please enter a valid email address';
    return '';
  };

  /**
   * Validates password meets minimum length requirement.
   * @param {string} value - The password string to validate.
   * @returns {string} Error message or empty string if valid.
   */
  const validatePassword = (value) => {
    if (!value) return 'Password is required';
    if (value.length < 6) return 'Password must be at least 6 characters';
    return '';
  };

  // ---- Event Handlers ----

  /**
   * Handles form submission.
   * Validates all fields, shows loading state, then shows success or errors.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous success message
    setSuccessMessage('');

    // Run validation on both fields
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const newErrors = { email: emailError, password: passwordError };
    setErrors(newErrors);

    // If any errors exist, stop here
    if (emailError || passwordError) return;

    // Start fake loading state
    setIsLoading(true);

    // Simulate network request with a 1.5 second delay
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage('Login Successful');
    }, 1500);
  };

  /**
   * Clears the error for a specific field when the user starts typing.
   * @param {string} field - The field name ('email' or 'password').
   */
  const clearError = (field) => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
    // Also clear success when editing
    if (successMessage) setSuccessMessage('');
  };

  // ---- Render ----

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Header */}
        <div className="login-header">
          <span className="icon">🔐</span>
          <h1>Welcome Back</h1>
          <p>Sign in to your account to continue</p>
        </div>

        {/* Form */}
        <form className="login-form" onSubmit={handleSubmit} noValidate>
          {/* Email Field */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  clearError('email');
                }}
                className={errors.email ? 'input-error' : ''}
                autoComplete="email"
              />
            </div>
            {errors.email && (
              <span className="error-message">
                <span className="error-icon">⚠</span>
                {errors.email}
              </span>
            )}
          </div>

          {/* Password Field */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  clearError('password');
                }}
                className={errors.password ? 'input-error' : ''}
                autoComplete="current-password"
              />
              {/* Toggle password visibility */}
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                tabIndex={-1}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
            {errors.password && (
              <span className="error-message">
                <span className="error-icon">⚠</span>
                {errors.password}
              </span>
            )}
          </div>

          {/* Options Row */}
          <div className="options-row">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <a className="forgot-link" href="#" onClick={(e) => e.preventDefault()}>
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="login-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner" />
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        {/* Success Message */}
        {successMessage && (
          <div className="success-banner">
            <span className="success-icon">✅</span>
            <span className="success-text">{successMessage}</span>
            <span className="success-sub">Redirecting to dashboard...</span>
          </div>
        )}

        {/* Footer */}
        <div className="login-footer">
          Don&apos;t have an account?{' '}
          <a href="#" onClick={(e) => e.preventDefault()}>
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
