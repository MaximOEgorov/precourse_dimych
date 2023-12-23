
function renderTrackTitle(inputTrackForRendering, trackElement) {
    if (inputTrackForRendering.isHot) {
        trackElement.append("🔥")
    }
    trackElement.append(
        inputTrackForRendering.artistName + " - " + inputTrackForRendering.title
    );
}

function renderTrackAudio(inputTrackForRendering, trackElement) {
    let playerElement = document.createElement('audio');
    playerElement.src = inputTrackForRendering.fileUrl;
    playerElement.controls = true;
    trackElement.append(playerElement);
}

function renderTrackCover(inputTrackForRendering, trackElement) {
    let coverElement = document.createElement('img');
    coverElement.src = inputTrackForRendering.coverImageUrl;
    trackElement.append(coverElement);
}

export function renderTrack(inputTrackForRendering, trackListElement) {
    let trackElement = document.createElement("div");
    renderTrackTitle(inputTrackForRendering, trackElement);
    renderTrackAudio(inputTrackForRendering, trackElement);
    renderTrackCover(inputTrackForRendering, trackElement);
    trackListElement.append(trackElement);
}
