import React from "react";
import styled from "styled-components";
import { Image } from "semantic-ui-react";

import Text from "../../components/Text";

import { Space } from "../../utils/styles";

const Header = () => (
<HeaderContainer>
        <LogoContainer>
          <Image src="/images/logo.png" width={200} height={50} />
        </LogoContainer>
        <InfoContainer>
          <LocationContainer>
            <Text fontSize={12} fontWeight={600} color="#FFF">
              Telangana,
            </Text>
            <br />
            <Text fontSize={12} fontWeight={600} color="#FFF" lineHeight={12}>
              Hyderabad
            </Text>
          </LocationContainer>
          <Space horizontal space={26} />
          <TimeContainer>
            <Text fontSize={12} fontWeight={600} color="#FFF">
              Thursday, May 21
            </Text>
            <br />
            <Text fontSize={12} fontWeight={600} color="#FFF">
              11: 24 AM, IST
            </Text>
          </TimeContainer>
        </InfoContainer>
      </HeaderContainer>
);

export default Header;

const InfoContainer = styled.div`
  display: flex;
  margin-right: 80px;
`;

const LocationContainer = styled.div`
  border: 1px solid white;
  border-radius: 4px;
  padding: 0 20px;
`;

const TimeContainer = styled.div`
  position: relative;
  top: 2px;
`;

const HeaderContainer = styled.div`
  width: 100vw;
  height: 60px;
  background: #388dde;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const LogoContainer = styled.div`
  background: #fff;
  width: 230px;
  padding: 16px 0px;
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;