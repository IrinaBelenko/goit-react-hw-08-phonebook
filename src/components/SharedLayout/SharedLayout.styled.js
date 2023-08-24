import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  color: #fff;
  font-size: 18px;
  font-weight: 700;

  text-decoration: none;
  text-transform: uppercase;

  transition-property: color, background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)';

  transform: scale(0.9);

  &:hover,
  &:focus {
    color: #f2f2f2;
  }

  &.active {
    color: #f2f2f2;
    background-color: #000080;

    padding: 6px 12px;
    border-radius: 4px;

    transform: scale(1);
    pointer-events: none;
  }
`;
