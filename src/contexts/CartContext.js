import React,{createContext,useState,useEffect} from "react";

export const CartContext = createContext();


const CartProvider = ({children})=>{
    const [cart,setCart] = useState([]);
    const [itemAmount,setAmount] = useState(0);
    const [totalPrice,setTotalPrice] = useState(0);



    useEffect(()=>{
        const total = cart.reduce((count,currentItem)=>{
           return count + currentItem.price * currentItem.amount;
        },0)
        setTotalPrice(total);
    })




    useEffect(()=>{
        if(cart){
            const amount = cart.reduce((count,currentItem)=>{
                return count + currentItem.amount;
            },0);
            setAmount(amount);
        };
    },[cart]);



    const addToCart = (product,id) =>{
        const newItem = {...product,amount:1}
        const cartItem = cart.find(item=>{
            return item.id === id;
        });
        if(cartItem){
            const newCart = [...cart].map(item=>{
                if(item.id===id){
                    return{...item,amount:cartItem.amount+1}
                }
                else{
                    
                    return item;
                }
            });
            setCart(newCart);
        }else{
            setCart([...cart,newItem]);
        }
    };


    const removeFromCart = (id)=>{
        const newCart = cart.filter(item=>{
            return item.id !== id;
        });
        setCart(newCart);
    };

    const increaseAmount = (id) => {
        const item = cart.find(item=>item.id === id)
        addToCart(item,id);
       
      };
    
    const decreaseAmount = (id)=>{
        const cartItem = cart.find((item)=>{
            return item.id === id;
        });
        if(cartItem){
            const newCartItem = cart.map((item)=>{
                if(item.id===id){
                    return{...item,amount:cartItem.amount-1}
                }
                
            });
            setCart(newCartItem)
        }
        if(cartItem.amount <2){
            removeFromCart(id);
        }     
    };
      

    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart,increaseAmount,decreaseAmount,itemAmount,totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;