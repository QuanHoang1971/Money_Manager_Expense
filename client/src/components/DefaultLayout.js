import React from "react";
import "../resources/default-layout.css";
import { Menu, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";

export default function DefaultLayout(props) {
  const navigate = useNavigate();
  // lưu user ở localStorage để login và xóa đi khi logout
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
      {/* flex bootstrap */}
      <div className="header d-flex justify-content-between align-items-center">
        <div>
          <h1 className="logo">PiPi</h1>
        </div>
        <div>
          <Dropdown overlay={menu} placement="bottomLeft">
            <button className="primary username text-uppercase">
              {user.name}
            </button>
          </Dropdown>
        </div>
      </div>
      {/* sau này muốn có thêm nhiều trang mà layout giống nhau thì truyền props.children  */}
      <div className="content">{props.children}</div>
    </div>
  );
}
