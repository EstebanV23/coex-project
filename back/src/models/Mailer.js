import emailSend from '../config/emailSend.js'

class Mailer {
  constructor ({ from, to, subject, text, html, atachments }) {
    this.from = from
    this.to = to
    this.subject = subject
    this.text = text
    this.html = html
    this.atachments = atachments
  }

  async sendMail () {
    await emailSend({
      from: this.from,
      to: this.to,
      subject: this.subject,
      text: this.text,
      html: this.html,
      atachments: this.atachments
    })
  }
}

export default Mailer
