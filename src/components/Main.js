import React from 'react';
import styled from 'styled-components';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import { NavLink } from 'react-router-dom';
import { YinYang } from './AllSvgs';

const MainContainer =styled.div`
background: ${props=>props.theme.body};
width:100vw;
height:100vh;
overflow:hidden;

position:relative;
h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}

`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled(NavLink)`
color:${props=>props.theme.text};
position: absolute;
right:calc(1rem + 2vw);
text-decoration:none;
z-index: 3;

`

const Blog = styled(NavLink)`
color:${props=>props.theme.text};
position: absolute;
right:calc(1rem + 2vw);
top: 50%;
transform: rotate(90deg) translate(-50%, -50%);
text-decoration:none;
z-index: 3;

`
const Work = styled(NavLink)`
color:${props=>props.theme.text};
position: absolute;
left:calc(1rem + 2vw);
top: 50%;
transform: translate(-50%, -50%) rotate(-90deg);
text-decoration:none;
z-index: 3;

`
const BottomBar=styled.div`
position:absolute;
bottom:1rem;
left:0;
right:0;
width:100%;
display:flex;
justify-content:space-evenly;
z-index:1;
`
const About= styled(NavLink)`
color:${props=>props.theme.text};
text-decoration:none;
z-index:1;

`
const Skills= styled(NavLink)`
color:${props=>props.theme.text};
text-decoration:none;
z-index:1;
`

const Center = styled.button`
position:absolute;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
left:50%;
top:50%;
transform:translate(-50%,-50%);
background-color:transparent;
border:none;
outline:none;

&>:last-child{
    padding:1rem;
}


`
const Main =()=> {
    return (
        <MainContainer>
            <Container>
                <PowerButton/>
                <LogoComponent/>
                <SocialIcons />

                <Center>
                    <YinYang width={150} heigh={150} fill='currentColor'/>
                    <span>Click me</span>
                </Center>
                <Contact target="_blank" to={{pathname:"mailto:georgejacob437@gmail.com"}}>
                    <h2>
                        Say hi...
                    </h2>
                </Contact>
                <Blog target="_blank" to='/blog'>
                    <h2>
                        Blog
                    </h2>
                </Blog>
                <Work target="_blank" to='/work'>
                    <h2>
                        Work
                    </h2>
                </Work>
                <BottomBar>
                    <About target="_blank" to='/about'>
                        <h2>
                            About
                        </h2>
                    </About>
                    <Skills target="_blank" to='/skills'>
                        <h2>
                            Skills
                        </h2>
                    </Skills>
                </BottomBar>

            </Container>
        </MainContainer>

    );
}

export default Main;