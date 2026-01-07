import { z } from "zod";

export type ProductType = {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: { [color: string]: string };
  category: string;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsType = CartItemType[];

export const shippingFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email().min(1, "Email is required"),
  phone: z
    .string()
    .min(7, "Phone number must be at least 7 characters long")
    .max(10, "Phone number must be at most 10 characters long")
    .regex(/^[0-9]+$/, "Phone number must contain only numbers"),
  address: z.string().min(1, "Adress is required"),
  city: z.string().min(1, "City is required"),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, "Card holder name is required"),
  cardNumber: z
    .string()
    .min(16, "Card number is required")
    .max(16, "Card number is required"),
  expirationDate: z
    .string()
    .min(5, "Expiration date is required")
    .max(5, "Expiration date is required")
    .regex(
      /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
      "Expiration date must be in the format MM/YY"
    ),
  cvv: z
    .string()
    .min(3, "CVV is required")
    .max(3, "CVV is required")
    .regex(/^[0-9]+$/, "CVV must contain only numbers"),
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;

export type CartStoreStateType = {
  cart: CartItemsType;
  hasHydrated: boolean;
};

export type CartStoreActionsType = {
  addToCart: (item: CartItemType) => void;
  removeFromCart: (item: CartItemType) => void;
  clearCart: () => void;
};
