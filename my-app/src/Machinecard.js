import React from 'react';



class MachineCard extends React.Component {
    render()
    {
        return(
            <div>
                <h5>Machine Name/id A001</h5>
                <img className="machines" src={require('../Images/Milling.jpg')} />
                
                <h5>Temperature </h5>
                <h5>Vibration </h5>
            </div>
        )
    }
}
export default MachineCard;

