import React from 'react';
import ReactDOM from 'react-dom';

import Player from './components/react-hls-player';

class Index extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            hlsUrl : 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
            destroy : false
        };

        this._handleInputBlur = this._handleInputBlur.bind(this);
        this._handleEnter = this._handleEnter.bind(this);
        this._handleDestroyClick = this._handleDestroyClick.bind(this);
    }

    _handleInputBlur (e) {
        this.setState({
            hlsUrl : e.target.value
        });
    }

    _handleEnter (e) {
        if (e.keyCode === 13) {
            this.setState({
                hlsUrl : e.target.value
            });
        }
    }

    _handleDestroyClick () {
        this.setState({
            destroy : true
        });
    }

    render () {
        let { hlsUrl, destroy } = this.state;

        return (
            <div>
                <div
                    style={{
                        margin: '0 0 20px'
                    }}
                >
                    <label
                        style={{
                            display: 'block',
                            marginBottom: 10
                        }}
                        htmlFor="url-input"
                    >hls url : </label>
                    <input
                        id="url-input"
                        type="text"
                        defaultValue={hlsUrl}
                        onBlur={this._handleInputBlur}
                        onKeyUp={this._handleEnter}
                        style={{
                            width: '100%',
                            height: '30px',
                            lineHeight: '30px',
                            fontSize: '16px',
                            color: '#333'
                        }}
                    />
                </div>

                {
                    !destroy
                        ? <Player url={hlsUrl} videoProps={{ loop : true }} />
                        : null
                }

                <br />

                <button
                    style={{
                        padding: '5px 10px'
                    }}
                    onClick={this._handleDestroyClick}
                >
                    Destroy Video
                </button>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('container'));
