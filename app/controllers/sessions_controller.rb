class SessionsController < ApplicationController
    #skip_before_action :authorized_user, only: [:create]
    def create
        user = User.find_by(username: params[:username])
        #byebug
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            
            render json:user, status: :ok
        else
            render json: {error: "Sorry Invalid Username and/or Password!"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        byebug
        head :no_content
        console.log("destroy session")
    end

    

    def index
        
    end


end
