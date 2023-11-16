# app/views/albums/show.json.jbuilder

json.extract! @album, :id, :title, :genre, :cover_img, :release_date, :record_company
json.artist do
  artist = Artist.find(@album.artist_id)
  json.extract! artist, :id, :artist_name, :verified
end

# Optionally, include associated songs
json.songs @album.songs, :id, :title, :duration, :explicit
