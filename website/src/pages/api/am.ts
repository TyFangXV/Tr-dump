// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import settings from '../../util/setting'


const getPost = async (req: NextApiRequest, res: NextApiResponse) => {
    const cardID = req.query.cardID;

    if(cardID === undefined)
    {
        res.json({
            message: "Error",
            data: "CardID is required",
        })
    }

    try {
        const {data} = await axios.post(`${settings.apiUrl}/post/getById/`, {id : cardID});
        if(data.message === "Success")
        {
            res.json({
                message: "Success",
                data: data.data,
            })
        }

        if(data.message !== "Success")
        {
            res.json({
                message: "Error",
                data: data.data,
            })
        }

    } catch (error:any) {
        res.json({
            message : "Error",
            data : error.message,
        });
    }
}

export default getPost;