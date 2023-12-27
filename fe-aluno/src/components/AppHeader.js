import React, { useState } from "react";

import {
  CalendarTwoTone,
  FileTextTwoTone,
  ProfileTwoTone,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Avatar, Space, Badge, Menu, theme } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    label: "Agenda",
    key: "agenda",
    icon: <CalendarTwoTone />,
    path: "/agenda",
  },
  {
    label: "Provas Ativas",
    key: "ativas",
    icon: <FileTextTwoTone />,
    path: "/provas-ativas",
  },
  {
    label: "Provas Concluídas",
    key: "concluidas",
    icon: <ProfileTwoTone />,
    path: "/provas-concluidas",
  },
];

export function AppHeader() {
  const [current, setCurrent] = useState("");

  const onClick = (e) => {
    setCurrent(e.key);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div
      style={{
        alignItems: "flex-start",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
        background: colorBgContainer,
      }}
    >
      <div className="logo" style={{ maxWidth: "90px", paddingLeft: "10px" }}>
        <Link to={"/"}>
          <a style={{ color: "black" }}>
            <h2 style={{ margin: "0 0 0 0" }}>ProbUM</h2>
          </a>
        </Link>
      </div>

      <Menu
        style={{ minWidth: "450px" }}
        mode="horizontal"
        onClick={onClick}
        selectedKeys={[current]}
      >
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>

      <div className="logo" style={{ paddingRight: "10px" }}>
        <Space wrap size={16}>
          <Badge count={1}>
            <BellOutlined style={{ fontSize: "18px", paddingTop: "2px" }} />
          </Badge>
          <Avatar size="small" icon={<UserOutlined />} />
          <p style={{ margin: "0 0 0 0" }}> Paulo Flores(d458)</p>
        </Space>
      </div>
    </div>
  );
}
