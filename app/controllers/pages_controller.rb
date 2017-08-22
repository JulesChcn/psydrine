class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :ebook, :about, :start_now, :coaching]

  def home
  end

  def contact
  end

  def about
  end

  def start_now
  end
end
