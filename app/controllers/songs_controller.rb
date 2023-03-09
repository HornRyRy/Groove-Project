class SongsController < ApplicationController

  before_action :set_search, only: [:show, :destroy]

  def index
    render json: Song.all.alphabetize, status: :ok
  end

  def show
    render json: @search, status: :ok
  end

  def create
    song = Song.create!(search_params)
    render json: song, status: :ok
  end

  private

  def set_search
    @search = Song.find(params[:id])
  end

  def search_params
    params.permit(:name, :artist, :album, :picture, :duration, :preview)
  end
  
end
