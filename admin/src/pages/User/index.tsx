import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, message, Popconfirm, Space, Table, Tag } from "antd";
import { useState } from "react";
import { DeleteApi, GetData } from "../../services/api";
import { getUrlForModel } from "../../services/endpoints";
import { UserActiveStatusColor } from "../../utility/diffColors";
import { getHeader } from "../../utility/helmet";
import PageTitle from "../../utility/PageTitle";
import DrawerForm from "./DrawerForm";
const title = "User";
const model = "User";
const Users = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [editedItem, setEditedItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [trigger, setTrigger] = useState(0);

  const showDrawer = () => {
    setOpen(true);
    setEditedItem(null);
    setIsEditing(false);
  };

  const onclickEdit = (record: any) => {
    setIsEditing(true);
    setEditedItem(record);
    setOpen(true);
  };

  const { data, refetch, isLoading, error } = useQuery({
    queryKey: ["User Data"],
    queryFn: () => GetData(getUrlForModel(model)),
    select(data) {
      return data?.data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => DeleteApi(getUrlForModel(model, id)),
    onSuccess: () => {
      message.success("Delete Successfully!!!");
      refetch();
    },
    onError: (err: any) => {
      message.error("Something Went Wrong!");
      console.log("Error from delete data", err);
    },
  });

  const onClose = () => {
    setOpen(false);
  };

  const onSubmitSuccess = (isEditing: boolean) => {
    setTrigger((trigger) => trigger + 1);
    if (isEditing) {
      setOpen(false);
      setIsEditing(false);
      setEditedItem(null);
      refetch();
    } else {
      setOpen(false);
      setIsEditing(false);
      setEditedItem(null);
      refetch();
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      render: (phone: any) => <Tag color="blue">{phone}</Tag>,
    },
    {
      title: "Is Active",
      dataIndex: "isActive",
      key: "isActive",
      render: (active: any) => (
        <Tag color={UserActiveStatusColor(active)}>{active}</Tag>
      ),
    },
    {
      title: "Is Verified",
      dataIndex: "isVerified",
      key: "isVerified",
      render: (isVerified: any) => (
        <Tag color={isVerified ? "green" : "orange"}>
          {isVerified ? "Yes" : "No"}
        </Tag>
      ),
    },
    {
      title: "Is Deleted",
      dataIndex: "isDeleted",
      key: "isDeleted",
      render: (Delete: any) => (
        <Tag color={Delete ? "red" : "green"}>{Delete ? "Yes" : "No"}</Tag>
      ),
    },
    {
      title: "Action",
      render: (_, record: any) => {
        return (
          <Space>
            <Button onClick={() => onclickEdit(record)} size="small">
              <EditOutlined />
            </Button>
            <Popconfirm
              title="Delete this item?"
              description="This action cannot be undone"
              onConfirm={() => deleteMutation.mutate(record._id)}
              okText="Yes"
              cancelText="No"
            >
              <Button danger type={"link"}>
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  console.log("editedItem", editedItem);

  return (
    <>
      {getHeader(title)}
      <PageTitle
        title={title}
        breadcrumbs={[
          {
            title: "Dashboard",
            href: "/",
          },
          {
            title: title,
          },
        ]}
        rightSection={
          <>
            <Button type="primary" onClick={showDrawer}>
              Add New <PlusOutlined />
            </Button>
          </>
        }
      />
      <Table dataSource={data} columns={columns} />;
      <DrawerForm
        onClose={onClose}
        open={open}
        editedItem={editedItem}
        isEditing={isEditing}
        form={form}
        model={model}
        onSubmitSuccess={onSubmitSuccess}
      />
    </>
  );
};

export default Users;
