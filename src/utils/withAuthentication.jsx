
const withAuthentication = (OriginalComponent) => {
    //logics for enhancements
    const authentication = false;
     return function (props){
        if(authentication){
            return <OriginalComponent {...props} />
        }
        else{
            return <h1>Please Login</h1>
        }
    }
};

export default withAuthentication;
