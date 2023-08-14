import Forgot from "@/models/Forgot";
import User from "@/models/User";
import CryptoJS from "crypto-js";
import connectDb from "@/middleware/mongoose";
import nodemailer from "nodemailer";

const handler = async (req, res) => {
  let forgot;
  if (req.body.sendMail) {
    let token = `gtbv895894oy6ytb`;
    forgot = new Forgot({
      email: req.body.email,
      token: token,
    });
    await forgot.save();
    let mail = `It seems like you forgot your password for Carterz. If this is true, click the link below to reset your password Reset my password <a href="${process.env.NEXT_PUBLIC_HOST}/forget?token=${token}">Reset password</a>
      <br /><br />
      If you did not forget your password, please disregard this email.
      <br /><br />`;
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: req.body.email,
      subject: "Password Reset",
      html: mail,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, error: "Failed to send email" });
    }
  } else {
    let dbfuser = await Forgot.findOne({ email: req.body.email });
    if (
      dbfuser.token == `gtbv895894oy6ytb` &&
      req.body.password == req.body.cpassword
    ) {
      await User.findOneAndUpdate(
        { email: dbfuser.email },
        {
          password: CryptoJS.AES.encrypt(
            req.body.cpassword,
            process.env.AES_SECRET
          ).toString(),
        }
      );
      res.status(200).json({ success: true });
      return;
    }
    res.status(200).json({ success: false });
  }
};

export default connectDb(handler);
