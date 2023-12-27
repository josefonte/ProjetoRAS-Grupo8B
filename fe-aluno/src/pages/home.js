import React from "react";

import { AppHeader } from "../components/AppHeader";
import { Layout, theme } from "antd";
import { Footer } from "antd/es/layout/layout";
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
          padding: "20px 100px",
          minHeight: "calc(100vh - 128px)",
        }}
      >
        <h3 style={{ alignSelf: "center" }}>HOME</h3>
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
