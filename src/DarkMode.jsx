
const DarkMode = (Component) => {
    const style = {
        backgroundColor: '#233142',
        color: 'white',
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
