import React from "react";

import { AppHeader } from "../components/AppHeader";

import { Layout, Table, Tag, theme } from "antd";
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
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = "green";
          if (tag === "Finished") {
            color = "orange";
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },

  {
    title: "Classificação",
    dataIndex: "classificacao",
    key: "classificacao",
  },
];
const data = [
  {
    key: "1",
    nome: "Teste de Ras",
    descricao: "Teste de escolhas Mutiplas de 10 questões",
    data: "10/12/2020",
    tags: ["Done"],
    classificacao: "A+",
  },
  {
    key: "2",
    nome: "Teste de Ras",
    descricao:
      "Teste de escolhas Mutiplas de 10 questões descriçao muito muito muito muito muito grannnnnnnnde muitomuito",
    data: "12/12/2020",
    tags: ["Done"],
    classificacao: "14.3/20",
  },
  {
    key: "3",
    nome: "Teste de Ras",
    descricao: "Teste de escolhas Mutiplas de 10 questões",
    data: "13/12/2020",
    tags: ["Done"],
    classificacao: "15/20",
  },
  {
    key: "4",
    nome: "Teste de Ras",
    descricao: "Teste de escolhas Mutiplas de 10 questões",
    data: "13/12/2020",
    tags: ["Finished"],
    classificacao: "",
  },
];

function AppProvasConcluidas() {
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
        <h3 style={{ paddingLeft: "10px" }}>Provas Concluídas</h3>
        <Table columns={columns} dataSource={data} />
      </Content>
    </Layout>
  );
}

export default AppProvasConcluidas;
