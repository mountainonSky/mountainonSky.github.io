import React from 'react';
import './balgre/sub02/css/sub02.scss';
import { subfts } from './components/sub';
function Sub02() {
    // console.log("확인")
    return (
        <div id="sub02">
            <subfts.SubHeader />
            <section>
                <subfts.Kinds />
                <div id="make" className="sub02-container">
                    <h3>base of <span>cocktails</span></h3>
                    <h4>칵테일의 베이스</h4>
                    <subfts.Fillter />
                    
                    <div className="clear"></div>
                    <subfts.GoToLearn />
                    <div className="clear"></div>
                </div>

            </section>

            <subfts.Footer />
        </div>
    );
}
export default Sub02;
