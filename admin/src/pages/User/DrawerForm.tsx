import { useMutation } from "@tanstack/react-query";
import {
  Button,
  Checkbox,
  Drawer,
  Form,
  Input,
  message,
  Select,
  Space,
} from "antd";
import React, { useEffect } from "react";
import { Patch, Post } from "../../services/api";
import { Role, UserActiveStatus } from "../../services/constants";
import { getUrlForModel } from "../../services/endpoints";

const { Option } = Select;

const DrawerForm: React.FC = ({
  onClose,
  open,
  editedItem,
  isEditing,
  form,
  model,
  onSubmitSuccess,
}: any) => {
  const createMutation = useMutation({
    mutationFn: (data) => Post(getUrlForModel(model), data),
    onSuccess: () => {
      message.success("Create Successfully");
      onSubmitSuccess();
    },
  });

  const updateMutation = useMutation({
    mutationFn: (data: any) => Patch(getUrlForModel(model, data._id), data),
    onSuccess: () => {
      message.success("Update Successfully!!!!");
      onSubmitSuccess();
    },
  });

  const onSubmit = async (values: any) => {
    if (isEditing) {
      updateMutation.mutate({
        ...values,
        _id: editedItem._id,
      });
      return;
    }
    createMutation.mutate(values);
  };

  useEffect(() => {
    if (editedItem) {
      form.setFieldsValue(editedItem);
    } else {
      form.resetFields();
    }
  }, [editedItem]);

  return (
    <>
      <Drawer title={"Form"} width={500} open={open} onClose={onClose}>
        <Form onFinish={onSubmit} form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter value" }]}
          >
            <Input placeholder="Enter name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please enter value" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item name="phone" label="Phone">
            <Input placeholder="Enter ISBN number" />
          </Form.Item>
          {/* <Form.Item name="password" label="Password">
            <Input.Password
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              placeholder="Password"
              type="password"
            />
          </Form.Item> */}

          <Form.Item name="role" label="Role">
            <Select allowClear placeholder="Select status">
              <Option value={Role.USER}>{Role.USER}</Option>
              <Option value={Role.GUIDE}>{Role.GUIDE}</Option>
              {/* <Option value={Role.ADMIN}>{Role.ADMIN}</Option> */}
            </Select>
          </Form.Item>
          <Form.Item name="isActive" label="Is Active">
            <Select allowClear placeholder="Select status">
              <Option value={UserActiveStatus.ACTIVE}>
                {UserActiveStatus.ACTIVE}
              </Option>
              <Option value={UserActiveStatus.INACTIVE}>
                {UserActiveStatus.INACTIVE}
              </Option>
              <Option value={UserActiveStatus.BLOCKED}>
                {UserActiveStatus.BLOCKED}
              </Option>
              {/* <Option value={Role.ADMIN}>{Role.ADMIN}</Option> */}
            </Select>
          </Form.Item>
          <Form.Item name="isDeleted" valuePropName="checked">
            <Checkbox>Is Deleted</Checkbox>
          </Form.Item>
          <Form.Item name="isVerified" valuePropName="checked">
            <Checkbox>Is Verified</Checkbox>
          </Form.Item>
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              type="primary"
              onClick={() => form.submit()}
              // loading={createMutation.isLoading || updateMutation.isLoading}
            >
              Save
              {/* {currentBook ? "Update" : "Create"} */}
            </Button>
          </Space>
        </Form>
      </Drawer>
    </>
  );
};

export default DrawerForm;
