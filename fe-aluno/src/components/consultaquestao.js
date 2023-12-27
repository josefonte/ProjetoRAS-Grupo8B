import React from "react";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";

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
  Checkbox,
} from "antd";

const CheckboxGroup = Checkbox.Group;

const questao = {
  title: "indicadores financeiros",
  enunciado:
    "Habitant ut vitae mo Quis odio risus eget commodo maecenas. Lacus praesent at tellus amet sed cibus libero semper viverra sit. ",
  cotação_total: "3",
  cotação_resposta: "1.5",
  respostas: [
    {
      id: 1,
      selected: true,
      content: "Lorem sad dolor sit amet consectetur",
      correct: true,
    },
    {
      id: 2,
      selected: true,
      content: "Lorem ipsadfsum dolor sit amet consectetur",
      correct: false,
    },
    {
      id: 3,
      selected: false,
      content: "Lorem ipasfafssum dolor sit amet consectetur",
      correct: true,
    },
    {
      id: 4,
      selected: false,
      content: "Lorem ipsdafadfdasum dolor sit amet consectetur",
      correct: false,
    },
  ],
};

function ConsultaQuestao(questao) {
  console.log(questao);
  const id = questao.id;
  const { title, enunciado, respostas, cotação_resposta, cotação_total } =
    questao.questao;
  const { selected, content, correct } = questao.questao.respostas;

  return (
    <>
      <Row>
        <h2>
          Pergunta {id} - {title}
        </h2>
        <span>{enunciado}</span>
        <h3>Respostas</h3>
      </Row>
      <Row>
        <Col span={24}>
          {respostas.map((resposta) => (
            <Row align="middle">
              <Col span={16}>
                <Checkbox
                  defaultChecked={resposta.selected}
                  disabled
                  key={resposta.id}
                >
                  {resposta.content}
                </Checkbox>
              </Col>
              <Col span={8}>
                {resposta.correct ? (
                  <CheckCircleTwoTone twoToneColor="#52c41a" />
                ) : (
                  <CloseCircleTwoTone twoToneColor="red" />
                )}
              </Col>
              <br />
            </Row>
          ))}
        </Col>
      </Row>
      <Row style={{ marginTop: "2%" }}>
        <Col span={4} offset={20}>
          <span style={{ fontWeight: "bold" }}>Cotação </span> : &nbsp;
          {cotação_resposta}/{cotação_total}
        </Col>
      </Row>
      <Divider style={{ margin: "25px 0px 10px 0px" }} />
    </>
  );
}

export default ConsultaQuestao;
