import product from "../img/lebar.JPG";

const Main = () => {
  return (
    <main className="row">
      <nav className="side">
        <a href="#0">All</a>
        <a href="#0">Tee</a>
        <a href="#0">Long Sleeve</a>
      </nav>
      <article className="page">
        <h2 className="category">All</h2>
        <div className="content">
          <figure className="media">
            <a href="#0">
              <img
                src={product}
                alt="product"
              />
            </a>
            <a href="#0" className="price"><p>Product Name</p>
            <p>Rp 100K</p></a>
          </figure>
        </div>
      </article>
    </main>
  )
};

export default Main;
