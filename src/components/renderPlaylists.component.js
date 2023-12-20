import {renderPlaylistHeader} from "./playlist/header/renderHeader.js";
import {renderTrack} from "./playlist/renderPlaylist.component.js";

export function renderPlaylist(playlistForRendering) {
    renderPlaylistHeader(playlistForRendering);
    for (let i = 0; i < playlistForRendering.tracks.length; i++) {
        const track = playlistForRendering.tracks[i];
        renderTrack(track);
    }
}

