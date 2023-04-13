class JoinTablesController < ApplicationController

  def index
    render json: JoinTable.all, status: :ok
  end

  def create
    join_table = JoinTable.create!(join_table_params)
    render json: join_table, status: :created
  end

  private

  def join_table_params
    params.permit(:playlist_id, :song_id)
  end

end
