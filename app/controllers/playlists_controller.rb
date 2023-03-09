class PlaylistsController < ApplicationController
    before_action :set_playlist, only: [:show, :update, :destroy]
      
    def index
        playlists = Playlist.all
        render json: playlists, status: :ok
    end
      
    def show
        render json: @playlist, status: :ok
    end
      
    def create
        playlist = Playlist.create!(playlist_params)
        render json: playlist, status: :created
    end
      
    def update
        @playlist.update(playlist_params)
        render json: @playlist, status: :accepted
    end
      
    def destroy
        @playlist.destroy
        head :no_content
    end
      
    private
      
    def set_playlist
      @playlist = Playlist.find(params[:id])
    end
      
    def playlist_params
        params.permit(:name, :description, :playlist_img, :user_id)
    end
end

