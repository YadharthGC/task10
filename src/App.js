import "./App.css";
import Priceitems from "./priceitems";
import Cart from "./cart";
import { useState } from "react";

function App() {
  let [products, setproducts] = useState([
    {
      id: 1,
      name: "Apple",
      adv: " Apples can slow the growth of cancer cells and they can protect the cells in your pancreas, which can lower chances of diabetes.",
      amt: 220,
      img: "https://previews.123rf.com/images/boarding1now/boarding1now1710/boarding1now171000093/87941134-apple-fruit-fruits-red-square-on-wooden-board-food.jpg",
    },
    {
      id: 2,
      name: "Mango",
      adv: "Mangos are also rich in vitamin C, which is important for forming blood vessels and healthy collagen, as well as helping you heal.",
      amt: 180,
      img: "https://image.shutterstock.com/image-photo/ripe-mango-cut-square-other-260nw-617282144.jpg",
    },
    {
      id: 3,
      name: "Orange",
      adv: " The vitamin C in oranges protects your cells from damage,helps your body make collagen and gives you smoother skin.",
      amt: 70,
      img: "https://thumbs.dreamstime.com/b/orange-juice-pouring-pour-square-oranges-fruit-fruits-drink-112130641.jpg",
    },
    {
      id: 4,
      name: "Banana",
      adv: "Bananas contain fiber, potassium, folate, and antioxidants, such as vitamin C. All of these support heart health.",
      amt: 58,
      img: "https://images.pexels.com/photos/7194914/pexels-photo-7194914.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 5,
      name: "Grapes",
      adv: "Grapes are a good source of potassium that helps balance fluids in body and bring down high blood pressure.",
      amt: 198,
      img: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/juicy-grapes-square-prints-cassi-moghan.jpg",
    },
    {
      id: 6,
      name: "Cherry",
      adv: "Cherries are low in calories and chock full of fiber, vitamins, minerals, nutrients, and other good-for-you ingredients.",
      amt: 600,
      img: "https://images.pexels.com/photos/3614942/pexels-photo-3614942.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ]);

  const [additems, setadditems] = useState([]);
  const [total, settotal] = useState(0);
  let addtocart = (id) => {
    console.log("works");
    let things = products.find((obj) => obj.id === id);
    setadditems([...additems, things]);
    console.log(additems);
    settotal(total + things.amt);
  };

  let remove = (id) => {
    let index = additems.findIndex((objs) => objs.id === id);
    settotal(total - additems[index].amt);
    additems.splice(index, 1);
    setadditems([...additems]);
  };

  return (
    <div class="container">
    <h1>FRUITS PRICECART</h1>
      <div class="row" style={{ marginTop: "1%" }}>
        <div class="col-sm-10">
          <div className="row">
            {products.map((product) => {
              return (
                <Priceitems
                  productdata={product}
                  handlecart={addtocart}
                ></Priceitems>
              );
            })}
          </div>
        </div>
        <div class="col-sm-2">
          <div>
            <ol class="list-group list-group-numbered" id="cart">
              {additems.map((additem) => {
                return <Cart data={additem} removes={remove}></Cart>;
              })}
            </ol>
            <h4>
              <span style={{ fontWeight: " 350" }}>Total:</span>Rs{total}/-
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
