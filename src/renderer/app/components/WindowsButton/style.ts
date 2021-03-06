import styled, { css } from 'styled-components';

import { centerImage } from '~/shared/mixins';

interface ButtonProps {
  icon: string;
  isClose?: boolean;
}

export const Button = styled.div`
  height: 100%;
  width: 45px;
  min-width: 45px;
  margin-right: 1px;
  position: relative;
  transition: 0.2s background-color;
  -webkit-app-region: no-drag;
  &:first-child {
    margin-right: 0;
  }
  &:hover {
    background-color: ${({ isClose }: ButtonProps) =>
      !isClose ? 'rgba(196, 196, 196, 0.4)' : '#e81123'};
  }
`;

interface IconProps {
  icon: string;
  isClose?: boolean;
}

export const Icon = styled.div`
  width: 100%;
  height: 100%;
  transition: 0.2s filter;
  filter: ${(props: any) => (props.theme.dark ? 'invert(100%)' : 'none')};

  ${centerImage('11px', '11px')};
  ${({ icon, isClose }: IconProps) => css`
    background-image: url(${icon});
    &:hover {
      filter: ${isClose && 'invert(100%)'};
    }
  `};
`;
