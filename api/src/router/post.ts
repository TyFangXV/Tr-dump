import { Router } from "express";
import { supabase } from "../utils/supabase";
const router = Router();

router.post("/create", async(req, res) => {
    console.log("20");
    
    const message = req.body.message;
    
    
    try {
        if(message === undefined)
        {
            res.json({
                message: "Error",
                error: "Message is required",
            })
        }
        const response = await supabase.from("post").insert({
            text: message,
        })  


        if(response.error !== null) {
            res.json({
                message: "Error",
                error: response.error,
            })
        }
        
        if(response.error === null) {
            res.json({
                message: "Success",
                data: response.data,
            })
            console.log("data added");
            
        }

    } catch (error:any) {
        res.json({
            status : "error",
            data : error.message,
        });
    }
})


router.post("/get", async(req, res) => {
    try {
        const response = await supabase.from("post").select("*")

        if(response.error !== null) {
            res.json({
                message: "Error",
                error: response.error,
            })
        }
        
        if(response.error === null) {
            res.json({
                message: "Success",
                data: response.data,
            })
        }

    } catch (error:any) {
        res.json({
            status : "error",
            data : error.message,
        });
    }
})


router.post("/getById", async(req, res) => {
    const id = req.body.id;
    if(id === undefined)
    {
        res.json({
            message: "Error",
            error: "Id is required",
        })
    }

    try {
        const response = await supabase.from("post").select("*").eq("id", id);

        if(response.error !== null) {
            res.json({
                message: "Error",
                error: response.error,
            })
        }
        
        if(response.error === null) {
            res.json({
                message: "Success",
                data: response.data,
            })
        }

    } catch (error:any) {
        res.json({
            status : "error",
            data : error.message,
        });
    }
})

export default router;