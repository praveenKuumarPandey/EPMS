import { Button, Space } from "antd";
import React from "react";
// import { CgWebsite } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { removeToken } from "../../helpers";

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
      <Button className="header_space_brand" href="/" type="link">
         Andamen
      </Button>
      <Space className="auth_buttons">
        {user ? (
          <>
            <Button className="auth_button_login" href="/profile" type="link">
              {user.username}
            </Button>
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
            <Button className="auth_button_login" href="/signin" type="link">
              Login
            </Button>
            <Button
              className="auth_button_signUp"
              href="/signup"
              type="primary"
            >
              SignUp
            </Button>
          </>
        )}
      </Space>
    </Space>
  );
};

export default AppHeader;
