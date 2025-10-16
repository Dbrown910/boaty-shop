require 'sinatra'

set :port, 8080
set :static, true
set :public_folder, "public"
set :views, "views"

get '/' do
    @title = 'Boaty Shop'
    erb :index
end

get '/jetski' do
    @title = 'Jetski Customizations'
    erb :jetski
end

get '/yacht' do
    @title = 'Yacht Customizations'
    erb :yacht
end

get '/canoe' do
    @title = 'Canoe Customizations'
    erb :canoe
end

get '/submarine' do
    @title = 'Submarine Customizations'
    erb :submarine
end

get '/sailboat' do
    @title = 'Sailboat Customizations'
    erb :sailboat
end

get '/checkout' do
    @title = 'Checkout'
    erb :checkout
end

get '/home-v2' do
    @title = 'Boaty Shop V2'
    erb :index_v2
end
