import React from 'react'
import { Button, ButtonGroup, AppBar, Tooltip } from '@material-ui/core';

class CustomerProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // statusTypes      : ["Open", "Not Ready To Move Forward", "Contacted", "Unqualified", "Converted"],
            // currentStatusCode: [2,2,1,0,0],
            statusTypes: [
                {"name": "Open", "status_code": 2},
                {"name": "Not Ready To Move Forward", "status_code": 2},
                {"name": "Contacted", "status_code": 1},
                {"name": "Unqualified", "status_code": 0},
                {"name": "Converted", "status_code": 0}
            ]
        }
    }
    // status color code
    // 2-> completed; 1-> in progress; 0-> todo or not completed

    // statusColorCodeMap = {
    //     0: "#808080",
    //     1: "#0000FF",
    //     2: "#008000"
    // }

    statusCodeAttribMap = {
        0: {"hexcode": "#808080", "isdiabled": "N"},
        1: {"hexcode": "#0000FF", "isdiabled": "N"},
        2: {"hexcode": "#008000", "isdiabled": "N"}
    }

    generateStatusColorHexValue = (current_status_color_code) => {
        return this.statusCodeAttribMap[current_status_color_code].hexcode
    }

    generateStatusButtons = () => {
        let statusButtonList = []
        this.state.statusTypes.map(
            (status) => {
                statusButtonList.push(
                    <Tooltip title={status.name} placement="bottom">
                        <Button
                            style={{
                                backgroundColor: this.generateStatusColorHexValue(status.status_code)
                            }}
                            // style={{
                            //     borderRadius: 35,
                            //     backgroundColor: "#21b6ae",
                            //     padding: "18px 36px",
                            //     fontSize: "18px"
                            // }}
                            variant="contained"
                        >
                            {status.name}
                            {/* {status.status_code} */}
                        </Button>
                    </Tooltip>
                )
            }
        )
        return statusButtonList;
    }

    render() {
        console.log("CustomerProgressBar loaded...")
        const statusTypes = ["Open", "Not Ready", "Contacted", "Converted"]

        return(
            <div>
                <AppBar position="static" color="default">
                    <ButtonGroup>
                        {this.generateStatusButtons()}
                    </ButtonGroup>
                </AppBar>
            </div>
        )
    }
}

export default CustomerProgressBar