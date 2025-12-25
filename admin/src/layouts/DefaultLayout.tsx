import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderNav from "../components/Header";
import RouterComponent from "../RouterComponent";
import menuItems from "../routes";

const { Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  // Get the selected keys based on current path
  const getSelectedKeys = () => {
    const path = location.pathname;

    // Find the menu item that matches the current path
    const findSelectedKey = (items: any[]): string[] => {
      for (const item of items) {
        if (item.key === path) {
          return [item.key];
        }
        if (item.children) {
          const childResult = findSelectedKey(item.children);
          if (childResult.length > 0) {
            return [...childResult, item.key];
          }
        }
      }
      return [];
    };

    return findSelectedKey(menuItems);
  };

  const getOpenKeys = () => {
    const path = location.pathname;
    const openKeys: string[] = [];

    const findParentKeys = (items: any[], parentKey?: string) => {
      for (const item of items) {
        if (item.key === path && parentKey) {
          openKeys.push(parentKey);
        }
        if (item.children) {
          findParentKeys(item.children, item.key);
        }
      }
    };

    findParentKeys(menuItems);
    return openKeys;
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {}}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          className="demo-logo-vertical"
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {collapsed ? "A" : "Admin"}
        </div>

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={getSelectedKeys()}
          defaultOpenKeys={getOpenKeys()}
          onClick={handleMenuClick}
          items={menuItems}
          style={{ height: "calc(100% - 64px)", borderRight: 0 }}
        />
      </Sider>

      <Layout
        style={{
          marginLeft: collapsed ? 0 : 200,
          transition: "all 0.2s",
        }}
      >
        <HeaderNav />{" "}
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
            minHeight: "calc(100vh - 112px)",
          }}
        >
          {/* Render the router component here */}
          <RouterComponent />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Saidul ©{new Date().getFullYear()} Created by Your Company
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
