import data from '../../Data/data';
import Good from "./Good";

const Goods =()=>{
    return(
        <div>{data.map((element,index) => <Good key={index} good ={element}/>)}
        </div>)
}
export default Goods;