import './OptionsCard.css';
import {Add, Show} from './SiteOperations';
import Button from '@mui/material/Button';
import {styled} from '@mui/system';
import React from "react";

function OptionsCard() {

    const [option, setOption] = React.useState(true);

    const StyledButton = styled(Button)({
        borderRadius: '0px',
        marginBottom: '10px',
        color: '#1136b4',
        borderBottom: '3px solid #E8ECFF',
        '&:hover': {
            backgroundColor: 'rgba(194,206,244,0.2)',
        }
    });

    return (
        <div className="options-card">
            <div className="information-title">
                hello and welcome to the CRUD-4U platform!
            </div>
            <div className="information">
                press list to view and edit/delete list site. press add to add a site.
            </div>
            <div className="options">
                <div className="buttons">
                    <StyledButton onClick={() => setOption(true)}>
                        list
                    </StyledButton>
                    <StyledButton onClick={() => setOption(false)}>
                        add
                    </StyledButton>
                </div>
                {option ? (<Show/>) : (<Add/>)}
            </div>
        </div>
    );
}

export default OptionsCard;