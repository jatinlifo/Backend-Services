
/*
This is high level register page has multiple fields
like name, surname, age, middle name, phone, email, etc
has many fields then we need to store all fileds in our DB
then we need to check every field manually then we will using 
express validator to validate all fields
*/

const withExpressValidator = async (req, res) => {

    try {

        const data = req.body;
    } catch (error) {

        return res.status(402)
        .json({
            success: false,
            message : "Failed to register"
        })
    }
}