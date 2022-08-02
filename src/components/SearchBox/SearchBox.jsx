
import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Button, Input , Icon, SearchForm} from 'components/SearchBox/SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {

	const handleSubmit = (values, actions) => {
		onSubmit(values);
		actions.setSubmitting();
	};
	return (
		<Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
		
			<SearchForm >
				<Button type="submit" >
					<Icon />
				</Button>

				<Input
					type="text"
					name="query"
					autoComplete="off"
					placeholder="Search movie"
				/>
			</SearchForm>
		
		</Formik>
	)
};

SearchBox.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};