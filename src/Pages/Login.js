import { Breadcrumb, Checkbox, Divider, Form, Input, Typography } from "antd";
import "../css/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FacebookFilled, GoogleOutlined } from "@ant-design/icons";
export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="mainContainer">
      <div className="title">
        <div className="ele">
          <Typography.Title className="heading">My Account</Typography.Title>
          <Breadcrumb
            items={[
              {
                name: "Home",
                title: "Home",
                icon: "home",
                className: "breadcrumb-item",
                onClick: () => navigate("/"),
              },
              { name: "My Account", title: "My Account" },
            ]}
          />
        </div>
      </div>
      <Content />
    </div>
  );
}
function Content() {
  const [page, setPage] = useState("signup");
  return (
    <div className="cont">
      {page === "login" && <LoginForm />}
      {page === "signup" && <SignUpForm />}
      <Divider type="vertical" style={{ height: 300 }} className="max" />
      <Divider style={{ width: 200 }} className="min">
        OR
      </Divider>
      <MainContent btn={page} setBtn={setPage} />
    </div>
  );
}
function LoginForm() {
  return (
    <div className="loginForm">
      <Typography.Title>Login</Typography.Title>
      <Form layout="vertical" className="form">
        <Form.Item
          label={"Username or email address "}
          name={"username"}
          rules={[
            {
              required: true,
              message: "Please input your username or email!",
            },
          ]}
        >
          <Input className="field" />
        </Form.Item>
        <Form.Item
          label={"Password"}
          name={"password"}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password className="field"></Input.Password>
        </Form.Item>
        <button className="inBtn">Log in</button>
      </Form>
      <div
        className="remember"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 20,
          fontFamily: "Work Sans",
        }}
      >
        <Checkbox>Remember me</Checkbox>
        <Link
          className="forgot"
          href="#"
          style={{ color: "rgb(237, 156, 75)" }}
        >
          Lost your password?
        </Link>
      </div>
      <div style={{ width: "80%" }}>
        <Divider
          style={{
            fontSize: 18,
            fontWeight: 600,
            textTransform: "uppercase",
            // width: "80%",
          }}
        >
          Or login with
        </Divider>
      </div>
      <div className="alter">
        <button className="social face">
          <FacebookFilled className="ico" />
          Facebook
        </button>
        <button className="social google">
          <GoogleOutlined className="ico" />
          Google
        </button>
      </div>
    </div>
  );
}
function SignUpForm() {
  return (
    <div className="registerForm">
      <Typography.Title>Register</Typography.Title>
      <Form layout="vertical">
        <Form.Item
          label={"Email address "}
          name={"email"}
          rules={[
            {
              required: true,
              message: "Please input your Email!",
              type: "email",
            },
          ]}
        >
          <Input className="field" />
        </Form.Item>
      </Form>
      <div className="content">
        <div className="top">
          A link to set a new password will be sent to your email address.
        </div>
        <div className="bottom">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our privacy policy.
        </div>
      </div>
      <button className="btn">Register</button>
    </div>
  );
}

function MainContent({ btn, setBtn }) {
  return (
    <div className="right">
      <div className="tit" style={{ textTransform: "uppercase" }}>
        Login
      </div>
      <div className="cont">
        Registering for this site allows you to access your order status and
        history. Just fill in the fields below, and we'll get a new account set
        up for you in no time. We will only ask you for information necessary to
        make the purchase process faster and easier.
      </div>
      <div className="btn-cont">
        {btn === "login" && (
          <button
            onClick={() => {
              setBtn("signup");
            }}
          >
            Register
          </button>
        )}
        {btn === "signup" && (
          <button
            onClick={() => {
              setBtn("login");
            }}
          >
            {" "}
            Login
          </button>
        )}
      </div>
    </div>
  );
}
