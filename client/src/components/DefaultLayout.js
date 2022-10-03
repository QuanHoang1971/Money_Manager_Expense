import React from "react";
import "../resources/default-layout.css";
import { Menu, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";

export default function DefaultLayout(props) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("money-user"));
  const menu = (
    <Menu
      items={[
        {
          label: (
            <li
              onClick={() => {
                localStorage.removeItem("money-user");
                navigate("/login");
              }}
            >
              Logout
            </li>
          ),
        },
      ]}
    />
  );

  return (
    <div className="layout">
      <div className="header d-flex justify-content-between align-items-center">
        <div>
          <h1 className="logo">Money</h1>
        </div>
        <div>
          <Dropdown overlay={menu} placement="bottomLeft">
            <button className="primary">{user.name}</button>
          </Dropdown>
        </div>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}
