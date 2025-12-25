import {
  CalendarOutlined,
  ClockCircleOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import {
  Badge,
  Card,
  Col,
  Descriptions,
  Divider,
  Row,
  Space,
  Tag,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import { formatDateTime } from "../../utility/formattedDate";
import { getPaymentStatusColor, getStatusColor } from "./statusColors";
import { formatMoney } from "../../utility/formatMoney";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { API_FIND_WHERE } from "../../services/endpoints";
import { Post } from "../../services/api";
import { getHeader } from "../../utility/helmet";
import PageTitle from "../../utility/PageTitle";

const { Text, Paragraph } = Typography;

const model = "Booking";
const title = "Booking Details";

const BookingDetailsPage = () => {
  const { id } = useParams();

  const { data, refetch } = useQuery({
    queryKey: [`${model}-data-single`],
    queryFn: () =>
      Post(`${API_FIND_WHERE}?model=${model}`, {
        where: {
          _id: id,
        },
        include: {
          room: true,
          user: true,
        },
      }),
    select(data) {
      return data?.data[0];
    },
  });

  useEffect(() => {
    refetch();
  }, [id]);

  console.log("details>>>>", data);

  if (!data) {
    return <div>Loading...</div>;
  }

  const checkInDateTime = formatDateTime(data.check_in_at);
  const checkoutDateTime = formatDateTime(data.checkout_at);

  const getFloorSuffix = (floor: number) => {
    if (floor === 1) return "st";
    if (floor === 2) return "nd";
    if (floor === 3) return "rd";
    return "th";
  };

  return (
    <div style={{}}>
      {getHeader(title)}
      <PageTitle
        title={`${title} - (${id})`}
        breadcrumbs={[
          {
            title: "Booking List",
            href: "/booking",
          },
          {
            title: title,
          },
        ]}
        rightSection={""}
      />
      <Row gutter={[24, 24]}>
        {/* Booking Status Overview */}
        <Col span={24}>
          <Card
            bordered={false}
            style={{
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Row gutter={16} align="middle">
              <Col flex="auto">
                <Space size="large" wrap>
                  <div>
                    <Text
                      type="secondary"
                      style={{ display: "block", marginBottom: "4px" }}
                    >
                      Booking Status
                    </Text>
                    <Badge
                      status={getStatusColor(data.status)}
                      text={
                        <Text strong style={{ fontSize: "16px" }}>
                          {data.status}
                        </Text>
                      }
                    />
                  </div>
                  <Divider type="vertical" style={{ height: "40px" }} />
                  <div>
                    <Text
                      type="secondary"
                      style={{ display: "block", marginBottom: "4px" }}
                    >
                      Payment Status
                    </Text>
                    <Badge
                      status={getPaymentStatusColor(data.payment_status)}
                      text={
                        <Text strong style={{ fontSize: "16px" }}>
                          {data.payment_status}
                        </Text>
                      }
                    />
                  </div>
                  <Divider type="vertical" style={{ height: "40px" }} />
                  <div>
                    <Text
                      type="secondary"
                      style={{ display: "block", marginBottom: "4px" }}
                    >
                      Total Amount
                    </Text>
                    <Text strong style={{ fontSize: "20px", color: "#1890ff" }}>
                      {formatMoney(data.total)}
                    </Text>
                  </div>
                  <div>
                    <Text
                      type="secondary"
                      style={{ display: "block", marginBottom: "4px" }}
                    >
                      Stay Nights
                    </Text>
                    <Text strong style={{ fontSize: "20px", color: "green" }}>
                      {data?.stay_nights} Nights
                    </Text>
                  </div>
                </Space>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Guest Information */}
        <Col xs={24} lg={12}>
          <Card
            title={
              <Space>
                <UserOutlined />
                <span>Guest Information</span>
              </Space>
            }
            bordered={false}
            style={{
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              height: "100%",
            }}
          >
            <Descriptions column={1} colon={false}>
              <Descriptions.Item
                label={
                  <Text strong>
                    <UserOutlined style={{ marginRight: 8 }} />
                    Name
                  </Text>
                }
              >
                {data.user?.name || data.customer_name}
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <Text strong>
                    <MailOutlined style={{ marginRight: 8 }} />
                    Email
                  </Text>
                }
              >
                {data.user?.email || data.customer_email}
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <Text strong>
                    <PhoneOutlined style={{ marginRight: 8 }} />
                    Phone
                  </Text>
                }
              >
                {data.user?.phone || data.customer_phone}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>

        {/* Room Information */}
        <Col xs={24} lg={12}>
          <Card
            title={
              <Space>
                <HomeOutlined />
                <span>Room Information</span>
              </Space>
            }
            bordered={false}
            style={{
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              height: "100%",
            }}
          >
            <Descriptions column={1} colon={false}>
              <Descriptions.Item label={<Text strong>Room Title</Text>}>
                <Text style={{ fontSize: "16px" }}>{data.room?.title}</Text>
              </Descriptions.Item>
              <Descriptions.Item label={<Text strong>Price per Night</Text>}>
                <Text style={{ fontSize: "16px", color: "#52c41a" }}>
                  {formatMoney(data.room?.price)}
                </Text>
              </Descriptions.Item>
              <Descriptions.Item label={<Text strong>Floor</Text>}>
                <Text style={{ fontSize: "16px" }}>
                  {data.room?.floor}
                  {getFloorSuffix(data.room?.floor)} Floor
                </Text>
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>

        {/* Booking Details */}
        <Col span={24}>
          <Card
            title={
              <Space>
                <CalendarOutlined />
                <span>Booking Details</span>
              </Space>
            }
            bordered={false}
            style={{
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <Card
                  type="inner"
                  title="Check-in"
                  style={{ background: "#e6f7ff" }}
                >
                  <Space direction="vertical" size="small">
                    <Space>
                      <CalendarOutlined style={{ color: "#1890ff" }} />
                      <Text strong>{checkInDateTime.date}</Text>
                    </Space>
                    <Space>
                      <ClockCircleOutlined style={{ color: "#1890ff" }} />
                      <Text>{checkInDateTime.time}</Text>
                    </Space>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card
                  type="inner"
                  title="Checkout"
                  style={{ background: "#fff7e6" }}
                >
                  <Space direction="vertical" size="small">
                    <Space>
                      <CalendarOutlined style={{ color: "#fa8c16" }} />
                      <Text strong>{checkoutDateTime.date}</Text>
                    </Space>
                    <Space>
                      <ClockCircleOutlined style={{ color: "#fa8c16" }} />
                      <Text>{checkoutDateTime.time}</Text>
                    </Space>
                  </Space>
                </Card>
              </Col>
            </Row>

            <Divider />

            <Descriptions column={{ xs: 1, sm: 2, md: 3 }} bordered>
              <Descriptions.Item label="Adult Guests">
                <Space>
                  <TeamOutlined />
                  <Text strong>{data.adult_person_count}</Text>
                </Space>
              </Descriptions.Item>
              <Descriptions.Item label="Children">
                <Space>
                  <TeamOutlined />
                  <Text strong>{data.children_count}</Text>
                </Space>
              </Descriptions.Item>
              <Descriptions.Item label="Booking ID">
                <Text code style={{ fontSize: "12px" }}>
                  {data._id}
                </Text>
              </Descriptions.Item>
              <Descriptions.Item label="Subtotal">
                <Text>{formatMoney(data.subtotal)}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Total Amount">
                <Text strong style={{ color: "#1890ff", fontSize: "16px" }}>
                  {formatMoney(data.total)}
                </Text>
              </Descriptions.Item>
              <Descriptions.Item label="Payment Status">
                <Tag color={getPaymentStatusColor(data.payment_status)}>
                  {data.payment_status}
                </Tag>
              </Descriptions.Item>
            </Descriptions>

            {data.notes && (
              <>
                <Divider orientation="left">Special Notes</Divider>
                <Card type="inner" style={{ background: "#fafafa" }}>
                  <Paragraph style={{ margin: 0 }}>{data.notes}</Paragraph>
                </Card>
              </>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default BookingDetailsPage;
