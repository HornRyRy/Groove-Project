class UsersController < ApplicationController

    def show
        user = User.find(params[:id])
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    ##after development, do we comment out the destroy and index actions?

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    def index
        users = User.all
        render json: users, status: :ok
    end


    private

    def user_params
        params.permit(:name, :username, :password)
    end

end
