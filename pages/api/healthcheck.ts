import type { NextApiResponse } from 'next';

export default (_, res: NextApiResponse<{ status: string }>) => {
  res.status(200).json({ status: 'Ok' });
};
