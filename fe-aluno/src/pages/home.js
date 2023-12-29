import React from "react";

import { AppHeader } from "../components/AppHeader";
import { Layout, theme, Row, Col } from "antd";
import { Footer } from "antd/es/layout/layout";
import carlos from "../assets/images/carlos.jpg";
import duarte from "../assets/images/duarte.jpg";
import escudeiro from "../assets/images/escudeiro.jpg";
import francisca from "../assets/images/francisca.jpg";
import joaopedro from "../assets/images/joaopedro.jpg";
import juliana from "../assets/images/juliana.jpg";
import lucena from "../assets/images/lucena.jpg";
import nsimba from "../assets/images/nsimba.jpg";
import picao from "../assets/images/picao.jpg";
import raposo from "../assets/images/raposo.jpg";
import senra from "../assets/images/senra.jpg";
import ze from "../assets/images/ze.jpg";

const { Header, Content } = Layout;

function AppHome() {
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
          minHeight: "calc(100vh - 128px)",
        }}
      >
        <Row justify={"center"}>
          <h1>GRUPO 8B</h1>
        </Row>

        <Row>
          <Col span={6}>
            <img src={joaopedro} alt="Joao Pedro" class="fit-picture" />
          </Col>
          <Col span={6}>
            <img src={nsimba} alt="Nsimba" class="fit-picture" />
          </Col>
          <Col span={6}>
            <img src={duarte} alt="Duarte" class="fit-picture" />
          </Col>
          <Col span={6}>
            <img src={juliana} alt="juliana" class="fit-picture" />
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <img src={raposo} alt="raposo" class="fit-picture" />
          </Col>
          <Col span={6}>
            <img src={ze} alt="ze" class="fit-picture" />
          </Col>
          <Col span={6}>
            <img src={carlos} alt="carlos" class="fit-picture" />
          </Col>
          <Col span={6}>
            <img src={francisca} alt="carlos" class="fit-picture" />
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <img src={escudeiro} alt="carlos" class="fit-picture" />
          </Col>
          <Col span={6}>
            <img src={picao} alt="carlos" class="fit-picture" />
          </Col>
          <Col span={6}>
            <img src={lucena} alt="carlos" class="fit-picture" />
          </Col>
          <Col span={6}>
            <img src={senra} alt="carlos" class="fit-picture" />
          </Col>
        </Row>

        <p>
          O ProbUM é um produto de software desenvolvido em resposta ao pedido
          do Reitor da Universidade de Vigo, com o propósito de facilitar a
          realização de provas de avaliação acadêmica. Este software permite que
          alunos de cursos universitários ou politécnicos realizem suas
          avaliações utilizando as infraestruturas informáticas de suas próprias
          instituições de ensino superior, mesmo que estas sejam limitadas em
          dimensão, disponibilidade e capacidade. O ProbUM é projetado para ser
          utilizado em diversas instituições de ensino, sendo configurável e
          parametrizável. Em resumo, o ProbUM possibilita que professores criem
          e agendem provas de avaliação, alunos as realizem conforme o
          calendário estabelecido, e as provas sejam corrigidas,
          preferencialmente de forma automática.
        </p>
      </Content>
      <Footer style={{ textAlign: "center", fontWeight: "500" }}>
        Requisitos de Arquiteturas de Software ©2023 Desenvolvido por Grupo 8B
      </Footer>
    </Layout>
  );
}

export default AppHome;
