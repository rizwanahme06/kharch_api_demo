import randomstring from 'randomstring';
import nodemailer from 'nodemailer';



 const generateOTP = () => {
    return randomstring.generate({
      length: 6,
      charset: 'numeric'
    });
};


const sendOTPEmail = async (email: string, otp: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'rizwanahme06@gmail.com',
      pass: 'RIZwan@786'
    }
  });

  const mailOptions = {
    from: 'rizwanahme06@gmail.com',
    to: email,
    subject: 'Verification OTP',
    text: `Your OTP for email verification is ${otp}.`
  };

  await transporter.sendMail(mailOptions);
};

module.exports = generateOTP,sendOTPEmail