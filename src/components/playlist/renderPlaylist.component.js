
function renderTrackTitle(inputTrackForRendering, thisElement) {
    if (inputTrackForRendering.isHot) {
        thisElement.append("🔥")
    }
    thisElement.append(
        inputTrackForRendering.artistName + " - " + inputTrackForRendering.title
    );
}

function renderTrackAudio(inputTrackForRendering, thisElement) {
    let playerElement = document.createElement('audio');
    playerElement.src = inputTrackForRendering.fileUrl;
    playerElement.controls = true;
    thisElement.append(playerElement);
}

function renderTrackCover(inputTrackForRendering, thisElement) {
    let coverElement = document.createElement('img');
    coverElement.src = inputTrackForRendering.coverImageUrl;
    coverElement.classList.add("cover")
    thisElement.append(coverElement);
}

export function renderTrack(inputTrackForRendering, trackListElement) {
    let trackElement = document.createElement("div");
    trackElement.classList.add("audiocover-wrapper");
    renderTrackCover(inputTrackForRendering, trackElement);
    let trackSubElement = document.createElement("div");
    trackSubElement.classList.add("audio-wrapper");
    renderTrackTitle(inputTrackForRendering, trackSubElement);
    renderTrackAudio(inputTrackForRendering, trackSubElement);
    trackElement.append(trackSubElement)
    trackListElement.append(trackElement);
}
