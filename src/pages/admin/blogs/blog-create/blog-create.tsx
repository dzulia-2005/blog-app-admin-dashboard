import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { BlogsForm } from "../../../../supabase/blogs/index.types";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { useAtomValue } from "jotai";
import { loginAtom } from "../../../../store";
import { useCreateBlog } from "../../../../react-query/mutation/blogs";
import { useNavigate } from "react-router";

const BlogsCreateView: React.FC = () => {
  const queryClient = useQueryClient();
  const user = useAtomValue(loginAtom);
  const [form] = useForm<BlogsForm>();
  const navigate = useNavigate();
  const { mutate: handleCreateBlog } = useCreateBlog();
  const [file, setFile] = useState<File | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  const onFinish = (values: BlogsForm) => {
    const payload = {
      ...values,
      image_url: file || null,
    };
    handleCreateBlog(
      { payload, user },
      {
        onSuccess: () => navigate("/dashboard/admin/blogs"),
      }
    );
    queryClient.invalidateQueries({ queryKey: ["blogs-list"] });
  };
  return (
    <Form
      form={form}
      name="basic"
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<BlogsForm>
        label="Title in geo"
        name="title_ka"
        rules={[{ required: true, message: "Please Enter title" }]}
      >
        <Input placeholder="Please Enter title geo" />
      </Form.Item>

      <Form.Item<BlogsForm>
        label="Title in eng"
        name="title_en"
        rules={[{ required: true, message: "Please Enter title" }]}
      >
        <Input placeholder="Please Enter title eng" />
      </Form.Item>
      <Form.Item<BlogsForm>
        label="Description in geo"
        name="description_ka"
        rules={[{ required: true, message: "Please Enter description" }]}
      >
        <TextArea placeholder="Please Enter title geo" rows={6} />
      </Form.Item>
      <Form.Item<BlogsForm>
        label="Description in eng"
        name="description_en"
        rules={[{ required: true, message: "Please Enter description" }]}
      >
        <TextArea placeholder="Please Enter title eng" rows={6} />
      </Form.Item>
      <Form.Item<BlogsForm> label="Upload Image" name="image_url">
        <Input type="file" onChange={handleFileChange} />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BlogsCreateView;
