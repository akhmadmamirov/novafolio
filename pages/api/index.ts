import type { NextApiRequest, NextApiResponse } from 'next'

export default function handeler(
  req: NextApiRequest,
  res : NextApiResponse
) {
  res.status(200).json({message : "Status check ok"})
}