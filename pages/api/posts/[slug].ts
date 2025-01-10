import { NextApiRequest, NextApiResponse } from "next";

export default function handeler(
  req: NextApiRequest, 
  res: NextApiResponse
){
  const {slug} = req.query;
  res.status(200).send(slug)
}