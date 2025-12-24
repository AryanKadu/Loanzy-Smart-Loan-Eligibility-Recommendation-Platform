import React from "react";

const LoginPage = () => {
  return (
    <div className="page">

      {/* Header */}
      <header className="header">
        <div className="logo">LOGO</div>
      </header>

      {/* Login Card */}
      <main className="container">
        <div className="card">
          <h2>Login</h2>
          <p className="subtitle">
            Enter your credentials to access your account
          </p>

          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="field">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <button className="primary-btn">Login</button>
          <button className="secondary-btn">Create New Account</button>

          <p className="forgot">Forgot Password?</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">Footer Placeholder</footer>

      {/* Styles */}
      <style>{`
        * {
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        body {
          margin: 0;
        }

        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #fff;
        }

        /* Header */
        .header {
          height: 64px;
          border-bottom: 1px solid #ccc;
          display: flex;
          align-items: center;
          padding: 0 24px;
        }

        .logo {
          width: 110px;
          height: 30px;
          border: 1px solid #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        /* Center area */
        .container {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 24px;
        }

        /* Card */
        .card {
          width: 100%;
          max-width: 400px;
          border: 1px solid #ccc;
          padding: 24px;
        }

        h2 {
          margin: 0 0 8px 0;
        }

        .subtitle {
          font-size: 14px;
          margin-bottom: 24px;
        }

        .field {
          display: flex;
          flex-direction: column;
          margin-bottom: 16px;
        }

        label {
          font-size: 14px;
          margin-bottom: 6px;
        }

        input {
          height: 42px;
          border: 1px solid #000;
          padding: 0 10px;
          font-size: 14px;
        }

        /* Buttons */
        button {
          width: 100%;
          height: 44px;
          border: 1px solid #000;
          background: transparent;
          cursor: pointer;
          font-size: 14px;
        }

        .primary-btn {
          margin-top: 8px;
        }

        .secondary-btn {
          margin-top: 12px;
        }

        .forgot {
          margin-top: 16px;
          font-size: 13px;
          text-align: center;
          cursor: pointer;
        }

        /* Footer */
        .footer {
          height: 56px;
          border-top: 1px solid #ccc;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        /* Tablet */
        @media (max-width: 768px) {
          .card {
            padding: 20px;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .header {
            padding: 0 16px;
          }

          .card {
            padding: 16px;
          }

          h2 {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
