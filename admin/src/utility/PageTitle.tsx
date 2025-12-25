import { Breadcrumb, Space, Typography } from "antd";
import { Link } from "react-router-dom";
const Title = Typography.Title;

function PageTitle({
  title,
  breadcrumbs,
  rightSection,
}: {
  title: string;
  breadcrumbs: any;
  rightSection: any;
}) {
  return (
    <Space wrap style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ marginBottom: "16px" }}>
        <Title style={{ fontSize: "20px" }}>{title}</Title>
        <Breadcrumb style={{ fontSize: "12px" }} separator="/">
          {breadcrumbs?.map((item: any) => (
            <Breadcrumb.Item>
              <Link to={item.href}>{item.title}</Link>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 15,
        }}
      >
        {rightSection}
      </div>
    </Space>
  );
}

export default PageTitle;
