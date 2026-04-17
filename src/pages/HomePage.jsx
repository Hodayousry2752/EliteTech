import { useState } from 'react'
import { Grid, TextField, MenuItem, Select, FormControl, InputLabel, Pagination, Box, Typography, Paper, Container, Fade } from '@mui/material'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const HomePage = () => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [page, setPage] = useState(1)
  const itemsPerPage = 12

  const categories = ['all', ...new Set(products.map((p) => p.category.id))]

  const filtered = products.filter((p) => {
    const matchesSearch = p.name_ar.includes(search) || p.name_en.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'all' || p.categoryId === category
    return matchesSearch && matchesCategory
  })

  const paginated = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage)
  const pageCount = Math.ceil(filtered.length / itemsPerPage)

  return (
    <Container maxWidth="xl">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 6 },
            mb: 5,
            borderRadius: '32px',
            background: 'linear-gradient(135deg, #e0e7ff 0%, #fce7f3 100%)',
            textAlign: 'center',
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, background: 'linear-gradient(135deg, #4f46e5, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            أحدث الأجهزة الإلكترونية
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4, maxWidth: '700px', mx: 'auto' }}>
            اكتشف تشكيلتنا المتميزة من الهواتف، الحواسيب، والإكسسوارات بأفضل الأسعار
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, maxWidth: 700, mx: 'auto' }}>
            <TextField
              fullWidth
              placeholder="ابحث عن منتج..."
              variant="outlined"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setPage(1)
              }}
              sx={{
                bgcolor: 'white',
                borderRadius: '60px',
                '& .MuiOutlinedInput-root': { borderRadius: '60px' },
              }}
            />
            <FormControl sx={{ minWidth: 180, bgcolor: 'white', borderRadius: '60px' }}>
              <InputLabel>الفئة</InputLabel>
              <Select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value)
                  setPage(1)
                }}
                label="الفئة"
                sx={{ borderRadius: '60px' }}
              >
                <MenuItem value="all">جميع المنتجات</MenuItem>
                {categories
                  .filter((c) => c !== 'all')
                  .map((cat) => {
                    const catObj = products.find((p) => p.categoryId === cat)?.category
                    return (
                      <MenuItem key={cat} value={cat}>
                        {catObj?.name_ar || cat}
                      </MenuItem>
                    )
                  })}
              </Select>
            </FormControl>
          </Box>
        </Paper>
      </motion.div>

      {/* Results count */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap' }}>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          عرض <strong>{paginated.length}</strong> من <strong>{filtered.length}</strong> منتج
        </Typography>
      </Box>

      {/* Products Grid */}
      <Grid container spacing={3}>
        {paginated.map((product, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      {pageCount > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <Pagination
            count={pageCount}
            page={page}
            onChange={(e, v) => setPage(v)}
            color="primary"
            size="large"
            sx={{
              '& .MuiPaginationItem-root': { borderRadius: '50%', fontWeight: 600 },
            }}
          />
        </Box>
      )}
    </Container>
  )
}

export default HomePage