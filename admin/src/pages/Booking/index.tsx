import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, message, Popconfirm, Space, Table, Tag } from "antd";
import { useState } from "react";
import { DeleteApi, GetData, Post } from "../../services/api";
import { API_FIND_WHERE, getUrlForModel } from "../../services/endpoints";
import { formatMoney } from "../../utility/formatMoney";
import { getHeader } from "../../utility/helmet";
import PageTitle from "../../utility/PageTitle";
import DrawerForm from "./DrawerForm";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
const title = "Booking List";
const model = "Booking";
const Booking = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [editedItem, setEditedItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [trigger, setTrigger] = useState(0);
  const navigate = useNavigate();

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

  const { data, refetch } = useQuery({
    queryKey: [`${model}-data-single`],
    queryFn: () =>
      Post(`${API_FIND_WHERE}?model=${model}`, {
        // include: {
        // },
      }),
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
    // {
    //   title: "Title",
    //   dataIndex: "title",
    //   key: "title",
    // },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => <>{formatMoney(price)}</>,
    },
    {
      title: "Person",
      // dataIndex: "max_person",
      key: "total_person",
      render: (max_person: number, data: any) => (
        <>
          <Tag color="pink">{data?.adult_person_count} Adult</Tag>
          <Tag color="green">{data?.children_count} Children</Tag>
        </>
      ),
    },
    {
      title: "Stay Date",
      // dataIndex: "max_person",
      key: "stay_date",
      render: (date: number, data: any) => (
        <>
          <Tag color="pink">
            {dayjs(data?.check_in_at).format("YYYY-MM-DD")}
          </Tag>
          <Tag color="green">
            {dayjs(data?.checkout_at).format("YYYY-MM-DD")}
          </Tag>
        </>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => <>{status}</>,
    },
    {
      title: "Payment Status",
      dataIndex: "payment_status",
      key: "payment_status",
      render: (status: string) => <>{status}</>,
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (total: number) => <>{formatMoney(total)}</>,
    },
    {
      title: "Subtotal",
      dataIndex: "subtotal",
      key: "subtotal",
      render: (subtotal: number) => <>{formatMoney(subtotal)}</>,
    },
    {
      title: "Is Active",
      dataIndex: "is_active",
      key: "is_active",
      render: (is_active: boolean) => (
        <Tag color={is_active ? "green" : "orange"}>
          {is_active ? "Yes" : "No"}
        </Tag>
      ),
    },
    {
      title: "Is Booked",
      dataIndex: "is_booked",
      key: "is_booked",
      render: (is_booked: any) => (
        <Tag color={is_booked ? "green" : "orange"}>
          {is_booked ? "Yes" : "No"}
        </Tag>
      ),
    },

    {
      title: "Action",
      render: (_: any, record: any) => {
        return (
          <Space>
            <Button
              onClick={() => navigate(`/booking-details/${record._id}`)}
              size="small"
            >
              <EyeOutlined />
            </Button>
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

export default Booking;
