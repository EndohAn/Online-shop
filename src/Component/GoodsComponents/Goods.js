



import { useSelector } from "react-redux";
import data from '../../Data/data'; 

import { getSelectedCategory } from "../../Redux/goodSlice";

import Good from "./Good";


const Goods = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (
          <div className="product">
            {data.filter(good=> {
                if (selectedCategory === "all") return true;
                return selectedCategory === good.category
                }
            )
            .map (
            (good) => 
            <Good key={good.id} good={good}/>
        ) }
        </div>
    )
}

export default Goods;