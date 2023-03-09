import express,{NextFunction, Request,Response} from "express"
import db from "./config/database.config"
import cors from 'cors'
import cityRouter from "./route/city.route";
import customerRouter from "./route/customer.route";
import billRouter from "./route/bill.route";
import actionRouter from "./route/action.route";
import bill_itemsRouter from "./route/bill_items.route";
import bill_template_itemRouter from "./route/bill_template_item.route";
import bill_templateRouter from "./route/bill_template.route";
import rolesRouter from "./route/roles.route";
import countryRouter from "./route/country.route";
import stateRouter from "./route/state.route";
import flatRouter from "./route/flat.route";
import management_roleRouter from "./route/management_roles.route"
import moduleRouter from "./route/module.route";
import packageRouter from "./route/package.route";
import serviceRouter from "./route/service.route";
import permissionRouter from "./route/permission.route";
import societyRouter from "./route/society.route";
import sub_moduleRouter from "./route/sub_module.route";
import subscriptionRouter from "./route/subscription.route";

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
app.use('/bill',billRouter);
app.use('/action',actionRouter);
app.use('/bill_items',bill_itemsRouter)
app.use('/bill_template_item',bill_template_itemRouter)
app.use('/bill_template',bill_templateRouter)
app.use('/roles',rolesRouter)
app.use('/country',countryRouter)
app.use('/state',stateRouter)
app.use('/flat',flatRouter)
app.use('/management_role',management_roleRouter)
app.use('/module',moduleRouter)
app.use('/package',packageRouter)
app.use('/service',serviceRouter)
app.use('/permission',permissionRouter)
app.use('/society',societyRouter)
app.use('/sub_module',sub_moduleRouter)
app.use('subscription',subscriptionRouter)

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
    db.authenticate().then(()=>{
        console.log(`connection of ${db} is completed`);
    }).catch((err)=>{
        console.error(err.message);
    })
})