import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { imgURL } from '../../api/init';
import handleCssBackground from '../../components/banner/helpers/handleCssBackground';
import { RootStore } from '../../redux/store/store';
import allUtils from '../../utils/allUtils';
import { ArrowBack } from '@material-ui/icons';
import imgPlaceholder from '../../assets/icons/placeholder.svg';

interface SearchProps {}

const Search: React.FC<SearchProps> = ({}) => {
  const { query } = useSelector((state: RootStore) => state.searchRXS);
  console.log(query);

  return (
    <div className="search container">
      {query.map((item: any) => {
        // Creating URL img reference
        const width: string = 'w500';
        let url: string = `${imgURL}/${width}/${item.poster_path}`;

        if (allUtils.isEmptyUTL(item.poster_path)) url = imgPlaceholder;

        if (
          allUtils.isEmptyUTL(item.first_air_date) &&
          allUtils.isEmptyUTL(item.release_date)
        )
          return;

        const ogDate: any = item.first_air_date || item.release_date; // TODO: FIX
        const date: Date = new Date(ogDate);
        const year: number = date.getFullYear();
        const month: number = date.getMonth();
        const day: number = date.getDay();
        const dateString: string = `${allUtils.monthsUTL[month]} ${
          day + 1
        }, ${year}`;

        const length: number = 270;
        const truncatedString: string = item.overview.substring(0, length);
        return (
          <div key={item.id} className="search__wrapper">
            <div className="search__img">
              <img src={url} alt={item.name || item.title} />
            </div>
            <div className="search__details">
              <h3>{item.name || item.title}</h3>
              <p>{dateString}</p>
              <p>{`${truncatedString}...`}</p>
            </div>
          </div>
        );
      })}

      <p className="search__link">
        <Link to="/">
          <ArrowBack />
          <span>{allUtils.transUTL('translateSearch.back')}..</span>
        </Link>
      </p>
    </div>
  );
};
export default Search;
