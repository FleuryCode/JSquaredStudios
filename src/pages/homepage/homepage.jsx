import React from "react";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import HeaderText from "../../components/HeaderText/HeaderText";
import './homepage.styles.scss';



class Homepage extends React.Component {
    render() {
        return(
            <div className="homepage container-fluid">
                <div className="row headerContainer">
                    <div className="col-3 headerText justify-content-start">
                        <HeaderText />
                    </div>
                    <div className="col-9 headerImage">
                        <HeaderImage />
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;