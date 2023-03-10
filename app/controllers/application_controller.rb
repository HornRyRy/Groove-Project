class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  before_action :authorized_user

  def current_user
    user = User.find_by(id:session[:user_id])
    
  end

  def authorized_user
    render json: {error: "Not Authorized"}, status: :unauthorized unless current_user
  end


  #RJH - the below hello_world function verifies that cookies and sessions are working
  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end

  private

  def render_not_found exception
    render json: { error: "#{exception.model} not found" }, status: :not_found
  end

  def record_invalid exception
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end
