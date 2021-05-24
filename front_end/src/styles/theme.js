/**
The MIT License (MIT)

Copyright (c) 2021 NFT-DAO Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

import { blue } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const defaultTheme = createMuiTheme()

const sharedButtonStyles = {
  root: {
    borderRadius: '0.5rem',
    lineHeight: '2',
  },
  sizeLarge: {
    padding: '0.5rem 2rem',
    fontSize: '1.2rem',
    fontWeight: 400,
    [defaultTheme.breakpoints.down('sm')]: {
      padding: '0.25rem 1rem',
      fontSize: '0.8rem',
    },
  },
}

const lightButtonStyles = {
  contained: {
    backgroundColor: '#000',
    color: '#fff',
    fontWeight: 'bold',
  },
}

const darkButtonStyles = {
  contained: {
    backgroundColor: '#fff',
    color: '#000',
    fontWeight: 'bold',
  },
}

export const sharedStyles = {
  typography: {
    fontFamily: ['Cabin', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontWeight: '100',
      fontSize: '3.5rem',
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2rem',
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '1.6rem',
      },
    },
    h3: {
      fontSize: '1.6rem',
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '1.4rem',
      },
    },
    h4: {
      fontSize: '1.4rem',
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
      },
    },
    h5: {
      fontSize: '1.2rem',
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '0.8rem',
      },
    },
    h6: {
      fontSize: '0.8rem',
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '0.7rem',
      },
    },
  },
}

const lightStyles = {
  ...sharedStyles,
  palette: {
    primary: {
      main: blue[500],
    },
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#000',
    },
  },
  overrides: {
    MuiButton: { ...sharedButtonStyles, ...lightButtonStyles },
  },
}

const darkStyles = {
  ...sharedStyles,
  palette: {
    background: {
      paper: '#000',
    },
    text: {
      primary: '#fff',
    },
  },
  overrides: {
    MuiButton: { ...sharedButtonStyles, ...darkButtonStyles },
  },
}

export const lightTheme = createMuiTheme(lightStyles)
export const darkTheme = createMuiTheme(darkStyles)