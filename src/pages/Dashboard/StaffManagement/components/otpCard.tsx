import React, { useState } from "react";
import { images } from "../../../../assets";
import { Button, PinCode } from "rizzui";

const OTPInput = () => {
  const [otpValue, setOtpValue] = useState<string | number | undefined>("");

  const handleVerify = () => {
    console.log("Entered OTP:", otpValue);
    // Add your OTP verification logic here
  };

  return (
    <div className="flex flex-col items-center pb-6 rounded-2xl max-w-[511px] bg-white shadow-lg">
      <div className="justify-center items-center self-stretch px-16 py-6 w-full text-base font-bold text-center rounded-t-2xl text-white bg-lightBrown max-md:px-5 max-md:max-w-full">
        Verify with OTP
      </div>
      <div className="space-y-7 flex flex-col items-center">
        <div className="flex gap-4 px-12 mt-12 max-md:mt-10">
          <PinCode length={6} setValue={setOtpValue} />
        </div>
        <Button onClick={handleVerify}>Verify</Button>
      </div>
    </div>
  );
};

export default OTPInput;
