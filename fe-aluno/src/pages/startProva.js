import React from "react";
import { FileTextOutlined } from "@ant-design/icons";

import { AppHeader } from "../components/AppHeader";
import { useParams } from "react-router-dom";
import {
  Layout,
  Breadcrumb,
  theme,
  Col,
  Row,
  Button,
  Flex,
  Divider,
  Space,
} from "antd";
const { Header, Content } = Layout;

const exam = {
  key: "1",
  nome: "Teste de Ras",
  descricao:
    "Este produto surge na sequência do contacto do Reitor da Universidade de Vigo (Espanha) com o objetivo de criar um produto de software que permita a realização de provas de avaliação académicas. O ProbUM permite que alunos de uma dada unidade curricular de um curso universitário ou politécnico (i.e. do ensino superior) realizem as suas provas académicas, utilizando as infraestruturas informáticas da sua própria instituição de ensino superior (IES), mesmo que estas sejam muito limitadas quanto à sua dimensão, disponibilidade e capacidade. ",
  salas: "CP1 1.02",
  data: "10/12/2020",
  hora_inicio: "10:00",
  hora_fim: "11:30",
  tags: ["active"],
  uc: "Requisitos de Arquitetura de Software",
  curso: "Mestrado em Engenharia Informática",
  semestre: "1º",
  anoletivo: "2023/2024",
};

function getDuration(hora_inicio, hora_fim) {
  const startTime = new Date(`2000-01-01T${hora_inicio}:00Z`);
  const endTime = new Date(`2000-01-01T${hora_fim}:00Z`);

  const timeDifferenceInMilliseconds = endTime - startTime;

  const hours = Math.floor(timeDifferenceInMilliseconds / (1000 * 60 * 60));
  const minutes = Math.floor(
    (timeDifferenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
  );

  return { hours, minutes };
}

function AppStartProva() {
  const { id } = useParams();
  console.log("Id da prova: ", id);

  // route get the exam from its id
  const { hours: dur_hora, minutes: dur_min } = getDuration(
    exam.hora_inicio,
    exam.hora_fim
  );

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
          padding: "20px 20%",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <Breadcrumb
          items={[
            {
              href: "/provas-ativas",
              title: (
                <>
                  <FileTextOutlined />
                  <span>Provas Ativas</span>
                </>
              ),
            },
            {
              title: exam.nome,
            },
          ]}
        />
        <Row>
          <Col span={24}>
            <h1>{exam.nome}</h1>
          </Col>
        </Row>
        <Divider style={{ margin: "1px 0px 10px 0px" }} />
        <Row>
          <Col span={24}>
            <span>{exam.descricao}</span>
          </Col>
        </Row>
        <Row style={{ marginBottom: "5%" }}>
          <Col span={24}>
            <h3>Informações</h3>
            <Space
              direction="vertical"
              size="small"
              style={{
                display: "flex",
              }}
            >
              <Row>
                <span
                  style={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  Curso
                </span>
                &nbsp;: &nbsp;{exam.curso}
              </Row>

              <Row>
                <span
                  style={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  Unidade Curricular
                </span>
                &nbsp;: &nbsp;{exam.uc}
              </Row>
              <Row>
                <span style={{ fontWeight: "bold" }}>
                  {exam.semestre} Semestre | Ano Letivo {exam.anoletivo}
                </span>
              </Row>
            </Space>

            <Row style={{ marginTop: "5%", marginBottom: "5%" }}>
              <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
                Início{" "}
              </span>
              &nbsp;: &nbsp;{exam.hora_inicio}&nbsp;| &nbsp;
              <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
                Fim
              </span>
              &nbsp;: &nbsp;{exam.hora_fim}&nbsp;| &nbsp;
              <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
                Duração
              </span>
              &nbsp;: &nbsp;{dur_hora} horas e {dur_min} minutos
            </Row>
          </Col>
        </Row>

        <Row>
          <Col span={8} offset={16}>
            <Flex gap="small" wrap="wrap" justify="flex-end">
              <Button style={{ color: "gray" }}>Voltar</Button>
              <Button type="primary">Começar</Button>
            </Flex>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default AppStartProva;
