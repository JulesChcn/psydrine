ActionMailer::Base.smtp_settings = {
  address: "smtp.gmail.com",
  port: 587,
  domain: 'gmail.com',
  user_name: ENV['alexandre.telemaque.deniau@gmail.com'],
  password: ENV['lmtqljxoodfprucp'],
  authentication: :login,
  enable_starttls_auto: true
}
