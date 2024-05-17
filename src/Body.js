import { useEffect, useState } from 'react';
import classes from './Body.module.css';
import OneDivBox from './OneDivBox';
import picture1 from './pic1.avif';
import picture2 from './pic2.avif';
import picture3 from './pic3.avif';

const Body = () => {
    // useState , useEffect , useMemo , useCallback ....

    // const [name , setName] = useState("Reshwanth");


    // let name = "Reshwanth";
    // const changeHandler = () => {
    //     // setName("Satheesh");
    //     name =  "Satheesh";
    //     console.log(name);
    // }
    // const changeHandler2 = () => {
    //     setName("Reshwanth");
    // }

    // useEffect(()=>{
    //     console.log("inside useEffect");
    // },[name])
    // const title = "The Pluto Cafe";
    // const rating = "4.3";
    // const items = "Fast Food";
    // const price = 300;
    // const location= "Malakpet , Hyderabad";
    // const distance = 3.8;


    const listEntity =
        [
            {
                picture: picture1,
                title: "The Earth Cafe",
                rating: "4.3",
                items: "Fast Food",
                price: 300,
                location: "Malakpet , Hyderabad",
                distance: 3.8,
            },
            {
                picture: picture2,
                title: "Imli Sarai",
                rating: "3.4",
                items: "Pizza",
                price: 1000,
                location: "Banjara hills , Hyderabad",
                distance: 6.4,
            },
            {
                picture: picture3,
                title: "Amritsar Haveli",
                rating: "3.9",
                items: "Burger",
                price: 800,
                location: "Attapur , Hyderabad",
                distance: 5,
            }

        ];



    return (<div className={classes.mainContainer}>
        <div className={classes.bodyContainer}>
            {/* {name} */}
            {/* <button onClick={changeHandler2}>
                click to Reshwanth
            </button> */}
            {/* <button onClick={changeHandler}>
                change to Satheesh
            </button>  */}
            {/* <OneDivBox 
                pic={picture}
                title={title}
                rating={rating}
                items={items}
                price={price}
                location={location}
                distance={distance}
            /> */}
            <div className={classes.divContainer}>
            {listEntity.map((item) => {
                return <OneDivBox
                    pic={item.picture}
                    title={item.title}
                    rating={item.rating}
                    items={item.items}
                    price={item.price}
                    location={item.location}
                    distance={item.distance}
                />
            })}
            </div>
             



        </div>
    </div>);
}

export default Body;