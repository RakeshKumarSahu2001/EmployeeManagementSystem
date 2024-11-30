import zod from "zod";

// const acceptedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
// const fileSize = 1000000;

export const empRegSchemaValidator = zod.object({
    name: zod.string({ required_error: "Employee name is required" }),
    email: zod.string({ required_error: "Employee email is required." }).email(),
    contactNo: zod.string({ required_error: "Contact numver is required." })
        .min(10, { message: 'Must be a valid mobile number' })
        .max(14, { message: 'Must be a valid mobile number' }),

    designation: zod.string({ required_error: "Designation is required." }),
    gender: zod.enum(["male", "female"]),
    course: zod.string().array(),

    // img: zod.any()
    //     .refine((file) => file?.size <= fileSize, `Max image size is 1MB.`)
    //     .refine(
    //         (file) => acceptedFileTypes.includes(file?.type),
    //         "Only .jpg, .jpeg, .png and .webp formats are supported."
    //     ),
});

