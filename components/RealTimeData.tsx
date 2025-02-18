"use client";

import supabase from "@/lib/supabase";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const RealTimeData = ({
	data,
}: {
	data: // eslint-disable-next-line
	any;
}) => {
	const router = useRouter();

	useEffect(() => {
		const channel = supabase
			.channel("custom-all-channel")
			.on(
				"postgres_changes",
				{ event: "*", schema: "public", table: "products" },
				() => {
					router.refresh();
				}
			)
			.subscribe();

		return () => {
			supabase.removeChannel(channel);
		};
	}, [router]);

	const nameElements = data.map(
		(
			product: // eslint-disable-next-line
			any
		) => {
			return <p key={product.id}>{product.name}</p>;
		}
	);

	return <div>{nameElements}</div>;
};

export default RealTimeData;
