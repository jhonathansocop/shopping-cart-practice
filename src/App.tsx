import { Container, Typography } from "@mui/material";
import ProductList from "./components/product/product-list";
import ShoppingCart from "./components/shopping-cart";
import "./styles.css";

export default function App() {
	return (
		<Container>
			<Typography variant='h1' align="center">
				Store
			</Typography>
			<ProductList></ProductList>
			<ShoppingCart></ShoppingCart>
		</Container>
	)
}
