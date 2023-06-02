import PropTypes from 'prop-types';
import { StyledButton, StyledForm, StyledInput } from './SearchMovies.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchMovies = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.elements.query.value;

    if (!query) {
      toast.warn('Oops. Please enter the title', {
        position: 'top-right',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }

    onSubmit(query);
    e.target.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput name="query" type="text" placeholder="Enter the title" />
      <StyledButton type="submit">Search</StyledButton>
      <ToastContainer autoClose="2000" />
    </StyledForm>
  );
};

SearchMovies.propTypes = { onSubmit: PropTypes.func.isRequired };

export default SearchMovies;
