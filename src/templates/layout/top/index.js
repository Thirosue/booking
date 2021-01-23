import React from "react"
import { SnackbarProvider } from 'notistack';
import { Helmet } from "react-helmet"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core"
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import theme from "../../../theme"
import Header from './header'
import Footer from './footer'
import DeviceProvider from '../../../context/deviceContext'
import ConfirmProvider from '../../../context/confirmProvider'
import InquiryProvider from '../../../context/inquiryProvider'
import { GlobalStateProvider } from '../../../context/globalState'
import ErrorBoundary from '../../../errorboundary'
import useDocumentTitle from '../../../hooks/useDocumentTitle'

import "./layout.css"

export default ({ location, children }) => {
    const title = useDocumentTitle(location);

    return (
        <ErrorBoundary>
            <Helmet>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <title>{title}</title>
            </Helmet>
            <SnackbarProvider maxSnack={3}>
                <ConfirmProvider>
                    <ThemeProvider theme={theme}>
                        <DeviceProvider>
                            <GlobalStateProvider>
                                <InquiryProvider>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Header />
                                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                                        <CssBaseline />
                                        {children}
                                        <Footer />
                                    </MuiPickersUtilsProvider>
                                </InquiryProvider>
                            </GlobalStateProvider>
                        </DeviceProvider>
                    </ThemeProvider>
                </ConfirmProvider>
            </SnackbarProvider>
        </ErrorBoundary>)
}