import * as React from "react";
import "bulma/css/bulma.min.css";
import "../css/index.css";
import Cassette from "../components/Cassette";
import {TwitterFollowButton, TwitterTimelineEmbed} from "react-twitter-embed";
import {useState} from "react";
import Card from "../components/Card";

const IndexPage = () => {
    const [state] = useState({
        streaming: '',
        sm: [
            {img: 'twitter.png', url: 'https://twitter.com/radioscura'},
            {img: 'instagram.png', url: 'https://www.instagram.com/exitos8090radioscura/'},
            {img: 'facebook.png', url: 'https://www.facebook.com/Radioscura/'},
        ],
        mp: [
            {img: 'wmplay.png', url: ''},
            {img: 'winamp.png', url: ''},
            {img: 'itunes.png', url: ''},
            {img: 'real.png', url: ''},
            {img: 'tunein.png', url: ''},
        ],
    });

    return (
        <div className="App">
            <main className='columns is-centered is-multiline'>
                <div className='column is-2'></div>
                <div className='column is-8'>
                    <div className='columns is-multiline'>
                        <div className='column is-3'>
                            <Card title='Twitter' content={
                                <TwitterTimelineEmbed sourceType="profile" screenName="Radioscura"
                                                      options={{height: 400}}/>
                            }
                            />
                        </div>
                        <div className='column is-7'>
                            <Card title='Music Player' content={
                                <div className='columns is-centered has-text-centered'>
                                    <div className='column is-10'>
                                        <Cassette></Cassette>
                                        <audio autoPlay="autoplay" controls="controls" src={state.streaming + '/;'}/>
                                    </div>
                                </div>
                            }
                            />
                        </div>
                        <div className='column is-2'>
                            <div className='columns is-multiline'>
                                <div className='column social-media'>
                                    <Card title='Síguenos' content={
                                        <React.Fragment>
                                            {state.sm.map((v) => (
                                                <a href={v.url} target="_blank" rel="noreferrer">
                                                    <img src={require(`../images/ico/${v.img}`).default} alt="" className="img-circle"/>
                                                </a>
                                            ))}
                                            <TwitterFollowButton screenName={'Radioscura'}/>
                                        </React.Fragment>
                                    }
                                    />
                                </div>
                                <div className='column social-media'>
                                    <Card title='Escúchanos' content={
                                        <React.Fragment>
                                            {state.sm.map((v) => (
                                                <a href={v.url} target='_blank' rel="noreferrer">
                                                    <img alt="" className="img-circle" src={require(`../images/ico/${v.img}`).default}/>
                                                </a>
                                            ))}
                                            <TwitterFollowButton screenName={'Radioscura'}/>
                                        </React.Fragment>
                                    }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='column is-12'>
                            <Card title='Apoyo' content={
                                <b>Si te gusta la música, considera seguirnos.</b>
                            }
                            />
                        </div>
                    </div>
                </div>
                <div className='column is-2'></div>
            </main>
        </div>
    )
}

export default IndexPage

export const Head = () => <title>Radioscura</title>
