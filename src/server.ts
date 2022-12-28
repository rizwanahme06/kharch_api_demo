import express,{NextFunction, Request,Response} from "express"
import db from "./config/database.config"
import cors from 'cors'
import router from "./route";

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({
    extended:true
})    
)

app.use(cors());
app.use('/cities',router);

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
    db.authenticate().then(()=>{
        console.log(`connection of ${db} is completed`);
    }).catch((err)=>{
        console.error(err.message);
    })
})