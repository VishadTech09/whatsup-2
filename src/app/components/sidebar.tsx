
import { Avatar, IconButton} from '@mui/material';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import * as EmailValidator from 'email-validator';
import {auth} from './../../../app-firebase';
import {signOut} from 'firebase/auth';

const Sidebar = () => {
    const createChat = ()=>{
        const user = prompt("Please enter your user email address");
        
        if(!user) return;

        if(EmailValidator.validate(user)){  
            // add chat into the db.
        }
    }
    const userSignOut = ()=>{
        signOut(auth);
    }

    return (
        <Container>
            <Header>
                <UserAvtar onClick={userSignOut}/>

                <IconContainer>
                    <IconButton>
                        <MessageOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertOutlinedIcon />
                    </IconButton>
                </IconContainer>
            </Header>

            <SearchContainer>
                <SearchOutlinedIcon />
                <SearchInput placeholder='Search in chats' />
            </SearchContainer>
            <SidebarButton onClick={createChat}>Start a new Chat</SidebarButton>
        </Container>
    );
}

export default Sidebar;


const Container = styled.div``;

const Header = styled.div`
    display: flex;
    position: sticky;
    top:0;
    z-index:1;
    background-color:white;
    justify-content: space-between;
    align-items: center ;
    height: 50px;
    border-bottom: 1px solid whitesmoke;
    padding:15px;
`;

const UserAvtar = styled(Avatar)`
cursor: pointer;
    :hover {
        opacity: 0.8;
    };
`;

const IconContainer = styled.div`
display: flex;
`;

const SearchContainer = styled.div`
display: flex;
align-items: center;
padding:20px;
border-radius:2px
`;

const SearchInput = styled.input`
    outline-width: 0;
    border: none;
    flex: 1;
`;

const SidebarButton = styled(Button)`    
    width: 100%;  
    &&&{
        border-top: 1px solid whitesmoke ;
        border-bottom: 1px solid whitesmoke ;
    }
`;