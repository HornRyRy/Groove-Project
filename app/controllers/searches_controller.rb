class SearchesController < ApplicationController

  before_action :set_search, only: [:show, :destroy]

  def index
    render json: Search.all, status: :ok
  end

  def show
    render json: @search, status: :ok
  end

  # Create action to search from Deezer's API and POST to Groove's API. Need to get Deezer's search function working first
  # def create
  # end

  def destroy
    @search.destroy
    head :no_content
  end

  private

  def set_search
    @search = Search.find(params[:id])
  end

  # def search_params # For create action
  #   params.permit(:name, :artist, :album, :picture, :duration, :preview)
  # end

end
