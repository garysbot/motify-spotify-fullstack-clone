# app/views/playlists/index.json.jbuilder
json.array! @playlists do |playlist|
  json.id playlist.id
  json.title playlist.title
  json.playlist_cover_img playlist.playlist_cover_img
  json.user_id playlist.user_id
  json.created_at playlist.created_at
  json.updated_at playlist.updated_at
  
  # # User object 
  # json.user do
  #   user = User.find(playlist.user_id)
  #   json.email user.email
  #   json.username user.username
  #   # Add other user fields as required
  # end

  # # Songs array
  json.songs playlist.songs do |song|
    json.extract! song, :id, :title, :duration
    json.albumTitle song.album.title  # Include album title
    json.albumId song.album.id # Include album id
    json.artistId song.artist.id
    # json.id song.id
    # json.title song.title
    # json.artistName song.artist.artist_name
    # json.duration song.duration
    # json.explicit song.explicit
    # Include other song fields as needed
  end
end
