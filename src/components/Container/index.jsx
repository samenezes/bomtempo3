import { StyledContainer } from '../../assets/styles/Container/Container.style';
import PropTypes from 'prop-types';

export function Container({ children }) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
}

Container.propTypes = {
    children: PropTypes.any
}.isRequired;