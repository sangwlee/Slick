class Api::EmoticonsController < ApplicationController
  def create
  @emoticon = Emoticon.new(emoticon_params)

  if @emoticon.save

    render :show
  else
    render json: @emoticon.errors.full_messages, status: 422
  end
end

def update
  @emoticon = Emoticon.find(params[:id])

  if @emoticon.update_attributes(emoticon_params)
    render :show
  else
    render json: @emoticon.errors.full_messages, status: 422
  end
end

def destroy
  @emoticon = Emoticon.find(params[:id])
  
  if @emoticon
    @emoticon.destroy
    render json: @emoticon.id
  else
    render(
      json: ["Emoticon not found"],
      status: 404
      )
  end
end

def show
  message = Message.find_by(id: params[:id]).includes(:emoticons)
  @emoticons = message.emoticons
end

def emoticon_params
  params.require(:emoticon).permit(:user_id, :message_id, :icon)
end
