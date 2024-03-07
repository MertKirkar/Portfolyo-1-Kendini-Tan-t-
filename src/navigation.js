import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Hakkimda from "./Components/Hakkimda";
import Yetenekler from "./Components/Yetenekler";
import Kariyer from "./Components/Kariyer";

const router = createBrowserRouter ([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/yeteneklerim",
        element:<Yetenekler/>
    },
    {
        path:"/hakkimda",
        element:<Hakkimda/>
    }
    ,
    {
        path:"/kariyer",
        element:<Kariyer/>
    }




])

export default router;
