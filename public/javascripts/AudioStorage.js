class AudioStorage {
    static sounds = [];
    
    static getAudioByName(name) {
        for (let i = 0;i<this.sounds.length;i++) {
            if (this.sounds[i].name == name) {
                return this.sounds[i].audio
            }
        }
    }

    static loadAudios() {
        this.sounds.push({name: "mouse click",audio: loadSound("audios/mouseclick.mp3")})
    }

    static playSound(name) {
        let sound = this.getAudioByName(name);
        if (sound == undefined || sound == null)
            return;
        sound.play();
    }
}