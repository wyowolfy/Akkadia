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

import {
  Button,
  Modal,
  Tooltip,
  makeStyles,
  Typography,
  Grid,
  IconButton,
} from '@material-ui/core'
import React from 'react'
import QRCode from 'qrcode.react'
import { Close } from '@material-ui/icons'

const useStyles = makeStyles((theme) => {
  return {
    paper: {
      backgroundColor: theme.palette.background.default,
      textAlign: 'center',
      padding: '4rem',
      borderRadius: '1rem',
      position: 'relative',
      maxWidth: '800px',
      [theme.breakpoints.down('md')]: {
        width: '80%',
        padding: '2rem',
      },
    },
    media: {
      margin: 'auto',
      marginTop: '2rem',
    },
    qrCode: {
      [theme.breakpoints.down('md')]: {
        maxWidth: '128px',
        maxHeight: '128px',
      },
    },
    header: {
      color: '#333',
    },
    text: {
      color: '#636363',
    },
  }
})

// Raffle Ticket Splash Page
export default function DepositInfo({ handleModalClose, open, amount, addr }) {
  // Constants
  const classes = useStyles()

  // Auto trim the a long address
  const trimAddr = (addr) => {
    return `${addr.slice(0, 4)}...${addr.slice(-10)}`
  }

  // Should be working with click to copy
  const body = (
    <div className={classes.paper}>
      <Grid
        container
        justify='flex-end'
        style={{ position: 'absolute', top: '1rem', right: '1rem' }}
      >
        <Grid item>
          <IconButton size='large' onClick={handleModalClose}>
            <Close fontSize='large' />
          </IconButton>
        </Grid>
      </Grid>
      <Typography
        className={classes.header}
        variant='h3'
        style={{ marginTop: '3rem' }}
      >
        Click on the amount and the address to copy them!
      </Typography>

      <Typography
        className={classes.header}
        variant='h3'
        style={{ marginBottom: '2rem' }}
      >
        Send exactly
      </Typography>

      <Tooltip title='Click to Copy'>
        <Button
          className={classes.text}
          variant='outlined'
          onClick={() => {
            navigator.clipboard.writeText({ amount }['amount'])
          }}
          size='large'
        >
          {amount} ₳
        </Button>
      </Tooltip>

      <Typography
        className={classes.header}
        variant='h4'
        style={{ margin: '1rem 0' }}
      >
        to
      </Typography>

      <Tooltip title='Click to Copy'>
        <Button
          className={classes.text}
          variant='outlined'
          onClick={() => {
            navigator.clipboard.writeText({ addr }['addr'])
          }}
          size='large'
          style={{ textTransform: 'none' }}
        >
          {trimAddr(addr)}
        </Button>
      </Tooltip>

      <Typography
        className={classes.text}
        variant='h4'
        style={{ margin: '2rem 0' }}
      >
        Do not send funds from an exchange, you will lose your funds.{' '}
        <b>Send only from a Daedalus wallet!</b> Yoroi not currently supported.
      </Typography>

      <div className={classes.media}>
        <QRCode className={classes.qrCode} value={addr} size={256} />
      </div>

      <Typography
        className={classes.text}
        variant='h4'
        style={{ marginTop: '2rem' }}
      >
        Please allow 10 minutes after funds are sent to receive your Akkadia
        ticket
      </Typography>
    </div>
  )

  return (
    <Modal
      open={open}
      onClose={handleModalClose}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {body}
    </Modal>
  )
}