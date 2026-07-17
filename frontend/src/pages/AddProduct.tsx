import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewProduct } from "../services/productService";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const AddProduct = () => {

    const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    imageUrl: "",
    isActive: true,
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    imageUrl: "",
  });

  const validateForm = () => {
    const errors = {
      name: "",
      description: "",
      price: "",
      stock: "",
      imageUrl: "",
    };

    let isValid = true;

    if (!formValues.name.trim()) {
      errors.name = "Product name is required.";
      isValid = false;
    }

    if (!formValues.description.trim()) {
      errors.description = "Description is required.";
      isValid = false;
    }

    if (!formValues.price) {
      errors.price = "Price is required.";
      isValid = false;
    } else if (Number(formValues.price) <= 0) {
      errors.price = "Price must be greater than 0.";
      isValid = false;
    }

    if (!formValues.stock) {
      errors.stock = "Stock is required.";
      isValid = false;
    } else if (Number(formValues.stock) < 0) {
      errors.stock = "Stock cannot be negative.";
      isValid = false;
    }

    if (formValues.imageUrl && !/^https?:\/\/.+/i.test(formValues.imageUrl)) {
      errors.imageUrl = "Enter a valid URL.";
      isValid = false;
    }

    setFormErrors(errors);

    return isValid;
  };

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  if (!validateForm()) return;

  await addNewProduct({
    name: formValues.name,
    description: formValues.description,
    price: Number(formValues.price),
    stock: Number(formValues.stock),
    imageUrl: formValues.imageUrl,
  });

  // Navigate back to the dashboard
  navigate("/");
};

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Add Product
          </Typography>

          <Stack spacing={3}>
            <TextField
              name="name"
              label="Product Name"
              value={formValues.name}
              onChange={handleTextFieldChange}
              error={!!formErrors.name}
              helperText={formErrors.name}
              fullWidth
            />

            <TextField
              name="description"
              label="Description"
              value={formValues.description}
              onChange={handleTextFieldChange}
              error={!!formErrors.description}
              helperText={formErrors.description}
              multiline
              rows={4}
              fullWidth
            />

            <TextField
              name="price"
              label="Price"
              type="number"
              value={formValues.price}
              onChange={handleTextFieldChange}
              error={!!formErrors.price}
              helperText={formErrors.price}
              fullWidth
            />

            <TextField
              name="stock"
              label="Stock"
              type="number"
              value={formValues.stock}
              onChange={handleTextFieldChange}
              error={!!formErrors.stock}
              helperText={formErrors.stock}
              fullWidth
            />

            <TextField
              name="imageUrl"
              label="Image URL"
              value={formValues.imageUrl}
              onChange={handleTextFieldChange}
              error={!!formErrors.imageUrl}
              helperText={formErrors.imageUrl}
              fullWidth
            />

            <Button type="submit" variant="contained" size="large">
              Add Product
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default AddProduct;
