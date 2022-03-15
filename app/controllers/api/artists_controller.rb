class Api::ArtistsController < ApplicationController

  before_action :set_billboard
  before_action :set_artist, only: [:show, :update, :destroy]

  def index
    
    render json: @billboard.artists
  end

  def show
    render json: @artist
  end

  def create
  
    @artist = @billboard.artists.new(artist_params)
    if @artist.save
      render json: @artist
    else
      render json: { errors: @artist.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @artist.update(artist_params)
      render json: @artist
    else
      render json: { errors: @artist.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @artist.destroy
    render json: { message: 'Artist Deleted'}
  end

  private 
    def set_billboard
      @billboard = Billboard.find(params[:billboard_id])
    end

    def set_artist
      @artist = billboard.artists.find(params[:id])
    end

    def artists_params
      params.require(:artist).permit(:title, :body)
    end
end