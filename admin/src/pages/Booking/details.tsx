import {
  ArrowsAltOutlined,
  CarOutlined,
  CoffeeOutlined,
  HomeOutlined,
  StarOutlined,
  UserOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
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
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../../services/api";
import { API_FIND_WHERE } from "../../services/endpoints";
import { getHeader } from "../../utility/helmet";
import PageTitle from "../../utility/PageTitle";
import { formatMoney } from "../../utility/formatMoney";
import "quill/dist/quill.snow.css";
const { Text, Paragraph } = Typography;
const model = "Room";
const title = "Room Details";

const RoomDetails = () => {
  const { id } = useParams();

  const { data, refetch } = useQuery({
    queryKey: [`${model}-data-single`],
    queryFn: () =>
      Post(`${API_FIND_WHERE}?model=${model}`, {
        where: {
          _id: id,
        },
        include: {
          room_features: true,
          room_services: true,
          room_bathroom_features: true,
        },
      }),
    select(data) {
      return data?.data[0];
    },
  });

  useEffect(() => {
    refetch();
  }, [id]);

  const room = data;

  if (!room) {
    return <div>Loading...</div>;
  }

  // Helper function to get room type badges
  const getRoomTypeBadges = () => {
    const badges = [];
    if (room.is_deluxe)
      badges.push(
        <Badge
          key="deluxe"
          count="Deluxe"
          style={{ backgroundColor: "#1890ff" }}
        />
      );
    if (room.is_double)
      badges.push(
        <Badge
          key="double"
          count="Double"
          style={{ backgroundColor: "#52c41a" }}
        />
      );
    if (room.is_featured)
      badges.push(
        <Badge
          key="featured"
          count="Featured"
          style={{ backgroundColor: "#faad14" }}
        />
      );
    if (room.is_executive)
      badges.push(
        <Badge
          key="executive"
          count="Executive"
          style={{ backgroundColor: "#722ed1" }}
        />
      );
    if (room.is_suite)
      badges.push(
        <Badge
          key="suite"
          count="Suite"
          style={{ backgroundColor: "#eb2f96" }}
        />
      );
    return badges;
  };

  // Helper function to get status tag
  const getStatusTag = () => {
    if (room.is_booked) {
      return <Tag color="red">Booked</Tag>;
    }
    return room.is_active ? (
      <Tag color="green">Available</Tag>
    ) : (
      <Tag color="orange">Inactive</Tag>
    );
  };

  return (
    <>
      {getHeader(title)}
      <PageTitle
        title={`${title} - (${room.title})`}
        breadcrumbs={[
          {
            title: "Room List",
            href: "/room",
          },
          {
            title: title,
          },
        ]}
        rightSection={""}
      />

      <div style={{}}>
        <Row gutter={[24, 24]}>
          {/* Main Room Information */}
          <Col xs={24} lg={16}>
            <Card
              title={
                <Space>
                  <HomeOutlined />
                  Room Information
                </Space>
              }
              extra={getStatusTag()}
              style={{ marginBottom: 24 }}
            >
              <Descriptions column={{ xs: 1, sm: 2, lg: 3 }} bordered>
                <Descriptions.Item label="Title" span={3}>
                  <Text strong>{room.title}</Text>
                </Descriptions.Item>

                <Descriptions.Item label="Price">
                  <Text type="success" strong style={{ fontSize: "16px" }}>
                    {formatMoney(room.price)}/night
                  </Text>
                </Descriptions.Item>

                <Descriptions.Item label="Max Persons">
                  <Space>
                    <UserOutlined />
                    {room.max_person} Persons
                  </Space>
                </Descriptions.Item>

                <Descriptions.Item label="Bed Count">
                  <Space>
                    {/* <BedOutlined /> */}
                    <ArrowsAltOutlined />
                    {room.bed_count} Beds
                  </Space>
                </Descriptions.Item>

                <Descriptions.Item label="Room Size">
                  <Space>
                    <ArrowsAltOutlined />
                    {room.room_size} sq.ft
                  </Space>
                </Descriptions.Item>

                <Descriptions.Item label="Floor">
                  <Text>{room.floor}th Floor</Text>
                </Descriptions.Item>

                <Descriptions.Item label="Sort Order">
                  <Text>{room.sort_order}</Text>
                </Descriptions.Item>
              </Descriptions>

              {/* Room Type Badges */}
              <Divider orientation="left">Room Types</Divider>
              <Space size="small" wrap>
                {getRoomTypeBadges()}
              </Space>
            </Card>

            {/* Description Card */}
            <Card
              title={
                <Space>
                  <CoffeeOutlined />
                  Description
                </Space>
              }
              style={{ marginBottom: 24 }}
            >
              <div
                className="ql-editor"
                dangerouslySetInnerHTML={{ __html: room.description }}
                style={{
                  lineHeight: "1.6",
                  fontSize: "14px",
                }}
              />
            </Card>

            {/* Short Description */}
            {room.short_desc && (
              <Card title="Short Description" style={{ marginBottom: 24 }}>
                <Paragraph style={{ fontSize: "14px", color: "#666" }}>
                  {room.short_desc}
                </Paragraph>
              </Card>
            )}
          </Col>

          {/* Features and Services Sidebar */}
          <Col xs={24} lg={8}>
            {/* Room Services */}
            <Card
              title={
                <Space>
                  <WifiOutlined />
                  Room Services
                </Space>
              }
              style={{ marginBottom: 24 }}
            >
              <Space wrap>
                {room.room_services?.map((service: any) => (
                  <Tag
                    key={service._id}
                    color="blue"
                    icon={<WifiOutlined />}
                    style={{ marginBottom: "8px", padding: "4px 8px" }}
                  >
                    {service.title}
                  </Tag>
                ))}
              </Space>
            </Card>

            {/* Room Features */}
            <Card
              title={
                <Space>
                  <StarOutlined />
                  Room Features
                </Space>
              }
              style={{ marginBottom: 24 }}
            >
              <Space wrap>
                {room.room_features?.map((feature: any) => (
                  <Tag
                    key={feature._id}
                    color="green"
                    icon={<StarOutlined />}
                    style={{ marginBottom: "8px", padding: "4px 8px" }}
                  >
                    {feature.title}
                  </Tag>
                ))}
              </Space>
            </Card>

            {/* Bathroom Features */}
            <Card
              title={
                <Space>
                  <CarOutlined />
                  Bathroom Features
                </Space>
              }
              style={{ marginBottom: 24 }}
            >
              <Space wrap>
                {room.room_bathroom_features?.map((feature: any) => (
                  <Tag
                    key={feature._id}
                    color="orange"
                    icon={<CarOutlined />}
                    style={{ marginBottom: "8px", padding: "4px 8px" }}
                  >
                    {feature.title}
                  </Tag>
                ))}
              </Space>
            </Card>

            {/* Quick Stats */}
            <Card title="Quick Stats">
              <Space
                direction="vertical"
                style={{ width: "100%" }}
                size="middle"
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Text>Status:</Text>
                  {getStatusTag()}
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Text>Active:</Text>
                  <Tag color={room.is_active ? "green" : "red"}>
                    {room.is_active ? "Yes" : "No"}
                  </Tag>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Text>Booked:</Text>
                  <Tag color={room.is_booked ? "red" : "green"}>
                    {room.is_booked ? "Yes" : "No"}
                  </Tag>
                </div>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RoomDetails;
