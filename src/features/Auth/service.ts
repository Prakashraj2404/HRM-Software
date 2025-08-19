import Client from '../../api/index'

export const verifyOtp = async (params: any) => {
  try {
    const response = await Client.auth.verify_otp(params);
    console.log("Verify OTP API Response:", response);
    return response;
  } catch (error: any) {
    throw new Error(error.message || "Failed to verify OTP");
  }
};