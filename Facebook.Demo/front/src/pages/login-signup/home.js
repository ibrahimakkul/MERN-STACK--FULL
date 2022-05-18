import React from "react";
import "./home.css"

function home() {
  return (
    <div className="body">
       
      <div className="main">

        <input type="checkbox" id="chk" />

        <div className="signup">
          <form>
            <label htmlFor="chk" className="sig">
              Sign up
            </label>

            <div className="user-box">
              <input type="text" title="Enter Username" required />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="text" title="Enter email" required />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input type="password" title="Enter password" required />
              <label>Password</label>
            </div>

            <button>Sign up</button>
          </form>
        </div>

        <div className="login">
          <form>
            <label htmlFor="chk" className="log">
              Login
            </label>

            <div className="user-box">
              <input type="text" title="Enter Username" required />

              <label>Username</label>
            </div>

            <div className="user-box">
              <input type="password" title="Enter password" required />

              <label>Password</label>
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default home;
