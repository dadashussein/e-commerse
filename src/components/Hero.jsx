import { Link } from "react-router-dom";
import WomanImg from "../../public/img/woman_hero.png";

const Hero = () => {
const bgStyle = {
backgroundImage: "url('./img/bg_hero.svg')",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
backgroundSize: "cover",
};

return (
<section style={bgStyle} className="h-[800px] bg-no-repeat bg-cover bg-center py-24">
<div className="container mx-auto flex justify-around h-full">
<div className="flex flex-col justify-center">
<div className="font-semibold flex items-center uppercase">
<div className="w-10 h-[2px] bg-red-500 mr-3"></div>
Trenddə Yenİ
</div>
<h1 className="text-[70px] leading-[1.1] uppercase font-light mb-4">
Dəbli qadınlar üçün payız<br />
<span className="font-semibold">ENDİRİMİ</span>
</h1>
<Link to={"/"} className="self-start uppercase font-semibold border-b-2 border-primary">
Daha Çoxunu Kəşf Et
</Link>
</div>
<div className="hidden lg:block">
<img src={WomanImg} alt="" />
</div>
</div>
</section>
);
};

export default Hero;
