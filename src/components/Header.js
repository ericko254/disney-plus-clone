import React from 'react';
import styled from 'styled-components';

function header() {
  return (
    <Nav>
        <Logo src = "/images/logo.svg" />
        <NavMenu>
            <a>
                <img src="/images/home-icon.svg" />
                <span>HOME</span>
            </a>
            <a>
                <img src="/images/search-icon.svg" />
                <span>SEARCH</span>
            </a>
            <a>
                <img src="/images/watchlist-icon.svg" />
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src="/images/original-icon.svg" />
                <span>ORIGINALS</span>
            </a>
            <a>
                <img src="/images/movie-icon.svg" />
                <span>MOVIES</span>
            </a>
            <a>
                <img src="/images/series-icon.svg" />
                <span>SERIES</span>
            </a>
        </NavMenu>
        <UserImg src ="data:image/jpeg;base64,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" />

    </Nav>
  )
}

export default header;

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`

const Logo =  styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        
        img{
            height: 20px;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`