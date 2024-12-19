import React from "react";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateUser } from "../../../../react-query/mutation/user";

type FieldType = {
  email: string;
  password: string;
  phone:string;
};

const UserCreateView: React.FC = () => {
  const queryClient = useQueryClient();
  const [form] = useForm();
  const navigate = useNavigate();
  const { mutate: handleCreateUser } = useCreateUser();
  const onFinish = (values: FieldType) => {
    handleCreateUser(values, {
      onSuccess: () => navigate("/dashboard/admin/users"),
    });
    queryClient.invalidateQueries({ queryKey: ["users-list"] });
  };
  return (
    <Form
      name="basic"
      form={form}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item<FieldType>
        label="Phone"
        name="phone"
        rules={[{ required: true, message: "Please input your phone!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Create user
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserCreateView;
