function make_album(artist_name, album_title){

    album_dictionary = {
        'artist_name': artist_name,
        'album_title': album_title,
    }
    return album_dictionary;
}

album = make_album('mazza agya', 'door chlain');
console.log(album);

album = make_album('dil dil pakistan', 'pak is love');
console.log(album);

album = make_album('reading things', 'falcons');
console.log(album);