import classes from "./OneDivBox.module.css";
import { FaStar } from "react-icons/fa";

const OneDivBox = (props) => {



    return (
            <div className={classes.mainContainer}>
            <div className={classes.divContainer}>
                <div className={classes.topContainer}>
                    <img src={props.pic} className={classes.mainImg}/>

                </div>
                <div className={classes.bottomContainer}>
                    <div className={classes.titleContainer}>
                        <div className={classes.titleDiv}>
                            {props.title}
                        </div>
                        <div className={classes.ratingContainer}>
                            <div className={classes.ratingDiv}>
                                <div className={classes.ratingNumber}>
                                    {props.rating}
                                </div>
                                <div className={classes.startIcon}>
                                <FaStar />

                                </div>
                            </div>

                        </div>

                    </div>
                    <div className={classes.foodContainer}>
                        <div className={classes.foodDiv}>
                            {props.items}
                        </div>
                        <div className={classes.priceDiv}>
                        ₹{props.price} for two
                        </div>
                    </div>
                    <div className={classes.locationContainer}>
                        <div className={classes.locationDiv}>
                            {props.location}
                        </div>
                        <div className={classes.distanceDiv}>
                            {props.distance} km
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        
    );
}

export default OneDivBox;