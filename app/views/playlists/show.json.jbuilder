# app/views/playlists/show.json.jbuilder
json.extract! @playlist, :id, :title, :user_id, :created_at, :updated_at
# json.songs @playlist.songs, :id, :title, :duration, :artist_id, :album_id
json.songs @playlist.songs do |song|
  json.id song.id
  json.title song.title
  json.album do
    json.title song.album.title
    json.cover_img song.album.cover_img
  end
  json.artist do
    json.artist_name song.artist.artist_name
  end
end