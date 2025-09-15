function welcome(prop) {
    return <h2>Welcome{prop.name}!</h2>
}

function App(){
    return(
        <div>
            <welcome name="Snehitha"/>
            <welcome name="Vaji77"/>
        </div>
    )
}
