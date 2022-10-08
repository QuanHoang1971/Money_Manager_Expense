import { Form, message } from "antd";
import Input from "antd/lib/input/Input";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../resources/authentication.css";
import axios from "axios";
import Spinner from "../components/Spinner";

function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(true);

  // tạo hàm onFinish cho Form khi click , setLoading trong khi await API
  const onFinish = async (values) => {
    try {
      setLoading(true);
      await axios.post("/api/users/register", values);
      message.success("Registration Successfull");
      setLoading(false);
    } catch (error) {
      message.error("Something went wrong");
      setLoading(false);
    }
  };

    useEffect(() => {
    if (localStorage.getItem("money-user")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="register">
      {loading && <Spinner />}

      {/* bootstrap chia làm 2 phần, animation và register info */}
      <div className="row justify-content-center align-items-center w-100 h-100">
        {/* animation */}
        <div className="col-md-6">
          <div className="lottie">
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_06a6pf9i.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div className="col-md-4">
          {/* vertical để cách dãn các dòng ra */}
          <Form layout="vertical" onFinish={onFinish}>
            <h1>REGISTER</h1>

            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/login">Already Registered , Click Here To Login</Link>
              <button className="secondary">REGISTER</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
