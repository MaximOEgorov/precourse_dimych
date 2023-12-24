
function renderPlayListImg(playlistForRendering, thisElement) {
//    let mainContainer = document.getElementById("mainContainer");
    let playlistImageElement = document.createElement("img");
    playlistImageElement.src = playlistForRendering.coverImageUrl;
    thisElement.appendChild(playlistImageElement);
}

function renderPlayListTitle(playlistForRendering, thisElement) {
    let playlistTitleElement = document.createElement("h2");
    playlistTitleElement.append(playlistForRendering.title);
    thisElement.appendChild(playlistTitleElement);
}

function renderPlayListDescription(playlistForRendering, thisElement) {
    let playlistTitleElement = document.createElement("p");
    playlistTitleElement.append(playlistForRendering.description);
    thisElement.appendChild(playlistTitleElement);
}

function renderPlayListTop(playlistForRendering, thisElement) {
    let playlistSubTitleWrapper = document.createElement("div");
    playlistSubTitleWrapper.classList.add("subtitle-wrapper");
    let playlistTopElement = document.createElement("p");
    playlistTopElement.append("Playlist");
    let newElement = thisElement.appendChild(playlistSubTitleWrapper);
    newElement.appendChild(playlistTopElement);
    return newElement;
}

export function renderPlaylistHeader(playlistForRendering, trackListElement) {

    let playlistMainTitleWrapper = document.createElement("div");
    playlistMainTitleWrapper.classList.add("title-wrapper");

    renderPlayListImg(playlistForRendering, playlistMainTitleWrapper);
    let trackListTopElement = renderPlayListTop(playlistForRendering, playlistMainTitleWrapper);
    renderPlayListTitle(playlistForRendering, trackListTopElement);
    renderPlayListDescription(playlistForRendering, trackListTopElement);

    trackListElement.appendChild(playlistMainTitleWrapper);
}

