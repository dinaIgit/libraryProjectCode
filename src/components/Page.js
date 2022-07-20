import {Route, Switch} from "react-router-dom";
import Books from "./Books";
import BookInfo from "./BookInfo";
import AddBookForm from "./AddBookForm";
import Home from "./Home";

const Page=()=>{
    return(
        <Switch>
            <Route exact path='/book/:id' component={BookInfo}/>
            <Route path='/books' component={Books}/>
            <Route path='/add:book' component={AddBookForm}/>
            <Route path='/' component={Home}/>
        </Switch>
    )
}

export default Page