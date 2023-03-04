class ApplicationController < ActionController::API
  include ActionController::Cookies

  #RJH - the below hello_world function verifies that cookies and sessions are working
  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end
end
