import express,{NextFunction, Request,Response} from "express"
import db from "./config/database.config"
import cors from 'cors'
import cityRouter from "./route/city.route";
import customerRouter from "./route/customer.route";

const app = express();
const port = 3000;
// const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({
    extended:true
})    
)

app.use(cors());
app.use('/city',cityRouter);
app.use('/customer',customerRouter);

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
    db.authenticate().then(()=>{
        console.log(`connection of ${db} is completed`);
    }).catch((err)=>{
        console.error(err.message);
    })
})