import React from "react";

import supabase from "@/lib/supabase";
import AddNewProduct from "@/components/AddNewProduct";
import RealTimeData from "@/components/RealTimeData";

const HomePage = async () => {
	const { data: products, error } = await supabase
		.from("products")
		.select(`
        *,
        products_variant (
          products_id,
          size, status, stock
        )
      `);

	if (error) {
		throw new Error("Error fetching products from DB.");
	}

	return (
		<div>
			<h1 className="text-4xl font-bold">Hello World!</h1>
			<RealTimeData data={products} />

      <AddNewProduct />
		</div>
	);
};

export default HomePage;
