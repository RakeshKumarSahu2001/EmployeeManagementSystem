import zod from "zod"

export const regSchemaValidator=zod.object({
    username:zod.string({required_error:"Username is required."}).trim(),
    password:zod.string({required_error:"Password is required."}).trim(),
    confirmPassword:zod.string({required_error:"Password is required."})
}).refine((data)=>data.password===data.confirmPassword,{   message: "Password and Confirm Password must match.",
    path: ["confirmPassword"],
  })