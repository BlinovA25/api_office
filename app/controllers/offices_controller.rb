class OfficesController < ApplicationController
  before_action :set_office, only: [:show, :update, :destroy]

  # GET /offices
  def index
    @offices = Office.all

    render json: @offices
  end

  # GET /offices/1
  def show
    render json: @office
  end

  # POST /offices
  def create
    @office = Office.new(office_params)

    if @office.save
      render json: @office, status: :created, location: @office
    else
      render json: @office.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /offices/1
  def update
    if @office.update(office_params)
      render json: @office
    else
      render json: @office.errors, status: :unprocessable_entity
    end
  end

  # DELETE /offices/1
  def destroy
    @office.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_office
      @office = Office.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def office_params
      params.require(:office).permit(:name, :city)
    end
end
