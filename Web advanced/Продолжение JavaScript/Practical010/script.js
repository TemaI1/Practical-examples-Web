// async function fetchIndexData() {
//     try {
//         const respo = await fetch("indexData.json");
//         if (!respo.ok) {
//             throw new Error("Не удалось получить данные");
//         }
//         const data = await respo.json();
//         const boxContentStore = document.querySelector('.content_store_center');


//         data.forEach(({ img, name, text, price }) => {
//             const storeEl = `
//             <div class="content_store_box content_box_add">
//                 <img class="content_store_box_img" src="${img}" alt="${name}">
//                 <div class="store_box_text">
//                     <h4 class="box_title">${name}</h4>
//                     <p class="box_text">${text}</p>
//                     <h5 class="box_price" >${price}</h5>
//                 </div>
//             </div>
//             `;
//             boxContentStore.insertAdjacentHTML("beforeend", storeEl);
//         });

//     } catch (error) {
//         console.error(error);
//     }
// }





// async function fetchCartData() {
//     try {
//         const respo = await fetch("cartData.json");
//         if (!respo.ok) {
//             throw new Error("Не удалось получить данные");
//         }
//         const data = await respo.json();
//         const shopCart = document.querySelector('.midle_shop_left');


//         data.forEach(({ img, name, price, color, size }) => {
//             const storeEl = `
//             <div class="midle_shop_left_cart">
//                 <img src="${img}" alt="${name}">
//                 <div class="midle_shop_left_cart_info">
//                     <h3 class="midle_shop_left_cart_info_title">${name}</h3>
//                     <p class="midle_shop_left_cart_info_feature">Price: <span class="midle_shop_left_cart_info_feature_price">${price}</span></p>
//                     <p class="midle_shop_left_cart_info_feature">Color: ${color}</p>
//                     <p class="midle_shop_left_cart_info_feature">Size: ${size}</p>
//                     <p class="midle_shop_left_cart_info_feature">Quantity: <input class="midle_shop_left_cart_info_feature_quantity" type="number" min="1" max="20" value="1"></p>
//                     <svg class="midle_shop_left_cart_info_close" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512">
//                         <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
//                     </svg>
//                 </div>
//             </div>
//             `;
//             shopCart.insertAdjacentHTML("afterbegin", storeEl);
//         });

//         const btnsClose = document.querySelectorAll('.midle_shop_left_cart_info_close');
//         btnsClose.forEach(el => {
//             el.addEventListener("click", () => {
//                 el.closest(".midle_shop_left_cart").remove();
//             })
//         });

//     } catch (error) {
//         console.error(error);
//     }
// }






async function fetchIndexData() {
    try {
        const respo = await fetch("indexData.json");
        if (!respo.ok) {
            throw new Error("Не удалось получить данные");
        }
        const data = await respo.json();
        const boxContentStore = document.querySelector('.content_store_center');


        data.forEach(({ img, name, text, price, color, size }) => {
            const storeEl = `
            <div class="content_store_box content_box_add">
                <img class="content_store_box_img" src="${img}" alt="${name}">
                <div class="store_box_text">
                    <h4 class="box_title">${name}</h4>
                    <p class="box_text">${text}</p>
                    <h5 class="box_price" >${price}</h5>
                </div>

              <div class="midle_shop_left_cart_info" style="display: none">
                    <h3 class="midle_shop_left_cart_info_title">${name}</h3>
                    <p class="midle_shop_left_cart_info_feature">Price: <span class="midle_shop_left_cart_info_feature_price">${price}</span></p>
                    <p class="midle_shop_left_cart_info_feature">Color: ${color}</p>
                    <p class="midle_shop_left_cart_info_feature">Size: ${size}</p>
                    <p class="midle_shop_left_cart_info_feature">Quantity: <input class="midle_shop_left_cart_info_feature_quantity" type="number" min="1" max="20" value="1"></p>
                    <svg class="midle_shop_left_cart_info_close" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512">
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
               </div>

            </div>
            `;
            boxContentStore.insertAdjacentHTML("beforeend", storeEl);
        });

        const boxShopAdd = document.querySelector('.footer_shop');
        const btnsAdd = document.querySelectorAll('.content_box_add');
        btnsAdd.forEach(el => {
            el.addEventListener("click", () => {
                const clone = el.cloneNode(true);
                boxShopAdd.appendChild(clone);

                clone.classList.add("midle_shop_left_cart");
                clone.classList.remove("content_store_box", "content_box_add");

                clone.style.margin = "20px 60px";
                clone.style.width = "900px"

                const infoCart = clone.querySelector('.store_box_text');
                infoCart.style.display = "none";

                const newInfoCart = clone.querySelector(".midle_shop_left_cart_info");
                newInfoCart.style.display = "block";



                const btnsClose = document.querySelectorAll('.midle_shop_left_cart_info_close');
                btnsClose.forEach(el => {
                    el.addEventListener("click", () => {
                        el.closest(".midle_shop_left_cart").remove();
                    })
                });
            })
        });


    } catch (error) {
        console.error(error);
    }
}

fetchIndexData();

// const footerShop = document.querySelector('.footer_shop');
// if (footerShop.childNodes.length !== 0) {
//     footerShop.textContent = "Cart Items";
// }