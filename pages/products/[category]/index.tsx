import React, { useEffect, useState } from "react";
import SCheaderComponent from "../../../components/header/header.component";
import SCfooterComponent from "../../../components/footer/footer.component";
import SCcardComponent from "../../../components/card/card.component";
import SCmodalComponent from "../../../components/modal/modal.component";
import SCcarouselImagesComponent from "../../../components/carousel-images/carousel-images.component";
import SCloadingSpinner from "../../../components/loading-spinner/loading-spinner.component";
import SCwpButtonComponent from "../../../components/wp-button/wp-button";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";

import styles from "./products.module.scss";

interface IProduct {
  id: string | number;
  name: string;
  images: string[];
  price: number;
  quantity: number;
}

const ProductsPage = () => {
  const router = useRouter();
  const [products, setProducts] = useState<IProduct[] | undefined>(undefined);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [headerModal, setHeaderModal] = useState<string>("");
  const [bodyModal, setBodyModal] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const { category } = router.query;

  const productCookies: IProduct[] = [
    {
      id: "1",
      name: "Galleta de chocolate con cacahuate",
      images: [
        "/assets/products/cookies/NY/chocolate-cacahuate/choco-cacahuate-1.jpg",
        "/assets/products/cookies/NY/chocolate-cacahuate/choco-cacahuate-2.jpg",
      ],
      price: 220,
      quantity: 6,
    },
    {
      id: "2",
      name: "Galleta de nuez con chispas de chocolate",
      images: [
        "/assets/products/cookies/NY/nuez-y-chispas-chocolate/nuez-y-chispas-1.jpg",
        "/assets/products/cookies/NY/nuez-y-chispas-chocolate/nuez-y-chispas-2.jpg",
      ],
      price: 230,
      quantity: 6,
    },
    {
      id: "3",
      name: "Galleta de zanahoria con nuez y queso filadelfia",
      images: ["/assets/products/cookies/zanahoria-filadelfia/cookie-zanahoria-1.jpg"],
      price: 170,
      quantity: 6,
    },
    {
      id: "4",
      name: "Galleta decorada para evento especial",
      images: ["/assets/products/cookies/royal-icing/roy-ici-baptism.jpg"],
      price: 230,
      quantity: 6,
    },
    {
      id: "5",
      name: "Galleta decorada royal icing",
      images: ["/assets/products/cookies/royal-icing/roy-ici-music-notes.jpg"],
      price: 230,
      quantity: 6,
    },
    {
      id: "6",
      name: "Galleta de mantequilla con mermelada al gusto",
      images: ["/assets/products/cookies/butter/butter-cookie-1.jpg"],
      price: 220,
      quantity: 10,
    },
    {
      id: "7",
      name: "Galleta decorada royal icing",
      images: ["/assets/products/cookies/royal-icing/roy-ici-donut.jpg"],
      price: 230,
      quantity: 6,
    },
  ];

  const productCakes: IProduct[] = [
    {
      id: "1",
      name: "Pastel de cafe con chocolate y vainilla",
      images: ["/assets/products/cakes/cake-1.jpg"],
      price: 500,
      quantity: 1,
    },
    {
      id: "2",
      name: "Pastel de vainilla y frutos rojos",
      images: ["/assets/products/cakes/cake-2.jpg"],
      price: 500,
      quantity: 1,
    },
    {
      id: "3",
      name: "Pastel de mocha con nueza y vainilla",
      images: ["/assets/products/cakes/cake-3.jpg"],
      price: 450,
      quantity: 1,
    },
    {
      id: "4",
      name: "Pastel de chocolate ferrero y vainilla",
      images: ["/assets/products/cakes/cake-4.jpg"],
      price: 450,
      quantity: 1,
    },
  ];

  const productBrownies = [
    {
      id: "1",
      name: "Brownie con chocolate y chispas",
      images: ["/assets/products/brownies/brownie-1.jpg"],
      price: 60,
      quantity: 1,
    },
    {
      id: "2",
      name: "Brownie con chocolate, caramelo salado y oreo",
      images: ["/assets/products/brownies/brownie-2.jpg"],
      price: 50,
      quantity: 1,
    },
    // {
    //   id: "3",
    //   name: "Brownie con chocolate, caramelo salado y oreo",
    //   images: ["/assets/products/brownies/brownie-3.jpg"],
    //   price: 100,
    //   quantity: 1,
    // },
  ];

  const productRolls = [
    {
      id: "1",
      name: "Roles de canela con queso filadelfia",
      images: ["/assets/products/rolls/rolls-1.jpg"],
      price: 90,
      quantity: 2,
    },
  ];

  const fetchData = () => {
    setProducts(productCookies);
    // TODO Fetch Products From API
    if (category === "cookies") {
      setProducts(productCookies);
    } else if (category === "brownies") {
      setProducts(productBrownies);
    } else if (category === "cakes") {
      setProducts(productCakes);
    } else {
      setProducts(productRolls);
    }
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
      {isLoading && <SCloadingSpinner />}
      <div className={`${styles["container"]}`}>
        {!isLoading &&
          products?.map((product, indexProduct) => {
            return (
              <div
                key={indexProduct}
                className={`${styles["product-card"]}`}
                onClick={() => openModal(product)}
              >
                <motion.div
                  key={indexProduct}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                >
                  <SCcardComponent
                    key={product.id}
                    title={product.name}
                    image={product.images[0]}
                    text={[
                      `Precio: $${product.price}`,
                      product.quantity > 1
                        ? `Contenido: ${product.quantity} piezas`
                        : `Contenido: ${product.quantity} pieza`,
                    ]}
                  />
                </motion.div>
              </div>
            );
          })}

        <SCwpButtonComponent />
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
