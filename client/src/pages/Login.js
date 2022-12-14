import React, { useEffect, useState } from "react";
import { Form, message } from "antd";
import Input from "antd/lib/input/Input";
import { Link, useNavigate } from "react-router-dom";
import "../resources/authentication.css";
import axios from "axios";
import Spinner from "../components/Spinner";

export default function Login() {
  const [loading, setLoading] = useState(false);
  // login ok sẽ navigate về trang chủ
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", values);
      localStorage.setItem(
        "money-user",
        // ko show password ở localStorage
        JSON.stringify({ ...response.data, password: "" })
      );
      setLoading(false);
      message.success("Login successful");
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("Login failed");
    }
  };

  // useEffect cập nhật vào local để nếu tồn tại item rồi thì sẽ navigate tới trang chủ luôn
  useEffect(() => {
    if (localStorage.getItem("money-user")) {
      navigate("/");
    }
  }, []);
  return (
    <div className="register">
      {loading && <Spinner />}
      <div className="row justify-content-center align-items-center w-100 h-100">
        <div className="col-md-4">
          <Form layout="vertical" onFinish={onFinish}>
            <h1>Login PiPi</h1>

            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/register">
                Not Registered Yet, Click Here To Register
              </Link>
              <button className="primary" type="submit">
                Login
              </button>
            </div>
          </Form>
        </div>

        {/* lottie */}
        <div className="col-md-5">
          <div className="lottie">
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_r3loxc6w.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>
  );
}
