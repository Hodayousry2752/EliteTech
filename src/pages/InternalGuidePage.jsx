import { Paper, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Alert, Chip, Container, Grid } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import EditIcon from '@mui/icons-material/Edit'
import StorageIcon from '@mui/icons-material/Storage'
import ImageIcon from '@mui/icons-material/Image'
import PriceChangeIcon from '@mui/icons-material/PriceChange'
import SellIcon from '@mui/icons-material/Sell'
import { motion } from 'framer-motion'

const InternalGuidePage = () => {
  return (
    <Container maxWidth="lg">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            mb: 3,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #6366f1, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          دليل تحديث المنتجات للفريق الداخلي
        </Typography>

        <Alert severity="info" sx={{ mb: 4, borderRadius: '20px' }}>
          هذا الدليل مخصص لفريق إدارة المحتوى والمطورين لتحديث وإدارة المنتجات بكفاءة
        </Alert>

        <Paper sx={{ p: 4, mb: 4, borderRadius: '32px' }}>
          <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <EditIcon color="primary" /> كيفية إضافة أو تعديل منتج
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
              <ListItemText primary="1. افتح ملف src/data/products.js - مصدر البيانات الرئيسي" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
              <ListItemText primary="2. استخدم دالة generateProducts() لتعديل المنتجات" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
              <ListItemText primary="3. تأكد من توفير: name_ar, name_en, description_ar (200-400 كلمة), description_en, basePrice, colors, storage, images, tags" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
              <ListItemText primary="4. بعد التعديل، سيتم تحديث جميع الصفحات تلقائياً" />
            </ListItem>
          </List>
        </Paper>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%', borderRadius: '24px' }}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}><ImageIcon color="secondary" /> تحسين الصور</Typography>
              <Typography variant="body2">• توحيد الأبعاد 500x500 • خلفية بيضاء أو شفافة • ضبط الإضاءة • ضغط الصور لتحسين السرعة</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%', borderRadius: '24px' }}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}><PriceChangeIcon color="secondary" /> إدارة الأسعار</Typography>
              <Typography variant="body2">• basePrice: السعر قبل الخصم • discountPercent: نسبة مئوية • wholesalePrice: سعر الجملة</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%', borderRadius: '24px' }}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}><StorageIcon color="secondary" /> المتغيرات</Typography>
              <Typography variant="body2">• أضف الألوان في مصفوفة colors • اختر السعات التخزينية • ستظهر تلقائياً في صفحة المنتج</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%', borderRadius: '24px' }}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}><SellIcon color="secondary" /> Cross-sell & Upsell</Typography>
              <Typography variant="body2">• يتم ربط المنتجات تلقائياً حسب نفس الفئة • يمكن تعديل المعرفات يدوياً</Typography>
            </Paper>
          </Grid>
        </Grid>

        <Paper sx={{ p: 4, bgcolor: '#f5f3ff', borderRadius: '32px' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>⭐ أفضل الممارسات لتحسين SEO</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            <Chip label="كلمات مفتاحية في العنوان والوصف" sx={{ bgcolor: 'white', borderRadius: '30px' }} />
            <Chip label="وصف 200-400 كلمة" sx={{ bgcolor: 'white', borderRadius: '30px' }} />
            <Chip label="3-6 علامات لكل منتج" sx={{ bgcolor: 'white', borderRadius: '30px' }} />
            <Chip label="Schema Markup موجود تلقائياً" sx={{ bgcolor: 'white', borderRadius: '30px' }} />
          </Box>
          <Typography variant="body2" sx={{ mt: 3, color: 'text.secondary' }}>
            🔄 بعد أي تحديث، قم بتشغيل npm run build للتأكد من تحسين جميع الصفحات والـ JSON-LD
          </Typography>
        </Paper>
      </motion.div>
    </Container>
  )
}

export default InternalGuidePage