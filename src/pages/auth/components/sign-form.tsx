import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router";
import { useLogin } from "../../../react-query/mutation/auth";
type FieldType = {
  email: string;
  password: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const SignForm: React.FC = () => {
  const navigate = useNavigate();
  const { mutate: handleLogin } = useLogin();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    handleLogin(values, {
      onSuccess: () => {
        navigate("/dashboard/login");
      },
    });
  };
  return (
    <div className=" rounded-xl p-6   border bg-card-[#ffff] text-card-foreground shadow-sm w-[440px] h-96 px- [6%]; pt-[25%]">
      <Form
        name="basic"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="text-[#ffff]">Email</div>
        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Please Enter Email"/>
        </Form.Item>

        <div className="text-[#ffff]">Password</div>
        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item label={null} className="flex justify-center">
          <Button  type="primary" htmlType="submit" className="flex">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignForm;
