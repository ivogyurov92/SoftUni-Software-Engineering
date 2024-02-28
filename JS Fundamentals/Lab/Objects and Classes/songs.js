function songs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let count = input.shift();
    let songs = [];

    for (let i = 0; i <= count; i++) {
        let [typeList, name, time] = input[i].split('_');

        if (typeList == 'all') {
            songs.map(s => s.name).forEach(s => console.log(s));
        } else {
            if (i == count) {
                songs = songs.filter(s => s.typeList == typeList);
                songs.map(s => s.name).forEach(s => console.log(s));
            } else {
                let song = new Song(typeList, name, time);
                songs.push(song);
            }
        }
    }
}

songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);