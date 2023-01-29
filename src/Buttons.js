function Buttons({propsFilter}){
    return(
        <div className="container">
            <button className="change" onClick ={()=>propsFilter('traditional')} >Традиционные</button>
            <button className="change" onClick ={()=>propsFilter('exlusive')} >Эксклюзивные</button>
            <button className="change" onClick ={()=>propsFilter( 'order' )} >Под заказ</button>
        </div>
    )
}
export default Buttons;