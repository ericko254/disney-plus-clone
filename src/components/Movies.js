import React from 'react';
import styled from 'styled-components';

function Movies() {
  return <Container>
      <h4>Recommended for You</h4>
      <Content>
          <Wrap>
              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C872C32AD77DB34E0AB742A1279A1866956AB37D462E5AF877703478ABDCCE6E/scale?width=1200&aspectRatio=1.78" />
          </Wrap>
          <Wrap>
              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0CF47540FB0AF5B539473230E2330D6781CF0B545E51E31C02530A7171B6F9A5/scale?width=1200&aspectRatio=1.78" />
          </Wrap>
          <Wrap>
              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0393E9025FEA64945E5D2599915B4050C957520DA062A08444F2DFC13E485F27/scale?width=1200&aspectRatio=1.78" />
          </Wrap>
          <Wrap>
              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0143739145A73E8A52BEB391D353C0D387AE81A0799D88F00CC5E3841230C8C0/scale?width=1200&aspectRatio=1.78" />
          </Wrap>
          <Wrap>
              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C4A1AE4AF83F1B18E3249A265CC4B353AF2EC7A8D8A17449C839C4D8CF900F6B/scale?width=1200&aspectRatio=1.78" />
          </Wrap>
          <Wrap>
              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/679119E881B53C0ED9485B0A245963AB9E428F65A165908BC64C1AFC46C4D8C6/scale?width=1200&aspectRatio=1.78" />
          </Wrap>
          <Wrap>
              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0A1AD4B0472AC299BA5F837CBEFD89019E5BD10DB3A5B234341C334D46CAB368/scale?width=1200&aspectRatio=1.78" />
          </Wrap>
          <Wrap>
              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/425B550C6684DF17D7AF70DF7D2FC126180FD97EDD7E6A99F6418480EB49163A/scale?width=1200&aspectRatio=1.78" />
          </Wrap>
          <Wrap>
              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7934CB401886A3E23462D56974A4DCC8ECDB1E17C0CAB350EBF4CC022266A2C/scale?width=1200&aspectRatio=1.78" />
          </Wrap>
          <Wrap>
              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EBABD6354324304D2A5D35254BECFC76F08EC0F6D6EEE3406446117F344CAAA9/scale?width=1200&aspectRatio=1.78" />
          </Wrap>
          <Wrap>
              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F6ED272C894E240FC0A78A2F4CCD568AB5F6758178B66FE1BEFB14628362D5F4/scale?width=1200&aspectRatio=1.78" />
          </Wrap>
          <Wrap>
              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E5F35763A458144798003E31176BB0911F9926986FBB7F9E471CBD2CC06C6727/scale?width=1200&aspectRatio=1.78" />
          </Wrap>
      </Content>
  </Container>;
}

export default Movies;


const Container = styled.div`
    
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`