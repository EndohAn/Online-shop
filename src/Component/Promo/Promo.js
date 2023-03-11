import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
// import Swal from 'sweetalert2';
import swal from 'sweetalert';
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);


const Promo = () => {
    const app = useRef();

    useLayoutEffect( () => {
        let ctx = gsap.context( () => {
            gsap.from(".present-text", {scale: 1.5})
            gsap.to(".present", {delay: 0.5,rotation: 360, y:600, duration: 2, opacity: 1, scale: 2, ease: "bounce"})
        }, app);
        
        const onMove = () => {
        gsap.to(".present", {delay: 6, duration: 1, opacity: 0, display: "none"})
        gsap.to(".present-text", {delay: 5, duration: 0.5, text: 'Не упусти удачу!', ease: "power2"})
        };
        window.addEventListener("pointermove", onMove);

        return () => {
            ctx.revert(); 
    
            window.removeEventListener("pointermove", onMove); 
        };
    }, []);

    const promocode = () => {
        swal({
            title: "Вы получили 20% скидку !",
            text: 'используйте промокод "LUCK" при оформлении заказа!',
            icon: "success",
            button: "Начать",
            className: "swal-size-sm",
        });
    }

    return (
        
        <div ref={app} className='present-box box-present'>
            <img className="present" onClick={ promocode } src= {process.env.PUBLIC_URL + "small-img/present.png"}  alt="a gift" /> 
            <h3 className='present-text'>Нажми и получи подарок !</h3>
        </div>
        
    )
}

export default Promo;
