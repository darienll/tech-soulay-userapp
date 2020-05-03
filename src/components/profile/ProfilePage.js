import { Drawer, List, Avatar, Divider, Col, Row, Button } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../redux/actions';
import './ProfilePage.css';

const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
      <p className="site-description-item-profile-p-label">{title}:</p>
      {content}
    </div>
  );
  
class ProfilePage extends Component {
    constructor(props) {
        super(props);
        
    }
    state = {
        visible: false,
        isLoggedIn: true
    }
    
    showDrawer = () => {
        this.setState({
          visible: true,
        });
     };
    onClose = () => {
      this.setState({
          visible: false,
      });
    };
    logOut = () => {
         this.props.dispatch(userActions.logout());
         this.setState({
            isLoggedIn: false
         })
         this.onClose();
         this.props.logOut();
    }
    render(){
        return (
            <div>
              
              <Drawer
                width={640}
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
              >
                <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
                  User Profile
                </p>
                <p className="site-description-item-profile-p">Personal</p>
                <Row>
                  <Col span={12}>
                    <DescriptionItem title="Full Name" content="Lily" />
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title="Account" content="AntDesign@example.com" />
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <DescriptionItem title="City" content="HangZhou" />
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title="Country" content="China🇨🇳" />
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <DescriptionItem title="Birthday" content="February 2,1900" />
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title="Website" content="-" />
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <DescriptionItem
                      title="Message"
                      content="Make things as simple as possible but no simpler."
                    />
                  </Col>
                </Row>
                <Divider />
                <p className="site-description-item-profile-p">Company</p>
                <Row>
                  <Col span={12}>
                    <DescriptionItem title="Position" content="Programmer" />
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title="Responsibilities" content="Coding" />
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <DescriptionItem title="Department" content="XTech" />
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <DescriptionItem
                      title="Skills"
                      content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                    />
                  </Col>
                </Row>
                <Divider />
                <p className="site-description-item-profile-p">Contacts</p>
                <Row>
                  <Col span={12}>
                    <DescriptionItem title="Email" content="AntDesign@example.com" />
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <DescriptionItem
                      title="Github"
                      content={
                        <a href="http://github.com/ant-design/ant-design/">
                          github.com/ant-design/ant-design/
                        </a>
                      }
                    />
                  </Col>
                </Row>
                <Button onClick={ this.logOut }>
                    Log out
                </Button>
              </Drawer>
            </div>
          );
    }

}
const mapStateToProps = state => {
    const loggingIn  = state.authentication;
    const userData   = state.authentication;
    // return {
    //     loggingIn
    // };

}
export default connect(mapStateToProps, null, null, {withRef: true})(ProfilePage)