import { app } from "./app.js";
import Razorpay from "razorpay";
import { connectDB } from "./config/database.js";

connectDB();

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

// app.listen(process.env.PORT,'192.168.1.113',() => {
//    console.log(`Server is working on ${process.env.PORT}`)
// }
 

// );
const PORT = process.env.PORT || 8080;
app.listen(PORT,'192.168.1.113', () => {

    console.log(`port running on ${process.env.PORT}`);
});
