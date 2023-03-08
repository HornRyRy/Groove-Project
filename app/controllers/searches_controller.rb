class SearchesController < ApplicationController

  before_action :set_search, only: [:show, :destroy]

  def index
    render json: Search.all.alphabetize, status: :ok
  end

  def show
    render json: @search, status: :ok
  end

  def create
    song = Search.create!(search_params)
    render json: song, status: :ok
  end

  private

  def set_search
    @search = Search.find(params[:id])
  end

  def search_params
    params.permit(:name, :artist, :album, :picture, :duration, :preview)
  end

end
