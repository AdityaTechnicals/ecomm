const brypt = require('bcryptjs');
const hashing =async(req, res, next) => {
    if (req.body.password ===req.body.confirmpassword){
            const password = req.body.password;
     const hashpassword = await  brypt.hash(password);
     req.body.password = hashpassword;
    req.body.confirmpassword=null;
     next();
    }
    else{
        throw new Error('password not matching');
    }
}
module.exports =hashing;