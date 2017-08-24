class PagesController < ApplicationController

  skip_before_action :authenticate_user!, only: [:home, :coaching, :about, :ebook, :start_now]

  def home
  end
  def coaching
  end
  def about
  end
  def ebook
  end

  def start_now
  end
end
