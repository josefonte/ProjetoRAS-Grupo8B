import React from "react";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";

import { Col, Row, Divider, Checkbox } from "antd";

function ConsultaQuestao(questao) {
  console.log(questao);
  const id = questao.id;
  const { title, enunciado, respostas, cotação_resposta, cotação_total } =
    questao.questao;

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
