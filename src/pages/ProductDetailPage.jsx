import { useParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Chip,
  Button,
  Divider,
  Rating,
  Breadcrumbs,
  Link,
  IconButton,
  Tabs,
  Tab,
  Stack,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import VerifiedIcon from '@mui/icons-material/Verified'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShareIcon from '@mui/icons-material/Share'
import SecurityIcon from '@mui/icons-material/Security'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import PaymentIcon from '@mui/icons-material/Payment'
import DescriptionIcon from '@mui/icons-material/Description'
import TranslateIcon from '@mui/icons-material/Translate'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'
import PolicyIcon from '@mui/icons-material/Policy'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import { motion } from 'framer-motion'
import { getProductById } from '../data/products'
import ProductVariations from '../components/ProductVariations'
import RelatedProducts from '../components/RelatedProducts'
import SEOReport from '../components/SEOReport'
import { useState } from 'react'

const ProductDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const [tabValue, setTabValue] = useState(0)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return (
      <Container sx={{ textAlign: 'center', py: 10 }}>
        <Typography variant="h4">المنتج غير موجود</Typography>
      </Container>
    )
  }

  const schemaData = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name_en,
    image: product.images[0],
    description: product.metaDescription,
    sku: product.sku,
    brand: { '@type': 'Brand', name: 'EliteTech' },
    offers: {
      '@type': 'Offer',
      url: window.location.href,
      priceCurrency: 'EGP',
      price: product.finalPrice,
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'EliteTech Store' },
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: product.rating, reviewCount: product.reviews },
  }

  const features = [
    { icon: <SecurityIcon />, text: 'ضمان لمدة سنتين' },
    { icon: <SupportAgentIcon />, text: 'دعم فني 24/7' },
    { icon: <PaymentIcon />, text: 'طرق دفع آمنة' },
    { icon: <LocalShippingIcon />, text: 'شحن سريع خلال 24 ساعة' },
  ]

  return (
    <>
      <Helmet>
        <title>{product.name_ar} | EliteTech Store</title>
        <meta name="description" content={product.metaDescription} />
        <meta name="keywords" content={product.seoKeywords.join(', ')} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Container maxWidth="xl">
        <Breadcrumbs sx={{ mb: 3 }}>
          <Link color="inherit" onClick={() => navigate('/')} sx={{ cursor: 'pointer', textDecoration: 'none' }}>
            الرئيسية
          </Link>
          <Link color="inherit" onClick={() => navigate('/')} sx={{ cursor: 'pointer', textDecoration: 'none' }}>
            {product.category.name_ar}
          </Link>
          <Typography color="textPrimary">{product.name_ar}</Typography>
        </Breadcrumbs>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  bgcolor: '#ffffff',
                  borderRadius: '32px',
                  border: '1px solid rgba(99,102,241,0.15)',
                  boxShadow: '0 20px 35px -12px rgba(0,0,0,0.05)',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name_en}
                    style={{ width: '100%', maxHeight: 450, objectFit: 'contain', borderRadius: '24px' }}
                  />
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'center', flexWrap: 'wrap' }}>
                  {product.images.map((img, idx) => (
                    <Avatar
                      key={idx}
                      src={img}
                      onClick={() => setSelectedImage(idx)}
                      variant="rounded"
                      sx={{
                        width: 70,
                        height: 70,
                        cursor: 'pointer',
                        border: selectedImage === idx ? '3px solid #6366f1' : '1px solid #e0e7ff',
                        transition: '0.2s',
                        '&:hover': { transform: 'scale(1.05)' },
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Paper elevation={0} sx={{ p: 3, borderRadius: '32px', border: '1px solid rgba(99,102,241,0.15)' }}>
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 1, color: '#1e1b4b' }}>
                  {product.name_ar}
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary', mb: 2 }}>
                  {product.name_en}
                </Typography>

                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                  <Rating value={product.rating} precision={0.5} readOnly sx={{ color: 'secondary.main' }} />
                  <Typography variant="body2">({product.reviews} تقييم)</Typography>
                  <VerifiedIcon sx={{ color: '#10b981' }} />
                  <Typography variant="body2" sx={{ color: '#10b981', fontWeight: 500 }}>
                    منتج أصلي
                  </Typography>
                </Stack>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mb: 2 }}>
                  <Typography variant="h2" sx={{ color: 'primary.main', fontWeight: 800 }}>
                    {product.finalPrice.toLocaleString()} ج.م
                  </Typography>
                  {product.discountPercent > 0 && (
                    <Typography variant="h6" sx={{ textDecoration: 'line-through', color: 'text.disabled' }}>
                      {product.basePrice.toLocaleString()} ج.م
                    </Typography>
                  )}
                  {product.discountPercent > 0 && (
                    <Chip label={`خصم ${product.discountPercent}%`} color="error" size="small" sx={{ fontWeight: 600 }} />
                  )}
                </Box>

                <Paper variant="outlined" sx={{ p: 2, mb: 3, bgcolor: '#ecfdf5', borderColor: '#10b981', borderRadius: '20px' }}>
                  <Typography variant="body1" sx={{ fontWeight: 600, color: '#065f46', display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocalOfferIcon fontSize="small" /> سعر الجملة (5 قطع فأكثر): {product.wholesalePrice.toLocaleString()} ج.م للقطعة
                  </Typography>
                </Paper>

                <ProductVariations colors={product.colors} storage={product.storage} />

                <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<ShoppingCartIcon />}
                    sx={{
                      flex: 2,
                      background: 'linear-gradient(135deg, #6366f1, #ec4899)',
                      borderRadius: '40px',
                      py: 1.5,
                      fontWeight: 700,
                      fontSize: '1rem',
                    }}
                  >
                    أضف إلى السلة
                  </Button>
                  <Button variant="outlined" size="large" sx={{ flex: 1, borderRadius: '40px', py: 1.5 }}>
                    شراء الآن
                  </Button>
                  <IconButton sx={{ border: '1px solid #e0e7ff', borderRadius: '40px' }}>
                    <FavoriteBorderIcon />
                  </IconButton>
                  <IconButton sx={{ border: '1px solid #e0e7ff', borderRadius: '40px' }}>
                    <ShareIcon />
                  </IconButton>
                </Box>

                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 1.5, mt: 3 }}>
                  {features.map((feature, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
                      {feature.icon}
                      <Typography variant="body2">{feature.text}</Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        <Box sx={{ mt: 5 }}>
          <Paper elevation={0} sx={{ borderRadius: '32px', border: '1px solid rgba(99,102,241,0.15)', overflow: 'hidden' }}>
            <Tabs
              value={tabValue}
              onChange={(e, v) => setTabValue(v)}
              sx={{
                bgcolor: '#fafaff',
                borderBottom: '1px solid rgba(99,102,241,0.1)',
                '& .MuiTab-root': { py: 2, fontWeight: 600 },
              }}
            >
              <Tab icon={<DescriptionIcon />} iconPosition="start" label="الوصف بالعربية" />
              <Tab icon={<TranslateIcon />} iconPosition="start" label="Description (EN)" />
              <Tab icon={<SettingsSuggestIcon />} iconPosition="start" label="المواصفات التقنية" />
              <Tab icon={<PolicyIcon />} iconPosition="start" label="سياسة الشحن والإرجاع" />
            </Tabs>
            <Box sx={{ p: 4 }}>
              {tabValue === 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <Typography variant="body1" sx={{ lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: product.description_ar }} />
                </motion.div>
              )}
              {tabValue === 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <Typography variant="body1" sx={{ lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: product.description_en }} />
                </motion.div>
              )}
              {tabValue === 2 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <Table>
                    <TableBody>
                      <TableRow><TableCell sx={{ fontWeight: 700, width: '30%' }}>المعالج</TableCell><TableCell>أحدث إصدار (Octa-core, up to 3.2 GHz)</TableCell></TableRow>
                      <TableRow><TableCell sx={{ fontWeight: 700 }}>الشاشة</TableCell><TableCell>Super Retina XDR, 120Hz, HDR10+</TableCell></TableRow>
                      <TableRow><TableCell sx={{ fontWeight: 700 }}>البطارية</TableCell><TableCell>5000 mAh - شحن سريع 65 واط</TableCell></TableRow>
                      <TableRow><TableCell sx={{ fontWeight: 700 }}>الكاميرا الخلفية</TableCell><TableCell>48 ميجابكسل + 12 ميجابكسل + 12 ميجابكسل</TableCell></TableRow>
                      <TableRow><TableCell sx={{ fontWeight: 700 }}>الكاميرا الأمامية</TableCell><TableCell>32 ميجابكسل</TableCell></TableRow>
                      <TableRow><TableCell sx={{ fontWeight: 700 }}>نظام التشغيل</TableCell><TableCell>Android 14 / iOS 18</TableCell></TableRow>
                      <TableRow><TableCell sx={{ fontWeight: 700 }}>الذاكرة العشوائية</TableCell><TableCell>8GB / 12GB / 16GB</TableCell></TableRow>
                      <TableRow><TableCell sx={{ fontWeight: 700 }}>السعة التخزينية</TableCell><TableCell>{product.storage.join(' / ')}</TableCell></TableRow>
                    </TableBody>
                  </Table>
                </motion.div>
              )}
              {tabValue === 3 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    <strong>الشحن:</strong> نقدم شحن سريع لجميع محافظات مصر خلال 2-4 أيام عمل. الشحن مجاني للطلبات فوق 2000 ج.م.
                    <br /><br />
                    <strong>الإرجاع والاستبدال:</strong> يمكنك إرجاع المنتج خلال 14 يوماً من تاريخ الاستلام بشرط أن يكون بحالته الأصلية.
                    <br /><br />
                    <strong>الضمان:</strong> ضمان شامل لمدة سنتين على جميع المنتجات الأصلية.
                  </Typography>
                </motion.div>
              )}
            </Box>
          </Paper>
        </Box>

        <SEOReport product={product} />
        <RelatedProducts product={product} type="cross" />
        <RelatedProducts product={product} type="upsell" />
      </Container>
    </>
  )
}

export default ProductDetailPage