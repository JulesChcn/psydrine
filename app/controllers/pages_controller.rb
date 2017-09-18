class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :ebook, :contact, :start_now, :coaching, :index, :about]

  def home
  end

  def contact
  end

  def about
  end

  def start_now
  end

  def ebook
  end

  def index
  end
end
