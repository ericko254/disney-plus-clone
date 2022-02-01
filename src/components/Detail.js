import React from 'react';
import styled from 'styled-components';

function Detail() {
  return <Container>
      <Background>
        <img src="https://cdn.vox-cdn.com/thumbor/eU72waq9EjmEsOS-sMcndQrGzXc=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/11604673/BO_RGB_s120_22a_cs_pub.pub16.318.jpg" />
      </Background>
      <ImageTitle>
        <img src = "https://thatsitla.com/wp-content/uploads/2018/06/disney-bao-short-e1528905177899.jpg" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        2018 | 7m | Fantasy, Kids, Animation
      </SubTitle>
      <Description>
        An ageing Chinese mother, feeling alone when her
        child moves out, gets a second chance at motherhood
        when one of her dumplings comes to life.
      </Description>
  </Container>;
}

export default Detail;
const Container= styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;

`
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  min-width: 200px;
  width: 35vw;

  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 0.5;
  }

`

const Controls = styled.div`
  display: flex;
  align-items: center;

`

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover{
    background: rgb(198, 198, 198);
  }

`

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;


`

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span{
    font-size: 30px;
    color: white;
  }

`

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);

`
const SubTitle = styled.div`
  margin-top: 26px;
  color: rgb(249, 249, 249);
  min-height: 20px;
  font-size: 15px;

`

const Description = styled.div `
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);

`