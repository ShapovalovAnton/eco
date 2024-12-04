import product from "./product.json";
import './Products.css'
export function Products() {
    return (
        <>
        <section class="flex flex_column about_section">
            <h2 class="h2_content">Про нас</h2>
            <p class="p_content">Наша еко-ферма – це місце, де природа, турбота та сучасні підходи до екологічного господарювання об’єднуються в гармонії. Ми займаємося вирощуванням органічних продуктів, зберігаючи природний баланс та піклуючись про майбутні покоління.
<br></br> <br></br>
Ми використовуємо лише натуральні добрива, уникаємо хімічних пестицидів та підтримуємо сталий підхід до землеробства. Наші тварини утримуються в умовах, максимально наближених до природних, із дотриманням етичних стандартів.</p>

        </section>
        <section class="  flex flex_column prod_section">
            <h2 class="h2_content"> Товари</h2>
            <div class="flex flex_wrap products">
            {product.map((prod) => (
                
                <div key={prod.id} class="flex flex_column prod_point">
                    <h3 className="prod_name">{prod.name}</h3>
                    <img className="prod_photo" src={`${prod.photo}`} alt="" />
                    <h3 className="prod_price">{prod.price} грн.</h3>
                </div>
            ))}
            </div>
            
        </section>
            
        </>
    );
}