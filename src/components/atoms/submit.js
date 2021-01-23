import React from 'react';
import Button from '@material-ui/core/Button';
import GlobalContext from '../../context/global-context'

export default ({ children, fullWidth = false, color = 'primary', className = '', onClick }) => {
    const context = React.useContext(GlobalContext);

    const handleSubmit = () => {
        if (context.processing) return
        onClick()
    }

    return (
        <Button
            fullWidth={fullWidth}
            disabled={context.processing}
            variant='contained'
            color={color}
            className={className}
            onClick={handleSubmit}
        >
            {!!children && (<>{children}</>)}
            {!children && (<>Confirm</>)}
        </Button>
    )
}
