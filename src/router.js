import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import App from "./App"
import Admin from "./Admin"
import Login from "./page/login"
import City from "./page/city"
import Home from "./page/Home"
import Button from "./page/ui/buttons"
import models from "./page/ui/model"
import Loading from "./page/ui/loading"
import Notice from "./page/ui/notice"
import Message from "./page/ui/message"
import Tabs from "./page/ui/tabs"
import Tables from "./page/ui/tables"
class IRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router>
                <App>
                
                <Route path="/admin"  render={()=>(
                       <Admin>
                        <Route path="/admin/home" component={Home}/>
                        <Route path={`/admin/ui/button`} component={Button} />
                        <Route path={`/admin/ui/model`} component={models} />
                        <Route path={`/admin/ui/loading`} component={Loading} />
                        <Route path={`/admin/ui/notice`} component={Notice} />
                        <Route path={`/admin/ui/message`} component={Message} />
                        <Route path="/admin/login" component={Login}/>
                        <Route path="/admin/ui/tabs" component={Tabs}/>
                        <Route path="/admin/ui/table" component={Tables}/>
                        <Route path="/admin/city" component={City}/>
                    </Admin>
                )
                 
                }>

                </Route>
                
                </App>
            </Router>
         );
    }
}
 
export default IRouter;