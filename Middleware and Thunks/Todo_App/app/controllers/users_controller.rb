class UsersController < ApplicationController

    def new
        @user = User.new
    end
    
    def create
        @user = User.new(params.require(:user).permit(:username, :password))

        if @user.save
            login!(@user)
            redirect_to root_url
        else
            flash.now[:errors] = @user.errors
            render :new
        end
    end
end
