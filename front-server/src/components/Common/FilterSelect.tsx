import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

interface Props {
  name: string
}

interface ComponentProps {
  props: Array<Props>
  width: string
  height: string
  borderwidth: string
  bordercolor: string
  fontsize: string
}

interface StyledSelectProps {
  width: string
  height: string
  borderwidth: string
  bordercolor: string
  fontsize: string
}

const FilterSelectWrapper = styled.div`
  width: 100%;
`

const StyledSelect = styled.select<StyledSelectProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.borderwidth} solid ${(props) => props.bordercolor};
  padding: 8px;
  border-radius: 5px;
  font-size: ${(props) => props.fontsize};
  color: #666666;
  background-color: #fbfbfd;

  &:hover {
    border: ${(props) => props.borderwidth} solid ${(props) => props.bordercolor};
    box-shadow: inset 0 0 0 1px ${(props) => props.bordercolor};
  }
  &:focus {
    outline: none !important;
  }
`

const FilterSelect = ({ props, width, height, borderwidth, bordercolor, fontsize }: ComponentProps) => {
  return (
    <FilterSelectWrapper>
      <StyledSelect
        width={width}
        height={height}
        borderwidth={borderwidth}
        bordercolor={bordercolor}
        fontsize={fontsize}
      >
        {props.map((ele: Props, i: number) => (
          <option key={i} value={ele.name}>
            {ele.name}
          </option>
        ))}
      </StyledSelect>
    </FilterSelectWrapper>
  )
}

FilterSelect.propTypes = {
  map: PropTypes.any.isRequired,
  props: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  borderwidth: PropTypes.string.isRequired,
  bordercolor: PropTypes.string.isRequired,
}

export default FilterSelect
