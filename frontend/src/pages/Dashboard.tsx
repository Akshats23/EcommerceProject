import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/material";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

import type { Product } from "../types/product";
import { getAllProducts } from "../services/productService";
import { Link } from "react-router-dom";

type ProductFilter = "all" | "active" | "archived";

const Dashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<ProductFilter>("active");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);

    try {
      const data = await getAllProducts();

      console.log("Products from API:", data);

      setProducts(data);
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter((product) => {
    switch (filter) {
      case "active":
        return product.isActive;

      case "archived":
        return !product.isActive;

      default:
        return true;
    }
  });

  const columns: GridColDef<Product>[] = [
    {
      field: "name",
      headerName: "Product",
      flex: 2,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      renderCell: (params: GridRenderCellParams<Product>) => (
        <>${params.row.price.toFixed(2)}</>
      ),
    },
    {
      field: "stock",
      headerName: "Stock",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      sortable: false,
      renderCell: (params: GridRenderCellParams<Product>) => (
        <Chip
          label={params.row.isActive ? "Active" : "Archived"}
          color={params.row.isActive ? "success" : "default"}
          size="small"
        />
      ),
    },
    {
      field: "createdAt",
      headerName: "Created",
      flex: 1,
      renderCell: (params: GridRenderCellParams<Product>) => (
        <>{new Date(params.row.createdAt).toLocaleDateString()}</>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1.5,
      sortable: false,
      filterable: false,
      renderCell: (params: GridRenderCellParams<Product>) => (
        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            //onClick={handleProductEdit}
          ></Button>
        </Stack>
      ),
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ flexGrow: 1, width: "100%", p: 3 }}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h4">Products</Typography>

          <Button
            variant="contained"
            color="inherit"
            component={Link}
            to="/products/new"
          >
            Add Product
          </Button>
        </Stack>

        <Paper sx={{ p: 2, mb: 3 }}>
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={(_, value: ProductFilter | null) => {
              if (value) {
                setFilter(value);
              }
            }}
          >
            <ToggleButton value="active">Active</ToggleButton>

            <ToggleButton value="archived">Archived</ToggleButton>

            <ToggleButton value="all">All Products</ToggleButton>
          </ToggleButtonGroup>
        </Paper>

        <Paper sx={{ p: 2 }}>
          <Box sx={{ height: 600, width: "100%" }}>
            <DataGrid
              rows={filteredProducts}
              columns={columns}
              loading={loading}
              pageSizeOptions={[5, 10, 25, 50]}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              disableRowSelectionOnClick
            />
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard;
