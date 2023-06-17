import React, { useEffect, useState } from "react";
import SCheaderComponent from "../../components/header/header.component";
import SCfooterComponent from "../../components/footer/footer.component";
import SCcardComponent from "../../components/card/card.component";
import SCmodalComponent from "../../components/modal/modal.component";
import SCcarouselImagesComponent from "../../components/carousel-images/carousel-images.component";
import SCloadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import { useRouter } from 'next/router';
import styles from "./products.module.scss";

interface IProduct {
  id: string | number;
  name: string;
  images: string[];
  price: number;
  quantity: number;
}

const ProductsPage = () => {
  const router = useRouter()
  const [products, setProducts] = useState<IProduct[] | undefined>(undefined);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [headerModal, setHeaderModal] = useState<string>("");
  const [bodyModal, setBodyModal] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const { category } = router.query;

  const productCookies: IProduct[] = [
    {
      id: "1",
      name: "Galleta con avena y chispas de chocolate",
      images: ["/assets/products/cookies/cookie-1.jpg", "/assets/products/cookies/cookie-2.jpg"],
      price: 500,
      quantity: 6,
    },
    {
      id: "2",
      name: "Galleta royal icing con decorado",
      images: ["/assets/products/cookies/cookie-3.jpg", "/assets/products/cookies/cookie-4.jpg"],
      price: 300,
      quantity: 6,
    },
    {
      id: "3",
      name: "Galleta estilo NY con chocolateddd",
      images: ["/assets/products/cookies/cookie-5.jpg", "/assets/products/cookies/cookie-6.jpg"],
      price: 350,
      quantity: 3,
    },
    {
      id: "4",
      name: "Galleta 4",
      images: ["/assets/products/cookies/cookie-7.jpg", "/assets/products/cookies/cookie-8.jpg"],
      price: 550,
      quantity: 4,
    },
    {
      id: "5",
      name: "Galleta 5",
      images: ["/assets/products/cookies/cookie-9.jpg", "/assets/products/cookies/cookie-1.jpg"],
      price: 700,
      quantity: 8,
    },
    {
      id: "6",
      name: "Galleta 6",
      images: ["/assets/products/cookies/cookie-1.jpg", "/assets/products/cookies/cookie-5.jpg"],
      price: 570,
      quantity: 4,
    },
  ];

  const productCakes: IProduct[] = [
    {
      id: "1",
      name: "Cake 1",
      images: ["/assets/products/cookies/cookie-1.jpg"],
      price: 300,
      quantity: 2,
    },
    {
      id: "2",
      name: "Cake 2",
      images: ["/assets/products/cookies/cookie-2.jpg"],
      price: 100,
      quantity: 1,
    },
    {
      id: "3",
      name: "Cake 3",
      images: ["/assets/products/cookies/cookie-3.jpg"],
      price: 150,
      quantity: 3,
    },
    {
      id: "4",
      name: "Cake 4",
      images: ["/assets/products/cookies/cookie-4.jpg"],
      price: 250,
      quantity: 1,
    },
    {
      id: "5",
      name: "Cake 5",
      images: ["/assets/products/cookies/cookie-5.jpg"],
      price: 400,
      quantity: 1,
    },
    {
      id: "6",
      name: "Cake 6",
      images: ["/assets/products/cookies/cookie-6.jpg"],
      price: 170,
      quantity: 1,
    },
  ];

  const productBrownies = [
    {
      id: "1",
      name: "Brownie 1",
      images: ["/assets/products/cookies/cookie-1.jpg", "/assets/products/cookies/cookie-1.jpg"],
      price: 300,
      quantity: 2,
    },
    {
      id: "2",
      name: "Brownie 2",
      images: ["/assets/products/cookies/cookie-2.jpg", "/assets/products/cookies/cookie-9.jpg"],
      price: 100,
      quantity: 1,
    },
    {
      id: "3",
      name: "Brownie 3",
      images: ["/assets/products/cookies/cookie-3.jpg", "/assets/products/cookies/cookie-5.jpg"],
      price: 150,
      quantity: 3,
    },
    {
      id: "4",
      name: "Brownie 4",
      images: ["/assets/products/cookies/cookie-4.jpg", "/assets/products/cookies/cookie-7.jpg"],
      price: 250,
      quantity: 1,
    },
    {
      id: "5",
      name: "Brownie 5",
      images: ["/assets/products/cookies/cookie-5.jpg", "/assets/products/cookies/cookie-6.jpg", "/assets/products/cookies/cookie-1.jpg"],
      price: 400,
      quantity: 1,
    },
    {
      id: "6",
      name: "Brownie 6",
      images: ["/assets/products/cookies/cookie-6.jpg", "/assets/products/cookies/cookie-1.jpg", "/assets/products/cookies/cookie-3.jpg", "/assets/products/cookies/cookie-7.jpg"],
      price: 170,
      quantity: 1,
    },
  ];

  const fetchData = () => {
    console.log(router)
    console.log(category);
    setProducts(productCookies);
    // Fetch Products From API
/*     if (category === "Galletas") {
      setProducts(productCookies);
    } else if (category === "Brownies") {
      setProducts(productBrownies);
    } else {
      setProducts(productCakes);
    } */
    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  };

  const openModal = (product: IProduct) => {
    setHeaderModal(product.name);
    setBodyModal(<SCcarouselImagesComponent images={product.images} />);
    setShowModal(true);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [router.query]);

  return (
    <div>
      <SCheaderComponent></SCheaderComponent>

      {/*       <SCloadingSpinner /> */}
      {isLoading && <SCloadingSpinner />}
      <div className={`${styles['container']}`}>
        {!isLoading &&
          products?.map((product, indexProduct) => {
            return (
              <div
                key={indexProduct}
                style={{ justifyContent: 'center'  }}
                className={`${styles['product-card']}`}
                onClick={() => openModal(product)}
              >
                <SCcardComponent
                  key={product.id}
                  title={product.name}
                  image={product.images[0]}
                  text={[
                    `Precio: $${product.price}`,
                    `Contenido: ${product.quantity} piezas`,
                  ]}
                />
              </div>
            );
          })}
      </div>
      <SCmodalComponent
        showModal={showModal}
        headerTitle={headerModal}
        bodyContent={bodyModal}
        onCloseModal={() => setShowModal(false)}
      />
      <SCfooterComponent />
    </div>
  );
};

export default ProductsPage;
