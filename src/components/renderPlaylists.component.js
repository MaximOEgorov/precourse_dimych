import {renderPlaylistHeader} from "./playlist/header/renderHeader.js";
import {renderTrack} from "./playlist/renderPlaylist.component.js";

export function renderPlaylists(playlistsForRendering) {
    let mainContainer = document.getElementById("mainContainer");

    for (let j = 0; j < playlistsForRendering.length; j++) {
        let playlistForRendering = playlistsForRendering[j]

        let trackListElement =  document.createElement("div");

        renderPlaylistHeader(playlistForRendering, trackListElement);
        for (let i = 0; i < playlistForRendering.tracks.length; i++) {
            const track = playlistForRendering.tracks[i];
            renderTrack(track, trackListElement);
        }
        mainContainer.append(trackListElement);
    }
}

