import _ from 'lodash';

export const getPaginatedData = ({movies, selectedPage, itemsPerPage}) => {
    console.log({movies, selectedPage, itemsPerPage});
    const startIndex = (selectedPage - 1) * itemsPerPage;
    return _(movies).slice(startIndex).take(itemsPerPage).value();
}