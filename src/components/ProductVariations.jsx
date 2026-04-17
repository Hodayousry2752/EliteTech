import { useState } from 'react'
import { FormControl, InputLabel, Select, MenuItem, Box, Typography, Chip, Paper } from '@mui/material'

const ProductVariations = ({ colors, storage, onVariationChange }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [selectedStorage, setSelectedStorage] = useState(storage[0])

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value)
    onVariationChange?.({ color: e.target.value, storage: selectedStorage })
  }

  const handleStorageChange = (e) => {
    setSelectedStorage(e.target.value)
    onVariationChange?.({ color: selectedColor, storage: e.target.value })
  }

  return (
    <Paper variant="outlined" sx={{ p: 2, borderRadius: '24px', bgcolor: '#f8fafc' }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
        المتغيرات المتاحة
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
        <FormControl fullWidth>
          <InputLabel>اللون</InputLabel>
          <Select value={selectedColor} label="اللون" onChange={handleColorChange} sx={{ borderRadius: '40px' }}>
            {colors.map((color) => (
              <MenuItem key={color} value={color}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      bgcolor:
                        color === 'أسود'
                          ? '#1e1b4b'
                          : color === 'أبيض'
                          ? '#f1f5f9'
                          : color === 'أزرق'
                          ? '#3b82f6'
                          : color === 'ذهبي'
                          ? '#fbbf24'
                          : '#a855f7',
                      border: '1px solid #ddd',
                    }}
                  />
                  {color}
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>السعة التخزينية</InputLabel>
          <Select value={selectedStorage} label="السعة التخزينية" onChange={handleStorageChange} sx={{ borderRadius: '40px' }}>
            {storage.map((cap) => (
              <MenuItem key={cap} value={cap}>
                {cap}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
        <Chip label={`اللون: ${selectedColor}`} variant="outlined" sx={{ borderRadius: '30px' }} />
        <Chip label={`السعة: ${selectedStorage}`} variant="outlined" sx={{ borderRadius: '30px' }} />
      </Box>
    </Paper>
  )
}

export default ProductVariations