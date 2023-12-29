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
        <Row>
          <Col span={6} offset={11}>
            <h3>GRUPO 8B</h3>
          </Col>
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
          Este produto surge na sequência do contacto do Reitor da Universidade
          de Vigo (Espanha) com o objetivo de criar um produto de software que
          permita a realização de provas de avaliação académicas. O ProbUM
          permite que alunos de uma dada unidade curricular de um curso
          universitário ou politécnico (i.e. do ensino superior) realizem as
          suas provas académicas, utilizando as infraestruturas informáticas da
          sua própria instituição de ensino superior (IES), mesmo que estas
          sejam muito limitadas quanto à sua dimensão, disponibilidade e
          capacidade. Assim, o Probum deve incluir requisitos funcionais que
          permitam a sua utilização em diversas IES e permitir alguma
          parametrização e configuração. No essencial, o Probum permite que os
          professores criem provas de avaliação e que as calendarizem, que os
          alunos as realizem (de forma devidamente calendarizada) e que essas
          provas sejam corrigidas, tendencialmente de forma automática.
        </p>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Requisitos de Arquiteturas de Software ©2023 Desenvolvido por Grupo 8B
      </Footer>
    </Layout>
  );
}

export default AppHome;
