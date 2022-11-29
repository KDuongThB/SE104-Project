import {
  Col,
  Container,
  Row,
  Button,
  Stack,
  ToggleButton,
  ButtonGroup,
} from "react-bootstrap";
import React, { useState } from "react";
import { OrderHistoryTable } from "../../component/history/orderHistoryTable";
import { OrderHistoryTableCancel } from "../../component/history/orderHistoryTableCancel";
import "./style.css";

export function History() {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Đơn hàng đã đặt", value: "1" },
    { name: "Đơn hàng đã huỷ", value: "2" },
  ];
  return (
    <>
      <Container
        // className="bg-light"
        style={{
          height: "100%",
        }}
        id="history"
      >
        <div className="hello_text d-flex flex-row">
          Xin chào, <div className="username_text"> user_name</div>
        </div>
        <div className="header_orderHistory">Lịch sử đặt hàng</div>
        <Row>
          <Col>
            <ButtonGroup className="d-flex flex-column">
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={"outline-danger buttonSelect"}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                  className="buttonSelect rounded d-flex flex-column justify-content-center"
                >
                  <div className="buttonText">{radio.name}</div>
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Col>
          <Col>
            {radioValue === "1" && (
              <div>
                <OrderHistoryTable />{" "}
              </div>
            )}
            {radioValue === "2" && (
              <div>
                <OrderHistoryTableCancel />{" "}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
