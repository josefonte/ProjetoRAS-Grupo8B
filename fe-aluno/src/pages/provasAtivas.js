import React from "react";
import { AppHeader } from "../components/AppHeader";

import { PlayCircleTwoTone } from "@ant-design/icons";
import { Layout, Space, Table, theme } from "antd";
const { Header, Content } = Layout;

const columns = [
  {
    title: "Nome",
    dataIndex: "nome",
    key: "nome",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Descrição",
    dataIndex: "descricao",
    key: "descricao",
    render: (text) => (
      <p
        style={{
          margin: "0 0 0 0",
          maxWidth: "600px",
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </p>
    ),
  },
  {
    title: "Data",
    dataIndex: "data",
    key: "data",
  },
  {
    title: "Hora",
    dataIndex: "hora",
    key: "hora",
  },

  {
    title: "Salas",
    dataIndex: "salas",
    key: "salas",
  },

  {
    title: "Ação",
    key: "action",
    render: () => (
      <Space size="small">
        <a>
          Começar <PlayCircleTwoTone size={"small"} />
        </a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    nome: "Teste de Ras",
    descricao: "Teste de escolhas Mutiplas de 10 questões",
    salas: "CP1 1.02",
    data: "10/12/2020",
    hora: "10:00",
    tags: ["active"],
  },
  {
    key: "2",
    nome: "Teste de Ras",
    descricao:
      "Teste de escolhas Mutiplas de 10 questões descriçao muito muito muito muito muito grannnnnnnnde muitomuito",
    salas: "CP1 1.02",
    data: "11/12/2020",
    hora: "11:00",
    tags: ["active"],
  },
  {
    key: "3",
    nome: "Teste de Ras",
    descricao: "Teste de escolhas Mutiplas de 10 questões",
    salas: "CP1 1.02",
    data: "12/12/2020",
    hora: "12:00",
    tags: ["active"],
  },
];

function AppProvasAtivas() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          background: colorBgContainer,
        }}
      >
        <AppHeader />
      </Header>

      <Content
        style={{
          padding: "20px 100px",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <h3 style={{ paddingLeft: "10px" }}>Provas Ativas</h3>
        <Table columns={columns} dataSource={data} />
      </Content>
    </Layout>
  );
}

export default AppProvasAtivas;
