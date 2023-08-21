import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.header`
  display: flex;
  align-items: center;

  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.mainBackground};

  box-shadow: 0px 2px 10px 1px ${({ theme }) => theme.colors.dark};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  height: 40px;
`;
export const Container = styled.div`
  width: 100%;

  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};

  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    width: ${({ theme }) => theme.breakpoints.s};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    width: ${({ theme }) => theme.breakpoints.m};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    width: ${({ theme }) => theme.breakpoints.l};
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

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

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};

  margin-left: ${({ theme }) => theme.spacing(7)};
`;
