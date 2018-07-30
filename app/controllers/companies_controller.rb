class CompaniesController < ApplicationController
  def index
    
    
  end
  
  def new
     @company = Company.new
    respond_to do |format|
      # format.html 
      format.js   
    end
  end
  
  
  def create
    # @event = Event.find(agenda_params[:event_id])
    @company = Company.create(company_params)
    @company.save
    respond_to do |format|
      format.html {redirect_to "/companies", notice: 'You were successfully added!'}
    #   format.js {}
      # format.json {render json: @vote, status: :created, location: @vote}
    end
    # redirect_to :back
  end
  
  private
    def company_params
        params.require(:company).permit(:name, :address, :number, :email,:contact, :website, :score, :selected_answers, :description, :created_at, :updated_at)
    end
    
end
