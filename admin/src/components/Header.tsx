/* eslint-disable  */
import {
  LogoutOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { Header } = Layout;

export default function HeaderNav() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await window.localStorage.clear();
      window.location.reload();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleMenuClick = ({ key }: any) => {
    switch (key) {
      case "profile":
        navigate("/my-profile");
        break;
      case "updatePassword":
        navigate("/update-password");
        break;
      case "logout":
        handleLogout();
        break;
      default:
        break;
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="profile" icon={<ProfileOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Header
      style={{
        padding: "0 16px",
        background: colorBgContainer,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Dropdown overlay={menu} trigger={["click"]}>
        <Avatar
          style={{ backgroundColor: "#87d068", cursor: "pointer" }}
          icon={<UserOutlined />}
        />
      </Dropdown>
    </Header>
  );
}
