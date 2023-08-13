import Forgot from "@/models/Forgot";
import User from "@/models/User";

export default async function handler(req, res) {
  if (req.body.sendMail) {
    let token = `gtbv895894oy6ytb`;
    let forgot = new Forgot({
      email: req.body.email,
      token: token,
    });
    let email = `It seems like you forgot your password for Carterz. If this is true, click the link below to reset your password Reset my password <a href="${process.env.NEXT_PUBLIC_HOST}/forget?token=${token}">Reset password</a>
      <br /><br />
      If you did not forget your password, please disregard this email.
      <br /><br />`;
    res.status(200).json({ success: true });
    return;
  } else if (!req.body.sendMail) {
    // update passwords
    res.status(200).json({ success: true });
    return;
  } else {
    res.status(200).json({ success: false });
  }
}
