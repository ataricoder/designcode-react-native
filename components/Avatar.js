import React from "react";
import styled from "styled-components";

class Avatar extends React.Component {
  state = {
    photo: "https://cl.ly/fb5660c0faf0/download/avatar-default.jpg"
  };
  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}
export default Avatar;

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
