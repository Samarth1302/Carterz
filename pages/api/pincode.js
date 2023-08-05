// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  let pincodes = {
    110002: ["New Delhi", "Delhi"],
    380051: ["Ahmedabad", "Gujarat"],
    400012: ["Mumbai", "Maharashtra"],
  };
  res.status(200).json(pincodes);
}
