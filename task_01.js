const musicCollection = {
    albums: [
        {
            title: "elect the dead",
            artist: "Serj Tankian",
            year: "2007"
        },
        {
            title: "That's The Spirit",
            artist: "Bring Me The Horizon",
            year: "2015"
        },
        {
            title: "Zeit",
            artist: "Rammstein",
            year: "2022"
        },
        {
            title: "Реинкарнация",
            artist: "Пурген",
            year: "2005"
        },
    ],

    [Symbol.iterator]() {
        const albums = this.albums
        let index = 0

        return {
            next() {

                if (index < albums.length) {
                    return { done: false, value: albums[index++] }
                }

                return { done: true }
            }
        }
    }
}

for (let album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`)
}