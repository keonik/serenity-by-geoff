export interface CartItem {
	id: string;
	quantity: number;
}

export type Cart = Record<string, CartItem>;
