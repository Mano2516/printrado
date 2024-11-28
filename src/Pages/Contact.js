import { Breadcrumb, Collapse, Form, Input, Typography } from "antd";
import "../css/contact.css";
import { useNavigate } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import ReactInputMask from "react-input-mask";

export default function Contact({ setNavigate, itemToDisplay }) {
  const navigate = useNavigate();

  return (
    <div className="MainContainer">
      <div className="title">
        <div className="ele">
          <Typography.Title className="heading">Contact us</Typography.Title>
          <Breadcrumb
            items={[
              {
                name: "Home",
                title: "Home",
                icon: "home",
                className: "breadcrumb-item",
                onClick: () => {
                  navigate("/");
                  setNavigate("home");
                },
              },
              { name: "Contact us", title: "Contact us" },
            ]}
          />
        </div>
      </div>
      <div className="contentContainer">
        <ContactForm />
        <Faq />
      </div>
    </div>
  );
}
function ContactForm() {
  return (
    <div className="formContainer">
      <div className="location">
        <Typography.Title style={{ fontFamily: "Urbanist" }}>
          New Cairo
        </Typography.Title>
        <div>
          <Typography.Paragraph className="p">
            5th Settlement
          </Typography.Paragraph>
          <Typography.Paragraph className="p">
            South Investors 4 - Building 244 - Gamal Abdelnasser Road
          </Typography.Paragraph>
        </div>
        <div>
          <Typography.Paragraph className="p">
            Sunday - Thursday {<span>16:00 - 18:00</span>}
          </Typography.Paragraph>
        </div>
        <div>
          <Typography.Paragraph className="p">
            011-011-60177
          </Typography.Paragraph>
        </div>
        <div>
          <Typography.Paragraph className="p">
            This is a logistic branch, not a showroom. Prior reservation and
            coordination is "MANDATORY" before visiting.
          </Typography.Paragraph>
        </div>
      </div>
      <Typography.Title>Get in touch</Typography.Title>
      <div className="form">
        <Form layout="vertical">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input className="field" />
          </Form.Item>
          <Form.Item
            label="Email"
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
          <Form.Item
            label="Phone"
            name={"phone"}
            rules={[
              {
                required: true,
                // message: "Please input your Phone!",
                type: "regexp",
              },
              {
                // pattern: ^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$\),
                message:
                  "Phone number should start with 01 and be 11 digits long",
                // message: "Phone number should be 11 digits",
              },
              {
                validator: (rule, value) => {
                  if (value.length < 12) {
                    return Promise.reject(
                      new Error("Phone number should be 11 digits")
                    );
                  }
                  return Promise.resolve();
                },
                message: "Phone number should be 11 digits",
              },
              {
                validator: (rule, value) => {
                  if (value.charAt(0) !== "0" || value.charAt(1) !== "1") {
                    return Promise.reject(
                      new Error("Phone number should start with 01")
                    );
                  }
                  return Promise.resolve();
                },
                message: "Phone number should start with 01",
              },
            ]}
          >
            <ReactInputMask
              mask={"999 99999999"}
              className="field phone"
              placeholder="010 123456789"
            />
          </Form.Item>
          <Form.Item
            label="Message"
            name={"message"}
            rules={[
              {
                required: true,
                message: "Please input your Message!",
                whitespace: true,
              },
            ]}
          >
            <TextArea rows={5} cols={5} className="txt" />
          </Form.Item>
          <button className="submitBtn">Submit</button>
        </Form>
      </div>
    </div>
  );
}
const items = [
  {
    key: "1",
    label: "Do you deliver?	",
    children: <p>Yes, we deliver to all over Egypt, except North Sinai</p>,
  },
  {
    key: "2",
    label: "Which payment methods are accepted in the Online Shop?",
    children: (
      <p>
        We accept Visa/MasterCard. You can pay using cash on delivery. Also,
        payment through Mobile wallets, valU, InstaPay, Fawry are available.
      </p>
    ),
  },
  {
    key: "3",
    label: "What exactly happens after ordering?",
    children: (
      <ul>
        <li style={{ marginBottom: 10 }}>
          We’ll call you (or send WhatsApp message) to confirm your order
        </li>
        <li style={{ marginBottom: 10 }}>
          Your order will be prepared and sent to the shipping company
        </li>
        <li style={{ marginBottom: 10 }}>
          The shipping company will send an SMS to you that includes the
          tracking number
        </li>
        <li>
          You’ll get a call from the delivery man to deliver your order within
          2-4 days depending on your location.
        </li>
      </ul>
    ),
  },
  {
    key: "4",
    label: "Can I visit your store to see/buy the books myself?	",
    children: (
      <p>
        Yes you can, but prior reservation is required. Call us on 01101160177
        to arrange the visit and making sure your requested books are available
        in the showroom.
      </p>
    ),
  },
  {
    key: "5",
    label: "Do you deliver on public holidays or weekends?",
    children: (
      <p>
        In most cases, we don't deliver on public holidays or weekends. But,
        sometimes you might receive your shipments on such days.
      </p>
    ),
  },
  {
    key: "6",
    label: "Is same-day or next-day delivery available?",
    children: (
      <p>
        Well. That depends on your address and whether the ordered books are in
        stock or not. Contact us and we'll sort your request out.
      </p>
    ),
  },
  {
    key: "7",
    label: "My order hasn't arrived yet. Where is it?",
    children: (
      <p>
        If you received a tracking message from Bosta, you can track you order
        through this link (https://bosta.co/en-eg/tracking-shipments). If you
        don't know your tracking number, reach out to us on 01101160177
      </p>
    ),
  },
  {
    key: "8",
    label: "What time on the day shall I receive my order?	",
    children: (
      <p>
        We usually deliver during the day (not night). Delivery happens between
        10:00 AM and 6:00 PM
      </p>
    ),
  },
  {
    key: "9",
    label: "How long will delivery take?",
    children: (
      <p>
        <p style={{ marginBottom: 10 }}>Cairo & Giza: 2-3 working days</p>
        <p>Other areas: 3-5 working days</p>
      </p>
    ),
  },
  {
    key: "10",
    label: "How secure is shopping in the Online Shop? Is my data protected?",
    children: (
      <p>Totally secure. Your data security and privacy is our top concern</p>
    ),
  },
  {
    key: "11",
    label: "What are the delivery charges for orders from the Online Shop?",
    children: (
      <p>
        <p style={{ marginBottom: 10 }}>Cairo & Giza: 50 EGP</p>
        <p style={{ marginBottom: 10 }}>Alexandria: 55 EGP</p>
        <p style={{ marginBottom: 10 }}>Delta & Canal: 60 EGP</p>
        <p style={{ marginBottom: 10 }}>Upper Egypt: 80 EGP</p>
        <p style={{ marginBottom: 10 }}>Borders: 90 EGP</p>
      </p>
    ),
  },
];

function Faq() {
  return (
    <div className="faqContainer">
      <Typography.Title style={{ fontFamily: "Urbanist" }}>
        Frequently Asked Questions
      </Typography.Title>
      <div className="faq">
        <Collapse
          accordion={true}
          items={items}
          defaultActiveKey={["1"]}
          bordered={false}
          expandIconPosition="end"
          style={{
            background: "transparent",
          }}
        />
      </div>
    </div>
  );
}
