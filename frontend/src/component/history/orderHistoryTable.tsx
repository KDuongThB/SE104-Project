import { Button, Card, Container, Table } from "react-bootstrap";
import "./style.css"

export function OrderHistoryTable() {
  return (
    <>
      <Container className="bg-white shadow-sm">
        <Table>
          <thead className="orderHistory_table">
            <tr>
              <th>Mã đơn hàng</th>
              <th>Giá tiền</th>
              <th>Ngày mua</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody className="orderHistory_table">
            <tr>
              <td>#12345678</td>
              <td>25.000 vnd</td>
              <td>14/11/2022</td>
              <td className="text-success ">Đã thanh toán</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
