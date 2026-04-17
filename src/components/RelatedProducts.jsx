import { useState } from 'react'
import { Typography, Grid, Box, Pagination, Paper } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { getRelatedProducts } from '../data/products'

const RelatedProducts = ({ product, type }) => {
  const allRelated = getRelatedProducts(product, type)
  const [page, setPage] = useState(1)
  const itemsPerPage = 4
  const pageCount = Math.ceil(allRelated.length / itemsPerPage)

  if (allRelated.length === 0) return null

  const paginatedRelated = allRelated.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  const title = type === 'cross' ? 'منتجات تكميلية (Cross-sell)' : 'ترقية ممتازة (Upsell)'
  const Icon = type === 'cross' ? ShoppingCartIcon : TrendingUpIcon

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
      <Box sx={{ mt: 6, width: '100%' }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 4 },
            borderRadius: '32px',
            bgcolor: '#fafaff',
            border: '1px solid rgba(99,102,241,0.1)',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              borderRight: '4px solid',
              borderColor: 'primary.main',
              pr: 2,
            }}
          >
            <Icon sx={{ color: 'primary.main' }} /> {title}
          </Typography>

          <Grid container spacing={3}>
            {paginatedRelated.map((relProduct) => (
              <Grid item xs={12} sm={6} md={3} key={relProduct.id}>
                <ProductCard product={relProduct} />
              </Grid>
            ))}
          </Grid>

          {pageCount > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Pagination
                count={pageCount}
                page={page}
                onChange={(e, v) => setPage(v)}
                color="primary"
                size="large"
                sx={{
                  '& .MuiPaginationItem-root': { borderRadius: '40px', fontWeight: 600 },
                }}
              />
            </Box>
          )}
        </Paper>
      </Box>
    </motion.div>
  )
}

export default RelatedProducts