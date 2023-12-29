import React, { useState } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

import {
  Layout,
  Modal,
  Row,
  Col,
  Steps,
  Button,
  theme,
  Divider,
  Checkbox,
  Space,
  Statistic,
} from "antd";
const { Header, Content } = Layout;

const { Countdown } = Statistic;

const questoes = [
  {
    enunciado:
      "1Lorem ipsum dolor sit amet consectetur. Ultricies consequat massa platea amet ornare. Fermentum in ornare ac velit ut leo risus diam risus. Habitant ut vitae morbi libero purus facilisi velit ac mi. Diam nunc eu tempus vel pretium. Quis odio risus eget commodo maecenas. Lacus praesent at tellus amet sed sit velit. Faucibus libero semper viverra sit. ",
    opções: ["opçao1", "opçao2", "opçao3", "opção4"],
  },
  {
    enunciado:
      "2Lorem ipsum dolor sit amet consectetur. Ultricies consequat massa platea amet ornare. Fermentum in ornare ac velit ut leo risus diam risus. Habitant ut vitae morbi libero purus facilisi velit ac mi. Diam nunc eu tempus vel pretium. Quis odio risus eget commodo maecenas. Lacus praesent at tellus amet sed sit velit. Faucibus libero semper viverra sit. ",
    opções: ["opçao1", "opçao2", "opçao3", "opção4"],
  },
  {
    enunciado:
      "3Lorem ipsum dolor sit amet consectetur. Ultricies consequat massa platea amet ornare. Fermentum in ornare ac velit ut leo risus diam risus. Habitant ut vitae morbi libero purus facilisi velit ac mi. Diam nunc eu tempus vel pretium. Quis odio risus eget commodo maecenas. Lacus praesent at tellus amet sed sit velit. Faucibus libero semper viverra sit. ",
    opções: ["opçao1", "opçao2", "opçao3", "opção4"],
  },
  {
    enunciado:
      "4Lorem ipsum dolor sit amet consectetur. Ultricies consequat massa platea amet ornare. Fermentum in ornare ac velit ut leo risus diam risus. Habitant ut vitae morbi libero purus facilisi velit ac mi. Diam nunc eu tempus vel pretium. Quis odio risus eget commodo maecenas. Lacus praesent at tellus amet sed sit velit. Faucibus libero semper viverra sit. ",
    opções: ["opçao1", "opçao2", "opçao3", "opção4"],
  },
  {
    enunciado:
      "Lorem ipsum dolor sit amet consectetur. Ultricies consequat massa platea amet ornare. Fermentum in ornare ac velit ut leo risus diam risus. Habitant ut vitae morbi libero purus facilisi velit ac mi. Diam nunc eu tempus vel pretium. Quis odio risus eget commodo maecenas. Lacus praesent at tellus amet sed sit velit. Faucibus libero semper viverra sit. ",
    opções: ["opçao1", "opçao2", "opçao3", "opção4"],
  },
  {
    enunciado:
      "Lorem ipsum dolor sit amet consectetur. Ultricies consequat massa platea amet ornare. Fermentum in ornare ac velit ut leo risus diam risus. Habitant ut vitae morbi libero purus facilisi velit ac mi. Diam nunc eu tempus vel pretium. Quis odio risus eget commodo maecenas. Lacus praesent at tellus amet sed sit velit. Faucibus libero semper viverra sit. ",
    opções: ["opçao1", "opçao2", "opçao3", "opção4"],
  },
  {
    enunciado:
      "Lorem ipsum dolor sit amet consectetur. Ultricies consequat massa platea amet ornare. Fermentum in ornare ac velit ut leo risus diam risus. Habitant ut vitae morbi libero purus facilisi velit ac mi. Diam nunc eu tempus vel pretium. Quis odio risus eget commodo maecenas. Lacus praesent at tellus amet sed sit velit. Faucibus libero semper viverra sit. ",
    opções: ["opçao1", "opçao2", "opçao3", "opção4"],
  },
  {
    enunciado:
      "Lorem ipsum dolor sit amet consectetur. Ultricies consequat massa platea amet ornare. Fermentum in ornare ac velit ut leo risus diam risus. Habitant ut vitae morbi libero purus facilisi velit ac mi. Diam nunc eu tempus vel pretium. Quis odio risus eget commodo maecenas. Lacus praesent at tellus amet sed sit velit. Faucibus libero semper viverra sit. ",
    opções: ["opçao1", "opçao2", "opçao3", "opção4"],
  },
];

const createNavItems = (questoes, step) => {
  return questoes.map((_, index) => ({
    status: index === step ? "progress" : index < step ? "finish" : "wait",
  }));
};

const getQuestoes = () => {
  return questoes;
};

function conversorDuracao(hours, minutes) {
  const totalMilliseconds = hours * 60 * 60 * 1000 + minutes * 60 * 1000;
  return totalMilliseconds;
}

function AppResolverProva() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [duracao] = useState(Date.now() + conversorDuracao(1, 30));
  const [NavItems, setNavItems] = useState(createNavItems(questoes));
  const [current, setCurrent] = useState(0);
  const [respostas, setRespostas] = useState([]); // [ {id: 1, resposta: 1}, {id: 2, resposta: 2}
  const [questoesProva, setQuestoesProva] = useState(getQuestoes());
  const [selectedOptions, setSelectedOptions] = useState([]); // [ {id: 1, resposta: 1}, {id: 2, resposta: 2}
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const onFinish = () => {
    handleOk();
  };

  const handleOk = () => {
    submitProva();
    //submeter respostas
    //informar que a prova foi preenchida
    setTimeout(() => {
      navigate("/provas-ativas");
    }, 1000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const nextQuestion = () => {
    respostas.push({
      selectedIndexes: selectedOptions
        .map((option, index) => (option ? index : null))
        .filter((index) => index !== null),
    });

    setSelectedOptions([]);

    if (current + 1 < questoesProva.length) {
      setCurrent(current + 1);
      setNavItems(createNavItems(questoesProva, current + 1));
    } else {
      Modal.confirm({
        title: "Finalizar a Prova",
        content: "Ao confirmar a prova será finalizada e submetida.",
        footer: (_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        ),
      });
    }
    //if current == questoes.length => submit respostas
  };

  const handleCheckboxChange = (index) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[index] = !updatedSelectedOptions[index];
    setSelectedOptions(updatedSelectedOptions);
  };

  const submitProva = () => {
    console.log("submit prova");
  };

  return (
    <Layout>
      <Header
        style={{
          background: colorBgContainer,
        }}
      >
        <Row align={"middle"}>
          <Col span={4}>
            <a onClick={() => setOpen(true)}>
              <ArrowLeftOutlined /> Sair
            </a>
          </Col>
          <Col span={16}>
            <Steps
              type="navigation"
              size="small"
              current={current}
              className="site-navigation-steps"
              items={NavItems}
            />
          </Col>
          <Col span={4} align={"middle"}>
            <Countdown value={duracao} onFinish={onFinish} />
          </Col>
        </Row>
      </Header>

      <Content
        style={{
          padding: "20px 20%",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <Row>
          <h2>Pergunta {current + 1}</h2>
        </Row>
        <Divider style={{ margin: "1px 0px 10px 0px" }} />
        <Row>
          <span>{questoesProva[current].enunciado}</span>
        </Row>
        <Row>
          <h3>Respostas</h3>
        </Row>

        <Row>
          <Space
            direction="vertical"
            size="small"
            style={{
              display: "flex",
            }}
          >
            {questoesProva[current].opções.map((opção, index) => (
              <Checkbox
                key={index}
                onChange={() => handleCheckboxChange(index)}
                checked={selectedOptions[index]}
              >
                {opção}
              </Checkbox>
            ))}
          </Space>
        </Row>

        <Row justify={"end"}>
          {current < questoesProva.length - 1 ? (
            <Button onClick={nextQuestion} type="primary">
              Guardar e Prosseguir
            </Button>
          ) : (
            <Button onClick={() => setOpen(true)} type="primary">
              Guardar e Finalizar Prova
            </Button>
          )}
        </Row>
        <Modal
          open={open}
          title="Finalizar a Prova"
          content="Ao confirmar a prova será finalizada e submetida."
          onOk={handleOk}
          onCancel={handleCancel}
          footer={(_, { OkBtn, CancelBtn }) => (
            <>
              <CancelBtn />
              <OkBtn />
            </>
          )}
        >
          <p>Ao confirmar a prova será finalizada e submetida.</p>
        </Modal>
      </Content>
    </Layout>
  );
}

export default AppResolverProva;
