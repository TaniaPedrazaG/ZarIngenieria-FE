import NextLink from "next/link"
import { useState } from 'react';
import { Button, Menu, MenuItem, Divider, Link } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

export const FilterBy = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                startIcon={<FilterAltOutlinedIcon />}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Filtrar por
            </Button>
            <Menu
                id="demo-customized-menu"
                MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem disabled>
                    Categoria
                </MenuItem>
                <NextLink href={'/category/steel'} passHref legacyBehavior>
                    <Link>
                        <MenuItem onClick={handleClose} disableRipple>
                            Acero
                        </MenuItem>
                    </Link>
                </NextLink>
                <NextLink href={'/category/iron'} passHref legacyBehavior>
                    <Link>
                        <MenuItem onClick={handleClose} disableRipple>
                            Hierro
                        </MenuItem>
                    </Link>
                </NextLink>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem disabled>
                    Subcategoria
                </MenuItem>
                <NextLink href={'/subcategory/doors'} passHref legacyBehavior>
                    <Link>
                        <MenuItem onClick={handleClose} disableRipple>
                            Puertas
                        </MenuItem>
                    </Link>
                </NextLink>
                <NextLink href={'/subcategory/windows'} passHref legacyBehavior>
                    <Link>
                        <MenuItem onClick={handleClose} disableRipple>
                            Ventanas
                        </MenuItem>
                    </Link>
                </NextLink>
            </Menu>
        </div>
    );
}
