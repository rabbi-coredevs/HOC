
const DarkMode = (Component) => {
    const style = {
        backgroundColor: '#233142',
        color: 'white',
        // width:'100%',
        height: '100vh',
    }

    return (props)=>{
        return (
            <div style={style}>
                <Component {...props} />
            </div>
        )
    }

};

export default DarkMode;
