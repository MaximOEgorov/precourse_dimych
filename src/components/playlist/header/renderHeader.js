
function renderPlayListImg(playlistForRendering) {
    let playlistImageElement = document.createElement("img");
    playlistImageElement.src = playlistForRendering.coverImageUrl;
    document.body.append(playlistImageElement);
}

function renderPlayListTitle(playlistForRendering) {
    let playlistTitleElement = document.createElement("h2");
    playlistTitleElement.append(playlistForRendering.title);
    document.body.append(playlistTitleElement);
}

export function renderPlaylistHeader(playlistForRendering) {
    renderPlayListImg(playlistForRendering);
    renderPlayListTitle(playlistForRendering);
}
