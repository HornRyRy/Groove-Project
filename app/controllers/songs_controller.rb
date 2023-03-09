class SongsController < ApplicationController

  before_action :set_song, only: :show

  def index
    render json: Song.all.alphabetize, status: :ok
  end

  def show
    render json: @song, status: :ok
  end

  def create
    song = Song.create!(song_params)
    render json: song, status: :created
  end

  private

  def set_song
    @song = Song.find(params[:id])
  end

  def song_params
    params.permit(:name, :artist, :album, :picture, :duration, :preview)
  end
  
end
