
import randomstring from 'randomstring';
import nodemailer from 'nodemailer';

export const otpCache: { [key: string]: any } = {};

export const generateOTP = async (email: string) => {
    const otp = randomstring.generate({
        length: 6,
        charset: 'numeric'
    });

    saveOTP(email, otp);
    return otp
};


export const sendOTPEmail = async (email: string, otp: string) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'Gmail',
        port: 587,
        secure: false,
        auth: {
            user: 'rizwanahme06@gmail.com',
            pass: 'hczpzgjwuomeqisa'
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

export const saveOTP = (email: string, otp: string) => {
    const expirationTime = Date.now() + 5 * 60 * 1000; // 5 minutes in milliseconds
    otpCache[email] = { otp, expirationTime };
};


