import { useMutation, useQuery } from "@tanstack/react-query";
import {
  Button,
  Checkbox,
  DatePicker,
  Drawer,
  Form,
  Input,
  InputNumber,
  message,
  Select,
  Space,
} from "antd";
import React, { useEffect } from "react";
import { GetData, Patch, Post } from "../../services/api";
import { getUrlForModel } from "../../services/endpoints";
import ReactQuill from "react-quill-new";
import dayjs from "dayjs";
const { TextArea } = Input;
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

function createSlug(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // remove special chars
    .replace(/\s+/g, "-") // replace spaces with -
    .replace(/-+/g, "-"); // remove multiple dashes
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
      refetch();
    },
  });

  const { data, refetch } = useQuery({
    queryKey: [`${"Tags"}-Data`],
    queryFn: () => GetData(getUrlForModel("Tags")),
    select(data) {
      return data?.data;
    },
  });

  const updateMutation: any = useMutation({
    mutationFn: (data: any) => Patch(getUrlForModel(model, data._id), data),
    onSuccess: () => {
      message.success("Update Successfully!!!!");
      onSubmitSuccess();
      refetch();
    },
  });

  const onSubmit = async (values: any) => {
    if (values.title) {
      const slug = createSlug(values.title);
      values.slug = slug;
    }


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
      form.setFieldsValue({
        ...editedItem,
        published_at: editedItem.published_at
          ? dayjs(editedItem.published_at)
          : undefined,
      });
    } else {
      form.resetFields();
    }
  }, [editedItem]);

  return (
    <>
      <Drawer title={"Form"} width={500} open={open} onClose={onClose}>
        <Form onFinish={onSubmit} form={form} layout="vertical">
          <Form.Item
            name="author"
            label="Author Name"
            rules={[{ required: true, message: "Please enter value" }]}
          >
            <Input placeholder="Enter" />
          </Form.Item>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: false, message: "Please enter  value" }]}
          >
            <Input placeholder="Enter title" />
          </Form.Item>
          <Form.Item
            name="short_desc"
            label="Short Description"
            rules={[{ required: false, message: "Please enter value" }]}
          >
            <TextArea rows={3} placeholder="Enter" />
          </Form.Item>
          <Form.Item
            name="content"
            label="Content"
            rules={[{ required: false, message: "Content is required" }]}
          >
            <ReactQuill
              theme="snow"
              style={{ height: "400px", marginBottom: "50px" }}
              modules={{
                toolbar: [
                  [{ header: "1" }, { header: "2" }, { font: [] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["link", "image"],
                  ["clean"],
                ],
              }}
            />
          </Form.Item>
          <br />
          <br />
          <Form.Item name="sort_order" label="Sort Order">
            <InputNumber style={{ width: "100%" }} type="number" />
          </Form.Item>
          <Form.Item
            name="image"
            label="Image"
            rules={[{ required: false, message: "Please enter  value" }]}
          >
            <Input placeholder="Enter" />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: false, message: "Please enter  value" }]}
          >
            <Input placeholder="Enter" />
          </Form.Item>
          <Form.Item name="tags" label="Tags">
            <Select mode="multiple" placeholder="Select status">
              {data?.map((data: any) => (
                <Option value={data?._id}>{data?.title}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="published_at" label="Published Date">
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="is_active" valuePropName="checked">
            <Checkbox>Is Active</Checkbox>
          </Form.Item>
          <Form.Item name="is_featured" valuePropName="checked">
            <Checkbox>Is Featured</Checkbox>
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
