import React from "react";
import { Container, Jumbotron, Row, Col, Form, Button, Table } from "react-bootstrap";

const Page = (props) => {
    const { onChangeEmployeeId, onSearch, data, success, errors, employeeId } = props;
    return (<>
        <Container fluid>
            <Jumbotron>
                <Row>
                    <Col>
                        <Form inline>
                            <Form.Label htmlFor="employeeId" srOnly>
                                Employee Id
                        </Form.Label>
                            <Form.Control
                                className="mb-2 mr-sm-2"
                                id="employeeId"
                                placeholder="Employee Id"
                                value={employeeId} onChange={event => onChangeEmployeeId(event.target.value)}
                            />
                            <Button type="submit" className="mb-2"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onSearch();
                                }}>
                                Submit
                        </Button>
                        </Form>
                    </Col>
                    <Col>

                    </Col>
                </Row>
                <Row>
                    {success &&
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th>Contract type</th>
                                    <th>Hourly Salary</th>
                                    <th>Monthlu Salary</th>
                                    <th>Annual Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.roleName}</td>
                                        <td>{item.contractTypeName}</td>
                                        <td>{item.hourlySalary}</td>
                                        <td>{item.monthlySalary}</td>
                                        <td>{item.annualSalary}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    }
                </Row>
                {!success &&
                    <Row>
                        {errors && errors.map((item, i) => (
                            <div key={i}>{item}</div>
                        ))}
                    </Row>
                }
            </Jumbotron>
        </Container>
    </>);
}
export default Page;