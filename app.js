const express=require("express")
const bodyParser=require("body-parser")
const cors=require('cors')
const cookieParser=require("cookie-parser")
const dotenv=require('dotenv')
const db=require('./config.js')
dotenv.config();
const app=express();
const PORT=process.env.PORT ||3005
const HomeRoute=require('./Router/HomeRouter.js')
const AboutRoute=require("./Router/AboutRouter.js")
const FooterRoute=require("./Router/FooterRouter.js")
const SliderRoute=require('./Router/SliderRouter.js')
const CasesRoute=require('./Router/CasesRouter.js')
const PartnerRoute=require('./Router/PartnerRouter.js')
const ServicesRoute=require('./Router/ServicesRouter.js')
const TypeOfServicesRoute=require('./Router/TypeOfServicesRouter.js')
const LoginRoute=require('./Router/LoginRouter.js')
const NewPageRoute=require('./Router/NewPageRouter.js')
const NewPageServicesRoute=require('./Router/newpageservicesRouter.js')
const LogoRoute=require('./Router/LogoRouter.js')
const FootrHomeRoute=require('./Router/FooterHomeRouter.js')
const FaviconRoute=require('./Router/FaviconRouter.js')
const ExtraContactRoute=require('./Router/ExtraContactRouter.js')
const FooterSocialRoute=require('./Router/FooterSocialRouter.js')
const MainSliderRoute=require('./Router/MainSliderRouter.js')
app.use(express.json());
app.use(cors({
    origin: (origin, callback) => {
        callback(null, origin); // Reflect the request's origin
    },
    methods: ["POST", "DELETE", "GET", "PUT"],
    credentials: true
}));
// app.use(cors());

app.use(bodyParser.json()); 
app.use(cookieParser())  
app.use(express.static('images'))
app.use("/home",HomeRoute)
app.use('/about',AboutRoute)
app.use('/footer',FooterRoute)
app.use('/slider',SliderRoute)
app.use('/cases',CasesRoute)
app.use('/partner',PartnerRoute)
app.use('/services',ServicesRoute)
app.use('/typeofservices',TypeOfServicesRoute)
app.use('/auth',LoginRoute)
app.use('/newpage',NewPageRoute)
app.use('/newpageservices',NewPageServicesRoute)
app.use('/logo',LogoRoute)
app.use('/footerhome',FootrHomeRoute)
app.use('/favicon',FaviconRoute)
app.use('/extracontact',ExtraContactRoute)
app.use('/socialfooter',FooterSocialRoute)
app.use('/mainslider',MainSliderRoute)
app.get("/", (req, res) => {
    res.send({ message: " app", my_env_var: process.env.MY_VAR });
  });
// db.connect((err) => {
//     if (err) {
//         console.error('Database connection error: ' + err.message);
//     } else {
//         console.log('Database connected successfully');
//         app.listen(PORT, () => {
//             console.log(`Server is running on port ${PORT}`);
//         });
//     }
// });
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});