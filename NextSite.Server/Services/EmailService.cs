using NextSite.Server;
using System.Net.Mail;

namespace Portfolio.Services
{

    public class EmailService : IEmailService
    {
        private readonly ILogger<EmailService> _logger;

        public EmailService(ILogger<EmailService> logger)
        {
            _logger = logger;
        }

        public async Task<bool> SendEmailAsync(string email, string subject, string message)
        {


            using (SmtpClient smtpClient = new SmtpClient("smtp.gmail.com", 587))
            {
                smtpClient.EnableSsl = true;
                smtpClient.Credentials = new System.Net.NetworkCredential(Constants.SENDING_EMAIL, Constants.SENDING_PASSWORD);

                try
                {
                    await smtpClient.SendMailAsync(
                        new MailMessage(
                            Constants.SENDING_EMAIL,
                            email,
                            subject,
                            message
                        ));
                    return true;
                }
                catch (Exception e)
                {
                    _logger.LogInformation(e.Message);
                }


                return false;
            }
        }
    }

}