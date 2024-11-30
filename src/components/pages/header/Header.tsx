import scss from "./Header.module.scss";

const Header = () => {
  //   const obj = [
  //     { mark: "Wolksvagen", year: 2005, price: 8000, sale: 0 },
  //     { mark: "Audi", year: 1996, price: 2500, sale: 0 },
  //     { mark: "Mercedes", year: 2001, price: 5000, sale: 0 },
  //     { mark: "BMW", year: 2015, price: 18000, sale: 0 },
  //     { mark: "Porsche", year: 2020, price: 120000, sale: 0 },
  //   ];
  //   // const obj2 = obj.filter((el) => (el.year > 2007 ? el.price - 200 : el));
  //   // console.log(obj2, "oeij");
  // let res = obj.map((el)=>{
  //   return el.year > 2007 ? {...el, price: el.price - el.price / 100 * 20, sale:20  } : el
  // })
  //   console.log("🚀 ~ res ~ res:", res)
  //   const {} = GET;
  // function functionLimit(num) {
  //   let i = num;
  //   while (i <= num) {
  //     console.log(i);

  //     i *= 2;
  //   }

  //   let j = i / 2;
  //   while (j >= num) {
  //     console.log(j);
  //     j /= 2; // Делим текущее значение на 2
  //   }
  // }

  // functionLimit(100);
  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>Header</div>
      </div>
    </section>
  );
};

export default Header;
