
const simpleRegister = (req, res) => {

    const {username, email, password} = req.body;

    try {

        if (!username || !email || !password) {
            return res.status(401)
            .json({
                success: false,
                message: "All field are required"
            })
        }

        return res.json({
            success: true,
            message: "User Register successfully",
        })

        // add in data base

    } catch (error) {

        return res.status(401)
        .json({
            success: false,
            message: `Register faild error ${error}`
        })
    }
}

export default simpleRegister;