class SessionsController < ApplicationController

    skip_before_action :authorized_user, only: [:create]

    def create
        user = User.find_by(username: params[:username])
        
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            
            render json:user, status: :ok
        else
            render json: {error: "Invalid Username and/or Password!"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        #byebug
        head :no_content
    end

    

    def index
        
    end


end
