import { Box, useTheme } from '@mui/material'
import { ReactNode } from 'react'

const MainContainer = ({ children }: { children?: ReactNode }) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          minHeight: '100vh',
          pb: 3,
          width: '100%',
          maxWidth: '366px',
          [theme.breakpoints.up('sm')]: {
            width: '496px',
            maxWidth: '496px',
            minHeight: 'unset',
            borderRadius: 1,
          },
        }}
      >
        <Box
          sx={{
            maxWidth: '366px',
            width: '100%',
            margin: 'auto',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default MainContainer
