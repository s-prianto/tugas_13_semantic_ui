import React,{Component} from 'react';
import "semantic-ui-css/semantic.min.css";
import {Segment, Grid, Divider, Header, Icon, Search, Button, Dimmer, Loader, Placeholder, List, Table, Label, Container, Menu } from "semantic-ui-react";

const style={
  segment1:{
    padding:"2em 0 0 0",
  }
}

class App extends Component{
  render(){
    return(
      <div>
        <div style={style.segment1}>
          <Segment placeholder >
            <Grid columns={2} stackable textAlign="center">
              <Divider vertical>OR</Divider>

              <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                <Icon name="search"/>
                Cari Dokumen
                </Header>
                <Search placeholder="Search document..."/>
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                <Icon name="file pdf outline"/>
                Tambah Document Baru
                </Header>
                <Button primary>Create Document</Button>
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </div>
        <Segment>
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
          <Placeholder>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
          </Placeholder>
        </Segment>

        <br/>

        <Grid >
          <Grid.Row>
            <Grid.Column  width={4}>
              <Segment>
                <Placeholder>
                  <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Paragraph>
                </Placeholder>
              </Segment>
            </Grid.Column>
            <Grid.Column width={8}>
              <Segment>
                <Placeholder>
                  <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Paragraph>
                </Placeholder>
              </Segment>
            </Grid.Column>
            <Grid.Column width={4}>
              <h3>Website Terkait</h3>
              <List>
                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a href="https://www.google.com">Google</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a href="https://www.facebook.com">Facebook</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a href="https://react.semantic-ui.com">Semantic UI</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a href="https://www.niomic.com">Niomic</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a href="https://react.semantic-ui.com">React</a>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br/>
        <Container>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="2" textAlign="right">
                  <Search placeholder="Search document..."/>
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row textAlign="center">
                <Table.HeaderCell>Nama Document</Table.HeaderCell>
                <Table.HeaderCell>Jenis File</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon><p color="black">Panduan Belajar Javascript</p></Label>
                </Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar CSS</Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar React JS</Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="3">
                  <Menu floated="right" pagination>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron left"/>
                    </Menu.Item>
                    <Menu.Item as="a">1</Menu.Item>
                    <Menu.Item as="a">2</Menu.Item>
                    <Menu.Item as="a">3</Menu.Item>
                    <Menu.Item as="a">4</Menu.Item>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron right"/>
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Container>
        <br/><br/>
      </div>
    )
  }
}

export default App;
