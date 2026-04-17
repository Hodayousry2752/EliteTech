import { Card, CardMedia, CardContent, Typography, Box, Chip, Rating, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
      style={{ height: '100%' }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.paper',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(99,102,241,0.1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            borderColor: 'primary.main',
            boxShadow: '0 20px 35px -12px rgba(99,102,241,0.25)',
          },
        }}
      >
        <Box sx={{ position: 'relative', pt: 2, display: 'flex', justifyContent: 'center', bgcolor: '#fafaff' }}>
          <CardMedia
            component="img"
            image={product.images[0]}
            alt={product.name_en}
            sx={{
              height: 200,
              width: 'auto',
              objectFit: 'contain',
              transition: 'transform 0.5s ease',
              '&:hover': { transform: 'scale(1.05)' },
            }}
          />
          {product.discountPercent > 0 && (
            <Box
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
                bgcolor: 'error.main',
                color: 'white',
                px: 1.5,
                py: 0.5,
                borderRadius: '40px',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              -{product.discountPercent}%
            </Box>
          )}
        </Box>

        <CardContent sx={{ flexGrow: 1, p: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, lineHeight: 1.3 }}>
            {product.name_ar}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontSize: '0.75rem' }}>
            {product.name_en}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1.5 }}>
            <Rating value={product.rating} precision={0.5} size="small" readOnly sx={{ color: 'secondary.main' }} />
            <Typography variant="caption" color="text.secondary">
              ({product.reviews})
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 2 }}>
            {product.tags.slice(0, 2).map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  bgcolor: 'primary.light',
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '0.7rem',
                  height: 24,
                }}
              />
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 2 }}>
            <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 800 }}>
              {product.finalPrice} ج.م
            </Typography>
            {product.discountPercent > 0 && (
              <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'text.disabled' }}>
                {product.basePrice} ج.م
              </Typography>
            )}
          </Box>

          <Button
            component={Link}
            to={`/product/${product.id}`}
            fullWidth
            variant="contained"
            sx={{
              background: 'linear-gradient(135deg, #6366f1, #ec4899)',
              borderRadius: '40px',
              py: 1,
              fontWeight: 600,
              '&:hover': {
                background: 'linear-gradient(135deg, #4f46e5, #db2777)',
                transform: 'scale(1.02)',
              },
            }}
          >
            عرض التفاصيل
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ProductCard