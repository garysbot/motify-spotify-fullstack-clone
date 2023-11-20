json.array! @songs do |song|
  json.extract! song, :id, :duration, :title, :explicit, :song_url, :hi
  json.album_title song.album.title
  json.artist_name song.artist.artist_name
end
