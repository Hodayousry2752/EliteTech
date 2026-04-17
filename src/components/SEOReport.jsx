import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Chip, Paper } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'

const SEOReport = ({ product }) => {
  return (
    <Accordion
      defaultExpanded
      sx={{
        mt: 3,
        borderRadius: '24px !important',
        border: '1px solid #e0e7ff',
        boxShadow: 'none',
        '&:before': { display: 'none' },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          bgcolor: '#f5f3ff',
          borderRadius: '24px',
          '&.Mui-expanded': { borderRadius: '24px 24px 0 0' },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TrendingUpIcon sx={{ color: 'primary.main' }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            تقرير SEO للمنتج | Product SEO Report
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              الكلمات المفتاحية المستهدفة:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
              {product.seoKeywords.map((kw, i) => (
                <Chip key={i} label={kw} size="small" color="primary" variant="outlined" sx={{ borderRadius: '30px' }} />
              ))}
            </Box>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              الوصف التعريفي (Meta Description):
            </Typography>
            <Paper variant="outlined" sx={{ p: 1.5, mt: 1, bgcolor: '#f8fafc', borderRadius: '16px' }}>
              <Typography variant="body2">{product.metaDescription}</Typography>
            </Paper>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                العنوان المحسّن (AR):
              </Typography>
              <Typography variant="body2" sx={{ bgcolor: '#e0e7ff', p: 1, borderRadius: '12px' }}>
                {product.name_ar} | EliteTech
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Optimized Title (EN):
              </Typography>
              <Typography variant="body2" sx={{ bgcolor: '#e0e7ff', p: 1, borderRadius: '12px' }}>
                {product.name_en} - Best Price & Warranty
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              التصنيف والفئة المستهدفة:
            </Typography>
            <Typography variant="body2">
              Category: {product.category.name_ar} | Tags: {product.tags.join(', ')}
            </Typography>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

export default SEOReport