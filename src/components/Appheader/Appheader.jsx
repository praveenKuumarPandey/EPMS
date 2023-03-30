import { Button, Space } from "antd";
import React from "react";
// import { CgWebsite } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { removeToken } from "../../helpers";
import { Link } from "react-router-dom";

const AppHeader = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuthContext();

  const handleLogout = () => {
    removeToken();
    setUser(undefined);
    navigate("/signin");
  };

  return (
    <Space className="header_space">

    <Link to="/" >
    <Button className="header_space_brand" type="link">
    Andamen
    </Button>
    </Link>
      <Space className="auth_buttons">
        {user ? (
          <>
          <Link to="/profile" >
            <Button className="auth_button_login" type="link">
              {user.username}
            </Button>
            </Link>
            <Button
              className="auth_button_signUp"
              type="primary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
          <Link to="/signin" >
            <Button className="auth_button_login"  type="link">
              Login
            </Button>
            </Link>
            <Link to="/signup" >
            <Button
              className="auth_button_signUp"              
              type="primary"
            >
              SignUp
            </Button>
            </Link>
          </>
        )}
      </Space>
    </Space>
  );
};

export default AppHeader;
