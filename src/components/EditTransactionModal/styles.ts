import styled from 'styled-components'

import { darken, transparentize } from 'polished'

interface RadioBoxProps {
  isActive: boolean
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D'
}

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;

    color: var(--text-title);
    font-size: 1.5rem;
  }

  input {
    width: 100%;
    height: 4rem;

    padding: 0 1.5rem;

    border: 1px solid var(--input-border-color);

    background: var(--input-background);

    font-size: 1rem;

    & + input {
      margin-top: 1rem;
    }

    &::placeholder {
      color: var(--text-title);
    }
  }

  button[type='submit'] {
    width: 100%;
    height: 4rem;

    margin-top: 1rem;
    padding: 0 1.5rem;

    background: var(--green);

    border: 0;
    border-radius: 0.25rem;

    color: #fff;

    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.3s ease;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 0.5rem;
`

export const Button = styled.button<RadioBoxProps>`
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${props =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : 'transparent'};

  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: block;

    margin-left: 1rem;

    font-size: 1rem;

    color: var(--text-title);
  }
`