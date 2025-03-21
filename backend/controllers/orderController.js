//logic to place order

import orderModel from "../models/orderModel";
import userModel from "../models/userModel";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

//placing user order for frontend
const placeOrder = async (req,res)=>{
    const frontend_url ="http://localhost:5173";
try {
    const newOrder = new orderModel({
        userId:req.body.userId,
        items:req.body.items,
        amount:req.body.amount,
        address:req.body.address
    })
    await newOrder.save();//to save the order in data base
    await userModel.findByIdAndUpdate(req.body.userID,{cartData:{}});
    const line_items = req.body.items.map((item)=>({
             price_data:{
                currency:"inr",
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100*80//to convert $ to inr
             },
             quantity:item.quantity
    }))
    line_items.push({
        price_data:{
            currency:"inr",
            product_data:{
                name:"Delivery Charges"
            },
            quantity:1
        }
    })
    const session = await stripe.checkout.sessions.create({
        line_items:line_items,
        mode:'payment',
        success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`
    })
} catch (error) {
    
}
}
export {placeOrder}