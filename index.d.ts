import React from 'react';

export interface ReactHlsPlayerProps {
    url: string;
    autoplay?: boolean;
    controls?: boolean;
    hlsConfig?: object;
    height?: number;
    width?: number;
    videoProps?: object;
    poster?: string;
    playerRef?: React.Ref<any>;
}

declare const ReactHlsPlayer: React.SFC<ReactHlsPlayerProps>

export default ReactHlsPlayer
