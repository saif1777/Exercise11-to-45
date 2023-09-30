"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let make_album = (artistname, albumtitle, tracks) => {
    let music_album = {
        artistname: "Name",
        albumtitle: "Title",
        Tracks: tracks,
    };
    return music_album;
};
let album1 = make_album("Hassan", "Noor.e.madina", 0);
let album2 = make_album("Hussain", "Samaa.e.madina", 12);
let album3 = make_album("ARSH", "Gulshan.e.madina", 22);
console.log(album1);
console.log(album2);
console.log(album3);
