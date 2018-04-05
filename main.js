'use strict';
var mailjet = require('node-mailjet').connect('f43de09f2729567a989db6949544e116', '0fba1e3f603c715ff0343542dc925f84');


const request = mailjet
  .post('send', {'version': 'v3.1'})
  .request({
    'Messages':[
      {
        'From': {
          'Email': 'anya.p.nguyen@gmail.com',
          'Name': 'Mailjet Pilot'
        },
        'To': [
          {
            'Email': 'anya.p.nguyen@gmail.com',
            'Name': 'passenger 1'
          }
        ],
        'Subject': 'Your email flight plan!',
        'TextPart': 'Dear passenger 1, welcome to Mailjet! May the delivery force be with you!',
        'HTMLPart': '<h3>Dear passenger 1, welcome to Mailjet!</h3><br />May the delivery force be with you!'
      }
    ]
  });
request
  .then((result) => {
    console.log(result.body);
  })
  .catch((err) => {
    console.log(err);
  });



// var sendEmail = Mailjet.post('send');

// var emailData = {
//   'FromEmail': 'my@email.com',
//   'FromName': 'My Name',
//   'Subject': 'Test with the NodeJS Mailjet wrapper',
//   'Text-part': 'Hello NodeJs !',
//   'Recipients': [{'Email': 'anya.p.nguyen@gmail.com'}],
//   'Attachments': [{
//     'Content-Type': 'text-plain',
//     'Filename': 'test.txt',
//     'Content': 'VGhpcyBpcyB5b3VyIGF0dGFjaGVkIGZpbGUhISEK', // Base64 for "This is your attached file!!!"
//   }]
// };

// sendEmail
//   .request(emailData)
//   .then(handlePostResponse)
//   .catch(handleError);

// function handlePostResponse(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// function handleError (err) {
//   throw new Error(err.ErrorMessage);
// }