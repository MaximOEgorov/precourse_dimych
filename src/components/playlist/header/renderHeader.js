
function renderPlayListImg(playlistForRendering, trackListElement) {
//    let mainContainer = document.getElementById("mainContainer");
    let playlistImageElement = document.createElement("img");
    playlistImageElement.src = playlistForRendering.coverImageUrl;
    trackListElement.appendChild(playlistImageElement);
}

function renderPlayListTitle(playlistForRendering, trackListElement) {
    let playlistTitleElement = document.createElement("h2");
    playlistTitleElement.append(playlistForRendering.title);
    trackListElement.appendChild(playlistTitleElement);
}

export function renderPlaylistHeader(playlistForRendering, trackListElement) {
    renderPlayListImg(playlistForRendering, trackListElement);
    renderPlayListTitle(playlistForRendering, trackListElement);
}
