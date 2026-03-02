import { useState, useMemo } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  Slider,
  Autocomplete,
  TextField,
  Rating,
  Button,
  Badge,
  Typography,
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import categories from "../../data/mockCategories";
import brands from "../../data/mockBrands";

function FilterSidebar({ filters, setFilters }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [expandedAccordions, setExpandedAccordions] = useState({
    categories: !isMobile,
    price: !isMobile,
    brands: !isMobile,
    rating: !isMobile,
    inStock: !isMobile,
  });

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.categories.length) count++;
    if (filters.brands.length) count++;
    if (filters.minRating) count++;
    if (filters.inStockOnly) count++;
    if (filters.priceRange[0] !== 0 || filters.priceRange[1] !== 50000) count++;
    return count;
  }, [filters]);

  const handleReset = () => {
    setFilters({
      categories: [],
      brands: [],
      priceRange: [0, 50000],
      minRating: null,
      inStockOnly: false,
    });
  };

  const handleCategoryChange = (categoryId) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter((id) => id !== categoryId)
        : [...prev.categories, categoryId],
    }));
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: 280 },
        p: 2,
        backgroundColor: "background.paper",
        borderRadius: 3,
        boxShadow: 1,
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Badge badgeContent={activeFiltersCount} color="primary">
          <Typography variant="h6">Фільтри</Typography>
        </Badge>
      </Box>

      <Accordion
        expanded={expandedAccordions.categories}
        onChange={(e, isExpanded) =>
          setExpandedAccordions((prev) => ({ ...prev, categories: isExpanded }))
        }
        sx={{
          backgroundColor: "background.paper",
          border: 1,
          borderColor: "gray.200",
          borderRadius: 2,
          mb: 1.5,
          boxShadow: "none",
          "&:before": { display: "none" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
          sx={{
            "& .MuiTypography-root": {
              fontWeight: 600,
              color: "primary.dark",
            },
          }}
        >
          <Typography>Категорії</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {categories.map((cat) => (
            <FormControlLabel
              key={cat.id}
              control={
                <Checkbox
                  checked={filters.categories.includes(cat.id)}
                  onChange={() => handleCategoryChange(cat.id)}
                  color="primary"
                />
              }
              label={cat.name}
            />
          ))}
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedAccordions.price}
        onChange={(e, isExpanded) =>
          setExpandedAccordions((prev) => ({ ...prev, price: isExpanded }))
        }
        sx={{
          backgroundColor: "background.paper",
          border: 1,
          borderColor: "gray.200",
          borderRadius: 2,
          mb: 1.5,
          boxShadow: "none",
          "&:before": { display: "none" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
          sx={{
            "& .MuiTypography-root": {
              fontWeight: 600,
              color: "primary.dark",
            },
          }}
        >
          <Typography>Ціна</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            value={filters.priceRange}
            onChange={(e, newValue) =>
              setFilters((prev) => ({ ...prev, priceRange: newValue }))
            }
            valueLabelDisplay="auto"
            min={0}
            max={50000}
            color="primary"
          />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedAccordions.brands}
        onChange={(e, isExpanded) =>
          setExpandedAccordions((prev) => ({ ...prev, brands: isExpanded }))
        }
        sx={{
          backgroundColor: "background.paper",
          border: 1,
          borderColor: "gray.200",
          borderRadius: 2,
          mb: 1.5,
          boxShadow: "none",
          "&:before": { display: "none" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
          sx={{
            "& .MuiTypography-root": {
              fontWeight: 600,
              color: "primary.dark",
            },
          }}
        >
          <Typography>Бренди</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Autocomplete
            multiple
            options={brands}
            value={filters.brands}
            onChange={(e, newValue) =>
              setFilters((prev) => ({ ...prev, brands: newValue }))
            }
            renderInput={(params) => <TextField {...params} label="Бренди" />}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedAccordions.rating}
        onChange={(e, isExpanded) =>
          setExpandedAccordions((prev) => ({ ...prev, rating: isExpanded }))
        }
        sx={{
          backgroundColor: "background.paper",
          border: 1,
          borderColor: "gray.200",
          borderRadius: 2,
          mb: 1.5,
          boxShadow: "none",
          "&:before": { display: "none" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
          sx={{
            "& .MuiTypography-root": {
              fontWeight: 600,
              color: "primary.dark",
            },
          }}
        >
          <Typography>Мінімальний рейтинг</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Rating
            value={filters.minRating}
            onChange={(event, newValue) =>
              setFilters((prev) => ({ ...prev, minRating: newValue }))
            }
          />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedAccordions.inStock}
        onChange={(e, isExpanded) =>
          setExpandedAccordions((prev) => ({ ...prev, inStock: isExpanded }))
        }
        sx={{
          backgroundColor: "background.paper",
          border: 1,
          borderColor: "gray.200",
          borderRadius: 2,
          mb: 1.5,
          boxShadow: "none",
          "&:before": { display: "none" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
          sx={{
            "& .MuiTypography-root": {
              fontWeight: 600,
              color: "primary.dark",
            },
          }}
        >
          <Typography>Наявність</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.inStockOnly}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, inStockOnly: e.target.checked }))
                }
              />
            }
            label="Тільки в наявності"
          />
        </AccordionDetails>
      </Accordion>

      <Button
        variant="contained"
        color="secondary"
        fullWidth
        sx={{
          mt: 2,
          borderRadius: 2,
          textTransform: "none",
        }}
        onClick={handleReset}
      >
        Скинути фільтри
      </Button>
    </Box>
  );
}

export default FilterSidebar;