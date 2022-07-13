// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import settings from '../../util/setting'


const Post = async (req: NextApiRequest, res: NextApiResponse) => {
    const text = req.body.message;
    try {  
    if(text === undefined) 
    {
        res.json({
            message: "Error",
            data: "Message is required",
        })
    }

    if(text !== undefined)
    {
        
        const {data} = await axios.post(`${settings.apiUrl}/post/create`, {message : text});

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
    }


    } catch (error:any) {
        res.json({
            status : "error",
            data : error.message,
        });
    }
}

export default Post;