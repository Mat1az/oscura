import React from 'react';
import '../css/cassette.scss';

class Cassette extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id="tape">
                    <div className="screw"></div>
                    <div className="screw"></div>
                    <div className="screw"></div>
                    <div className="screw"></div>
                    <div className="screw"></div>
                    <div id="front">
                        <div id="title">
                            <div id="logo"></div>
                            <div id="phrases">
                                <div id="type">Clásicos</div>
                                <div id="description">Oscura.cl</div>
                            </div>
                            <div id="duration">90</div>
                        </div>
                        <div id="bobines">
                            <div className="bobine">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="bobine">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Cassette;