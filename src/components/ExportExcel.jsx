import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import * as XLSX from 'xlsx';

const ExportExcel = ({ products }) => {
  const handleExport = () => {
    const exportData = products.map(p => ({
      ID: p.id,
      'Name (AR)': p.name_ar,
      'Name (EN)': p.name_en,
      Category: p.category.name_ar,
      'Base Price': p.basePrice,
      'Final Price': p.finalPrice,
      'Discount %': p.discountPercent,
      'Wholesale Price': p.wholesalePrice,
      Colors: p.colors.join(', '),
      Storage: p.storage.join(', '),
      Tags: p.tags.join(', '),
      SKU: p.sku,
      'In Stock': p.inStock ? 'Yes' : 'No',
      'SEO Keywords': p.seoKeywords.join(', '),
      'Meta Description': p.metaDescription,
      Rating: p.rating,
      Reviews: p.reviews
    }));
    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Products');
    XLSX.writeFile(wb, `products_backup_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  return (
    <Button variant="contained" color="secondary" startIcon={<DownloadIcon />} onClick={handleExport}>
      تصدير Excel
    </Button>
  );
};

export default ExportExcel;