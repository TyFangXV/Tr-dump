import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Recaptcha:React.FC = () => {
    console.log(process.env.NEXT_PUBLIC_SITE_KEY as string);
    
    return(
        <div>
            <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_SITE_KEY as string}
            security="true"
            />
        </div>
    )
}

export default Recaptcha;