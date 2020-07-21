import React from 'react';
import Hls from 'hls.js';

export interface ReactHlsPlayerProps extends HTMLVideoElement {
    url: string;
    autoplay?: boolean;
    controls?: boolean;
    hlsConfig?: Partial<Hls.Config>;
    videoProps?: Partial<HTMLVideoElement>;
    playerRef?: React.Ref<any>;
    style?: React.CSSProperties;
    className?: string;
}

declare const ReactHlsPlayer: React.SFC<ReactHlsPlayerProps>

export default ReactHlsPlayer
