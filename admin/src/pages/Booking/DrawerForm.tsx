import { useMutation, useQuery } from "@tanstack/react-query";
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
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { GetData, Patch, Post } from "../../services/api";
import { CREATE_ROOM, getUrlForModel } from "../../services/endpoints";

const { Option } = Select;

const RoomServiceModel = "RoomService";
const RoomFeatureModel = "RoomFeature";
const BathroomServiceModel = "BathroomFeature";

const DrawerForm: React.FC = ({
  onClose,
  open,
  editedItem,
  isEditing,
  form,
  model,
  onSubmitSuccess,
}: any) => {
  const { data: roomServiceData, refetch: serviceRefetch } = useQuery({
    queryKey: [`${RoomServiceModel}-data`],
    queryFn: () => GetData(getUrlForModel(RoomServiceModel)),
    select(data) {
      return data?.data ?? [];
    },
  });
  const { data: roomFeatureData, refetch: featureRefetch } = useQuery({
    queryKey: [`${RoomFeatureModel}-data`],
    queryFn: () => GetData(getUrlForModel(RoomFeatureModel)),
    select(data) {
      return data?.data ?? [];
    },
  });
  const { data: bathData, refetch: bathRefetch } = useQuery({
    queryKey: [`${BathroomServiceModel}-data`],
    queryFn: () => GetData(getUrlForModel(BathroomServiceModel)),
    select(data) {
      return data?.data ?? [];
    },
  });

  const createMutation = useMutation({
    mutationFn: (data) => Post(CREATE_ROOM, data),
    onSuccess: () => {
      message.success("Create Successfully");
      onSubmitSuccess();
      form.resetFields();
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
    console.log("values>>>", values);
    // return;

    if (values.price) {
      values.price = Number(values.price);
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
      form.setFieldsValue(editedItem);
    } else {
      form.resetFields();
    }
  }, [editedItem]);

  // const normFile = (e) => {
  //   if (Array.isArray(e)) {
  //     return e;
  //   }
  //   return e && e.fileList;
  // };

  return (
    <>
      <Drawer title={"Form"} width={500} open={open} onClose={onClose}>
        <Form onFinish={onSubmit} form={form} layout="vertical">
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please enter value" }]}
          >
            <Input placeholder="Enter Title" />
          </Form.Item>
          <Form.Item
            name="short_desc"
            label="Short Description"
            rules={[{ required: false, message: "Please enter value" }]}
          >
            <Input placeholder="Short Description" />
          </Form.Item>

          <Form.Item name="price" label="Price">
            <InputNumber
              style={{ width: "100%" }}
              type="number"
              placeholder="Enter price"
            />
          </Form.Item>
          <Form.Item name="floor" label="Floor Number">
            <InputNumber
              style={{ width: "100%" }}
              type="number"
              placeholder="Enter price"
            />
          </Form.Item>
          <Form.Item name="bed_count" label="Bed Count">
            <InputNumber
              style={{ width: "100%" }}
              type="number"
              placeholder="Enter value"
            />
          </Form.Item>
          <Form.Item name="max_person" label="Max Person">
            <InputNumber
              style={{ width: "100%" }}
              type="number"
              placeholder="Enter value"
            />
          </Form.Item>
          <Form.Item name="room_size" label="Room Size (sqft)">
            <InputNumber
              style={{ width: "100%" }}
              type="number"
              placeholder="Enter value"
            />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
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

          <Form.Item name="room_services" label="Room Services">
            <Select mode="multiple" placeholder="Select status">
              {roomServiceData?.map((data: any) => (
                <Option value={data?._id}>{data?.title}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="room_features" label="Room Features">
            <Select mode="multiple" placeholder="Select status">
              {roomFeatureData?.map((data: any) => (
                <Option value={data?._id}>{data?.title}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="room_bathroom_features" label="Bathroom Services">
            <Select mode="multiple" placeholder="Select status">
              {bathData?.map((data: any) => (
                <Option value={data?._id}>{data?.title}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="sort_order" label="Sort Order (sqft)">
            <InputNumber
              style={{ width: "100%" }}
              type="number"
              placeholder="Enter value"
            />
          </Form.Item>
          <Form.Item name="image" label="Image">
            <Input type="text" placeholder="Enter image link" />
          </Form.Item>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "12px",
            }}
          >
            <Form.Item name="is_booked" valuePropName="checked">
              <Checkbox>Is Booked</Checkbox>
            </Form.Item>

            <Form.Item name="is_active" valuePropName="checked">
              <Checkbox>Is Active</Checkbox>
            </Form.Item>

            <Form.Item name="is_deluxe" valuePropName="checked">
              <Checkbox>Is Deluxe</Checkbox>
            </Form.Item>

            <Form.Item name="is_double" valuePropName="checked">
              <Checkbox>Is Double</Checkbox>
            </Form.Item>

            <Form.Item name="is_featured" valuePropName="checked">
              <Checkbox>Is Featured</Checkbox>
            </Form.Item>

            <Form.Item name="is_executive" valuePropName="checked">
              <Checkbox>Is Executive</Checkbox>
            </Form.Item>

            <Form.Item name="is_suite" valuePropName="checked">
              <Checkbox>Is Suite</Checkbox>
            </Form.Item>
          </div>

          {/* <Form.Item
            name="image"
            label="Image"
            rules={[{ required: true, message: "Required" }]}
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              accept=".jpg, .png, .gif, .tiff, .bmp, .webp"
              name="file"
              maxCount={1}
              listType="picture-card"
            >
              <div className="flex flex-col items-center justify-center">
                <UploadOutlined />
                <span>Upload</span>
              </div>
            </Upload>
          </Form.Item> */}
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
