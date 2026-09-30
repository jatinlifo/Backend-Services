import SimpleRegister from "../mongoDB-models/simpleRegister.schema.js";

const simpleRegister = async (req, res) => {

    const { username, email, password } = req.body;

    try {

        if (!username || !email || !password) {
            return res.status(401)
                .json({
                    success: false,
                    message: "All field are required"
                })
        }

        const existingEmail = await SimpleRegister.findOne({ email });

        if (existingEmail) {
            return res.status(409).json({
                message: "Email already exists"
            });
        }

        const existingName = await SimpleRegister.findOne({ name });

        if (existingName) {
            return res.status(409).json({
                message: "Name already exists"
            });
        }

        const user = await SimpleRegister.create(
            {
                username,
                email,
                password,
            }
        );
        return res.status(201)
            .json({
                success: true,
                message: "User Rei wgister successfully",
                userData: user

            })

    } catch (error) {

        return res.status(401)
            .json({
                success: false,
                message: `Register faild error ${error}`
            })
    }
}

export default simpleRegister;