import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../services/productService";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import type { EditProductRequest } from "../types/editProduct";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<EditProductRequest>({
    id: 0,
    name: "",
    description: "",
    price: 0,
    stock: 0,
    imageUrl: "",
    isActive: true,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const product = await getProductById(Number(id));

        setFormValues({
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          stock: product.stock,
          imageUrl: product.imageUrl,
          isActive: product.isActive,
        });
      } catch (error) {
        console.error("Error loading product:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFormValues({
      ...formValues,
      [event.target.name]:
        event.target.type === "number"
          ? Number(event.target.value)
          : event.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await updateProduct(formValues);
      navigate("/");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  if (loading) {
    return (
      <Container sx={{ py: 4 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Edit Product
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Name"
              name="name"
              value={formValues.name}
              onChange={handleTextFieldChange}
              fullWidth
              required
            />

            <TextField
              label="Description"
              name="description"
              value={formValues.description}
              onChange={handleTextFieldChange}
              fullWidth
              multiline
              rows={3}
            />

            <TextField
              label="Price"
              name="price"
              type="number"
              value={formValues.price}
              onChange={handleTextFieldChange}
              fullWidth
            />

            <TextField
              label="Stock"
              name="stock"
              type="number"
              value={formValues.stock}
              onChange={handleTextFieldChange}
              fullWidth
            />

            <TextField
              label="Image URL"
              name="imageUrl"
              value={formValues.imageUrl}
              onChange={handleTextFieldChange}
              fullWidth
            />

            <Button variant="contained" type="submit">
              Save Changes
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};

export default EditProduct;
