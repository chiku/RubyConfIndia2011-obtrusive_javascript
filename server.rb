require 'sinatra'

get '/qux/:qux_id/foo_links/:id' do
  "New Stuff with qux = #{params[:qux_id]}, id = #{params[:id]} and kind = #{params[:kind]}"
end
