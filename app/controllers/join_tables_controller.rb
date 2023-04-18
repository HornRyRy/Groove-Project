class JoinTablesController < ApplicationController

  before_action :set_join_table, only: :destroy

  def index
    render json: JoinTable.all, status: :ok
  end

  def create
    join_table = JoinTable.create!(join_table_params)
    render json: join_table, status: :created
  end

  def destroy
    @join_table.destroy
    head :no_content
  end

  private

  def set_join_table
    @join_table = JoinTable.find(params[:id])
  end

  def join_table_params
    params.permit(:playlist_id, :song_id)
  end

end
