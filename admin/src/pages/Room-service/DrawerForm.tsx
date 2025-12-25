import { useMutation } from "@tanstack/react-query";
import {
  Button,
  Checkbox,
  Drawer,
  Form,
  Input,
  InputNumber,
  message,
  Select,
  Space,
} from "antd";
import React, { useEffect } from "react";
import { Patch, Post } from "../../services/api";
import { Role, UserActiveStatus } from "../../services/constants";
import { getUrlForModel } from "../../services/endpoints";

const { Option } = Select;

interface DrawerFormProps {
  onClose?: any;
  open?: any;
  editedItem?: any;
  isEditing?: any;
  form?: any;
  model?: any;
  onSubmitSuccess?: any;
}

const DrawerForm: React.FC<DrawerFormProps> = ({
  onClose,
  open,
  editedItem,
  isEditing,
  form,
  model,
  onSubmitSuccess,
}) => {
  const createMutation: any = useMutation({
    mutationFn: (data) => Post(getUrlForModel(model), data),
    onSuccess: () => {
      message.success("Create Successfully");
      onSubmitSuccess();
    },
  });

  const updateMutation: any = useMutation({
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
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please enter value" }]}
          >
            <Input placeholder="Enter title" />
          </Form.Item>
          <Form.Item name="sort_order" label="Sort Order">
            <InputNumber style={{width: "100%"}} type="number" />
          </Form.Item>

          <Form.Item name="is_active" valuePropName="checked">
            <Checkbox>Is Active</Checkbox>
          </Form.Item>
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              type="primary"
              onClick={() => form.submit()}
              loading={createMutation.isLoading || updateMutation.isLoading}
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
