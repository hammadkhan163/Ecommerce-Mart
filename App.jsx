import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div style={styles.container}>
    
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
        <a style={styles.navLink} href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAZlBMVEUbZq////9Gg75Af7zi7PU4eblLhsBckcbG2et4pNA7fLuTttrU4vAtcrUfabEob7T1+PwkbLJRisJtncyZu9ubvNzx9voxdbe0zeVdksbd6fPR4O+JsNZ+qdK3z+bo7/emxOBxoM4U1GO6AAAMsklEQVR4nN2diZKqMBBFFWSXRRBBZZv//8lJIGFf0kkQy1v1qsanM+aQrbvTSU7nXfS4pvc8MnTN970Tkuf7mm5E+T29Pvb5xpPsP/gwY0v3TyvydSs2peNIBbmklrqG0JOnWulF5ndLAwkKS2OEaKVZRSDr++WAlLHhQSlIzRhxKaUIEkAeFS8FZakk9BhhEDMSoiAskXksyCNm7dybUmOxahEBueQ3WRhYt1xkGOMHecloU0N50evjIDtgiKHwgVysXTBqFItvOOYBCbLdMGqUjGeW5ABJwTM4VFr6AZBXuDcGVgjuKlCQ+66tqpN33xXkqn8GA0u/7gfyqepoBKsUAEj5/CQG1hMwErODmMmnOU6nhN2WZAZxPtqsqDxHMkgQHYGBFTHOjmwgF2nWOlwqm03MBPJ2j+M4ndy3LJBCqtsB162QA1Id0s378ioZIM7RGFjbg9cmyFdwMJBsgWRHE1BlYiBfw7FJsg5yP7r0fa3bkKsg1dFlH2p17FoDSQ8fd4fy1jzgFZD3l3EgkpU5fhnkcqhdMi932e5aBHkcaCcuS10MEC+CfNwdZNMTCvIlE/pUS1P8Aoj5XR3d01Q9NHQcGfQWvN95kPJrOrrnamr4lzZRCBOTuPMRiXmQj0QTN9QgVNdgXK6QHeTwDpLYCOE9HaGM+t3ZbjIHcj24g7jh0sSn1O97czHIGZDg6BnEWMA4xyS0ps5EVmZAjjbdk4VIfBG2Q9CMST8FObphnZRpKUszC+3eSDrTuKYgHwy4z2v4uF+pFaraOEtH3waJDyl8Txo1DAMzMxQ7mY9FxVsgj9UMpU+ItKyLPqmGvvzx2DwGyT9W4AXdiB/4t/G5fB3kdXRPP9nN0BrYG5/zXqsgxxvvUVOQajNM+1wDMT9R1FUlZGBVtj9qroAcbyyScfXKsDwWLoMcXyG0qzM1cXMR5PgKIV39wZRcES6BHF8htKszLliaCyDGzqXclka6OqP9bcyDvPYtJItIVzdZPe3XLIi1axlZ5FfApmHNgTwOn9RPNinJ1qzeynvMgBzuqJ+8HNTVsZwZEObHsJu0EtTVsewpyBeMvU9gV8cyJyBbZvP+St7Aro71NwYJDk4KOLUeVQlKmbwFI5B0r+Ixi469wDSkdATyaUfkdnPdJElszbY1/M+2abAKGFV7DkGCPSYR7+ajwmq4oKqq6HoYhsYz+suze5UWpvm+Xi+Xx2PkfIO6Ov6SYAACaFmei0qmKlg6Fv0Jl7Qua1NYp6qKAhX2Uj5A+cjgppEOQBjzylzVcIprKW0/0VRsBnxf0QCELQiUcGRIAxWDR0+/D/Jm+52ZYKZsMfjqY717IIxx68UwuTSx+OpjZT0QxnivJJCgvFxelxJvvqycLMucexyTbseTA6p3IKyD7/yi1/CRUr1TB9lBqJhZ/hc90WimoxE/RAMcnjg0NCoje+/Zdk2yMLgZlptTMwDXIKwGI3HgyiLOrQgL1Wpq6CoSHoEVVGOoiLVc18MVqA1/uz/ZqX2rijyi7bDcnMwWhNUVIZ099nr/0W/Uo6IqQ99gBcQnwyHfkobTgrDam1rzdd3suVlURhDiVrz4staNFoR1KYEsXRTt59dB2GvkrwHhjBr4FOTC/BuNG9ONkYI1QlsSXTXkdVIvBKRg/o0mG68zIwRBaGST9L2Ud5GpICDsYYdo9OQEmxYBoQFf7oitQ0DYZyEySrZ2hEiN2G3JScAX5hr2FREQdldGHz06OTVCfCP+9X2VgLA7VWrzla3PIAWEBh34Ey68BqRk/w1tNEyqw7lbmRR19G6fq21apKtDXcO+yhoEENEiITTTIkK9LLc6xah99F46w5doyLtWGbJt/qw8z3L04bT+/2JUzRwyaxCAm8u2J4VLcNewp7QGAQR9yZaUx9NolKMHaXRCNmTUe2kNX6IPV8N30wj59+TZxCLhD6cGgeQINJkTAX160+486hQj61cfvos7lEuCnhyuYae8BoE4M9ZwgJmC9F9ujmnY1iIDIY9r2CmqQSCxVmP4+DZB1NV38SMkSwli2wONGgTiBJCpvWckgUBGDc9qx0Eu13Dwp0/Dv74lZfj8oCCjphW1VVyJJSVpNQhkIiIeELUmoH1k9O6z7eqCK/xuDQJ5GFoTqaU7SwRrJKRd/SJ4+oJfg0AcfpLzQs2JTRBl+O4YxCNpf6JZYrcaBPQbzYx4SdrCgEBG84hO0/6EE3TBIKMZcRMkHL47Agkl2IuN4CBkRrTbwqxM5epwjpraxjGZRMRzR+AgdLi8O1nmVGgSuDudkO0W914iD9Ycvhy9G7zE7cUeCCi6N024FZf44QU38PBLZ8R3HiJFKa6bLM+xUxI9G2P4iX7Abz5z9Mzv+Kewfh22Lxt1mbtC9mItHzwh0hmRjJfqVnS337uN4cu2bt/ip2K4YBOF2kYkX3vTvh1NiP1nr1IQCcdJaGCjkc6I5NABUPBBndRXLUF7kX4x0IwfRU1BNTIdfmvxLSUMZYAdK7rzl4yYoBqZctWSsTsiAru67aYIlRYGVCP9D5OwHOdSwlA5NPhwasO/hutPywbpI/RACilZSQ40HHRqfcTyalZ5hOYCvCTokxlts0Z6oxbNMpOS75ZCA3SnubX2x8tMHesZhvofKpc/+OiovpTBKyzupYSBTGjIFElbz994mVUWhbqi2po9ddK7ChJeShiohAaxT10cals4mab6CzFTghvfAER4KaEvEsQGujURK0inEjW+GMd+I8XW3HreIGOWnA1EdFkBNpFoOexwuDHUu6hQjyKrhnL2btKFHmjGb2LrEc52EuFpJO4a1qJLb+yLoT3dEk2zFR3Z8vk9NV98Z9xKOn6MLoYyL08vyfMRlaogqCwu3i/2vLRCTo3Q5WmYa7Uhz000G58H8JdV28l2TxlZum3CwG4bR1BF2bj5PS0Htb65PhWEcmxfYFKNgHDrs1UMhfvUu6uoSLx1dUk1n86L91w7bOfVTNj87dKcdsn63VDSbmIpBO3GXuLZIVu/fYO2r4si9CB7qYDHHCrghZQkeIqMm/3kTMZ0Wcm6tXVyzgU6Sj9dVupMwq4eicM9eA0SmGXZClD1SDJekmFK+VHbRzy9nSZ5J/lhkv8RA3Ajm2aFcB7HMtp2ceCO/ISekcdn0482why5NSmhcXmuqPx4a9KRm8XogdE86ySTzWKHbt8TyEf5O49BjtxQSSLjAUdIZbqh8tAtrqS/w0FmtrgeeW4pWXQp4U3rPgNy3DZwj8STTbChNLsNHJJi793whsiekoHcdfk3Ivzo/MSOHrzjzezGfMajEhIluleF2dP7uqq3uaSiKNLC7MJ98F46f1QCUwzC3i/P9A5uWQuHV7CMwP5+OxGv8DFr6TgRhhh/IvXGvL7e8Ia1eMALQ5WwLyoAdReZDCcgDFWi77JP97J+FeS8Vg5BYqiSm+qYeO92Fza8iIg8lpLHF1k7lorJLXE1W/O75R5NQO3YUerg6Xj1oDDmo9t6LUwgou52JxmCg8AbR7cxroXZJb7tTVEVXBL+EDh+qO9IUXSchAYMEm4cpsd2vOHtTu8Xu6E56cW7oIkfRxP5dXNoCsTm8YbniqUEjzanx035A65h50vh9AGQp1uNyz0BYVn5VnuXxIT8S7N5F6vFabiQJffpPu4pCMOhrErP5Nb5l1ey3jOoQCBMh7IyRLTtXsew+MOUURcCwhYDoIUyHZPLEClLynaF3C75F8vxegApvQry2BkPLt5uXDilvT4x/GZfBZIrcUJ5qeIv05Bz4DBPJKxHSTM0ejRsoXkkNKpA6O4C7E8ETqjji0IBgzjz4d7b/a5bo0HGBTdHPX0QAax4wHHr2wfge3ZjJT0yoSiSrzSW3ytirw/QAfgMVxL4tm6EiiYaenFtPQxVgG0Au5LgG47WWxDwkohvOPl3VuBrO37nIpWfudrmdy4b+p3rn37nQq7fuSLt+JsvehK6tO6LSASvEfyaKV74YscvIZFw1ebvXH76O9fR/s4Fwb9zZfPvXKJ9/plrzc+/c9H8+Vx+3Gl8AraoAECQDfnR5uVNrniSBnK+fjBlW4ftgIKBfK5SbutGuzjI+fWRa2OMhYvrJILQRbc9pXEkinCAnINs1/blZTxJCTwgaCS2dkPxLL5tgXwgOOy8C4oXgTuHIMguKPwYIiDIJs6lOiq3XCSHSgTkfH7E0ux7NebbXCoHBMmU0cK8SDgPTBgEVUtlCLF4RiVWGbJAkMqYl8UzYgm7sM+yQJCCwgLP+JpVSEvIkwaCdUkt1s7vqVYqNdFTKgjWw4yt9QxFX7diU0KvGEo6SKPHNb3nkaFrfnNmiuf7mm7g/cZX6QiN/gH3Q7cW4AY/KAAAAABJRU5ErkJggg==" width={70} alt="" /></a>
          <a style={styles.navLink} href="#">Home</a>
          <a style={styles.navLink} href="#">About</a>
          <a style={styles.navLink} href="#">Contact</a>
        </div>
        <div style={styles.cart} onClick={toggleCart}>
          🛒 Cart ({cart.length})
        </div>
      </nav>
      
      {showCart && (
        <div style={styles.cartPopup}>
          <h3>🛒 Your Cart</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul style={styles.cartList}>
              {cart.map((item, index) => (
                <li key={index} style={styles.cartItem}>
                  <span>{item.title.slice(0, 30)}...</span>
                  <span>${item.price.toFixed(2)}</span>
                </li>
              ))}
              <hr />
              <li style={styles.cartTotal}>
                <strong>Total:</strong> ${total}
              </li>
            </ul>
          )}
        </div>
      )}


      <div style={styles.productsContainer}>
        {products.map(product => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.title} style={styles.image} />
            <div style={styles.cardBody}>
              <h3 style={styles.title}>{product.title}</h3>
              <p style={styles.price}>${product.price}</p>
            </div>
            <button style={styles.button} onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>


      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p>Follow us on:</p>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
               Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
             Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
               Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
               LinkedIn
            </a>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>
            © 2025 Ecommerce mart. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
const styles = {
  container: {
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  },
  navbar: {
    backgroundColor: '#333',
    color: 'white',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  navLeft: {
    display: 'flex',
    gap: '1rem',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  cart: {
    backgroundColor: '#555',
    padding: '5px 10px',
    borderRadius: '20px',
    cursor: 'pointer',
  },
  cartPopup: {
    position: 'absolute',
    top: '80px',
    right: '20px',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
    padding: '1rem',
    width: '300px',
    borderRadius: '10px',
    zIndex: 1000,
  },
  cartList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
  },
  cartTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    marginTop: '1rem',
  },
  productsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '2rem',
  },
  card: {
    backgroundColor: 'white',
    width: '250px',
    margin: '1rem',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    transition: '0.3s',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'contain',
    backgroundColor: '#f9f9f9',
  },
  cardBody: {
    padding: '1rem',
    flexGrow: 1,
  },
  title: {
    fontSize: '1rem',
    marginBottom: '0.5rem',
    height: '50px',
    overflow: 'hidden',
  },
  price: {
    color: 'green',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  button: {
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    padding: '10px',
    width: '100%',
    cursor: 'pointer',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '2rem 1rem',
    marginTop: '2rem',
  },
  footerContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginTop: '1rem',
    flexWrap: 'wrap',
  },
  icon: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'color 0.3s',
  },
};
