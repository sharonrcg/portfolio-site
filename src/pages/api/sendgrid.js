import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
	try {
		await sendgrid.send({
			to: 'sharonrachelg@gmail.com',
			from: 'me@sharongomez.com',
			subject: `Message from sharongomez.com`,
			html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      </head>
      
      <body>
        <div class="container" style="margin-left: 10px;margin-right: 10px;">
          <p><strong>Subject:</strong> ${req.body.subject}</p>
          <p><strong>Name:</strong> ${req.body.name}</p>
          <p><strong>Email:</strong> ${req.body.email}</p>
          <p><strong>Message:</strong></p>
          <p style="margin-right: 20px;">${req.body.message}</p>
        </div>
      </body>
      </html>`,
		})
	} catch (error) {
		return res.status(error.statusCode || 500).json({error: error.message})
	}

	return res.status(200).json({error: ''})
}

export default sendEmail
