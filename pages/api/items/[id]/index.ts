// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { useRouter } from 'next/dist/client/router';

type Data = {
  title: string,
  type: any,
  properties: any,
  name: string,
  tokenId: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const id = Number(req.query.id);
  const id_image = (id) % 10;
  const host = req.headers.host;


  res.status(200).json({
    title: "Asset Metadata",
    name: "nftn",
    type: "object",
    properties: {
      name: {
        "type": "string",
        "description": "Identifies the asset to which this NFT represents"
      },
      "description": {
        "type": "string",
        "description": "Describes the asset to which this NFT represents"
      },
      "image": {
        "type": "string",
        "description": `${host}/nft/Floki-${id_image}.png`
      }
    },
    tokenId: `${id}`

  })
}
