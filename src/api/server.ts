import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import twilio from "twilio";
import dotenv from "dotenv";
import jwt from 'jsonwebtoken'
dotenv.config();


interface UserPayload {
  userId: number;
  phone: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload; // Attach user to request if authenticated
    }
  }
}

const app = express();
app.use(express.json()); // ✅ To parse JSON request bodies
app.use(cors());

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const serviceSid = process.env.TWILIO_SERVICE_SID!;

// ✅ **Step 1: Send OTP**
app.post("/api/auth/send-otp", async (req, res) => {
  const { phone } = req.body; // ✅ Get phone number from request body

  try {
    const verification = await client.verify.v2
      .services(serviceSid)
      .verifications.create({ to: phone, channel: "sms" });

    res.json({ success: true, message: "OTP sent successfully", status: verification.status });
  } catch (error:any) {
    res.status(500).json({ success: false, message: "Failed to send OTP", error: error.message });
  }
});

// ✅ **Step 2: Verify OTP**
app.post("/api/auth/verify-otp", async (req:any, res:any) => {
  const { phone, otp } = req.body; // ✅ Get phone number & OTP from request body

  try {
    const verificationCheck = await client.verify.v2
      .services(serviceSid)
      .verificationChecks.create({ to: phone, code: otp });

    if (verificationCheck.status === "approved") {
      return res.json({ success: true, message: "OTP verified!" });
    } else {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }
  } catch (error:any) {
    res.status(500).json({ success: false, message: "OTP verification failed", error: error.message });
  }
});


const authenticateUser = (req:Request, res:Response, next:NextFunction): void => {
  const token = req.cookies.token;
  console.log('res 1 run',req)
  if (!token) {
    res.status(401).json({ success: false, message: "Unauthorized" });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as UserPayload;
    req.user  = decoded;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};

// ✅ **Protected Route Example**
app.get("/api/user/profile",authenticateUser, (req: Request, res: Response) => {
  if (req.user) {
    const { userId, phone } = req.user;
    res.json({ success: true, user: { userId, phone } }).status(203);
  } else {
    res.status(401).json({ success: false, message: "User not found" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));