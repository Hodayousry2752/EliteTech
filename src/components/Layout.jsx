import { useState, useEffect } from 'react'
import { AppBar, Toolbar, Container, Box, Button, IconButton, Drawer, List, ListItem, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ExportExcel from './ExportExcel'
import { products } from '../data/products'

const Layout = ({ children }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { text: 'الرئيسية', path: '/' },
    { text: 'المنتجات', path: '/' },
    { text: 'دليل الفريق', path: '/guide' },
  ]

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: scrolled
            ? 'rgba(255,255,255,0.85)'
            : 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none' }}>
            <ShoppingBagIcon sx={{ color: 'primary.main', fontSize: 32 }} />
            <Box
              sx={{
                fontWeight: 800,
                fontSize: '1.5rem',
                background: 'linear-gradient(135deg, #6366f1, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              EliteTech
            </Box>
          </Box>

          {!isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                  }}
                >
                  {item.text}
                </Button>
              ))}
              <ExportExcel products={products} />
            </Box>
          ) : (
            <>
              <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'text.primary' }}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box sx={{ width: 250, p: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={() => setDrawerOpen(false)}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <List>
                    {menuItems.map((item) => (
                      <ListItem button key={item.text} component={Link} to={item.path} onClick={() => setDrawerOpen(false)}>
                        <ListItemText primary={item.text} />
                      </ListItem>
                    ))}
                    <ListItem>
                      <ExportExcel products={products} />
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {children}
      </Container>

      <Box
        component="footer"
        sx={{
          bgcolor: '#1e1b4b',
          color: 'white',
          py: 5,
          mt: 8,
          borderTopLeftRadius: '40px',
          borderTopRightRadius: '40px',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 4 }}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>EliteTech Store</Typography>
              <Typography variant="body2" sx={{ color: 'grey.400' }}>أفضل متجر للأجهزة الإلكترونية والإكسسوارات التقنية</Typography>
              <Typography variant="body2" sx={{ color: 'grey.400', mt: 1 }}>جميع المنتجات أصلية مع ضمان شامل</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: 'grey.400' }}>© 2025 EliteTech Store</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Layout