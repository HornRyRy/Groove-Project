class SearchesController < ApplicationController
  def index
    render json: Search.all, status: :ok
  end
end
