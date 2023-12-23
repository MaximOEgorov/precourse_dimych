// data

const playlist1 =
    {
        title: "Hip-Hop Hits",
        coverImageUrl: "../../../../assets/images/playlist1.png",
        description: "Eminem, 50cent, Lloyd Banks and others",
        info: {
            totalTracksCount: 4,
            totalTracksDurationInSeconds: 733,
        },
        tracks: [
            {
                coverImageUrl: "../../../../assets/images/track1.png",
                artistName: "Eminem",
                title: "Rap God",
                fileUrl: "../../../../assets/tracks/Eminem_-_Rap_God.mp3",
                isHot: false,
            },
            {
                coverImageUrl: "../../../../assets/images/track2.png",
                artistName: "50cent",
                title: "In da Club",
                fileUrl: "../../../../assets/tracks/eminem-50cent-you-dont-know.mp3",
                isHot: true,
            },
            {
                coverImageUrl: "../../../../assets/images/track1.png",
                artistName: "Eminem",
                title: "Rap God",
                fileUrl: "../../../../assets/tracks/Eminem_-_Rap_God.mp3",
                isHot: false,
            },
            {
                coverImageUrl: "../../../../assets/images/track2.png",
                artistName: "50cent",
                title: "In da Club",
                fileUrl: "../../../../assets/tracks/eminem-50cent-you-dont-know.mp3",
                isHot: true,
            },
        ],
    };
const playlist2 = {
    title: "Rap Hits 1990s",
    coverImageUrl: "../../../../assets/images/playlist2.png",
    description: "Lloyd Banks, Eminem, 50cent and others",
    info: {
        totalTracksCount: 3,
        totalTracksDurationInSeconds: 733,
    },
    tracks: [
        {
            coverImageUrl: "../../../../assets/images/track1.png",
            artistName: "Eminem",
            title: "Rap God",
            fileUrl: "../../../../assets/tracks/Eminem_-_Rap_God.mp3",
            isHot: false,
        },
        {
            coverImageUrl: "../../../../assets/images/track2.png",
            artistName: "50cent",
            title: "In da Club",
            fileUrl: "../../../../assets/tracks/eminem-50cent-you-dont-know.mp3",
            isHot: true,
        },
    ],
};

export let playlists = [
    playlist1,
    playlist2
];
