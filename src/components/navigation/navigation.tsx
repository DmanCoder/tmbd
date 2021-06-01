import React from 'react';
import gsap from '../../animations/gsapConfig';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// Store
import { RootStore } from '../../redux/store/store';

// Actions
import { setLanguageAXN } from '../../redux/actions/language/languageActions';

// Assets
import { ReactComponent as Logo } from '../../assets/logo/alt-short.svg';

// Utilities
import allUtils from '../../utils/allUtils';

let useClickOutside = (handler: Function) => {
  let domNode: any = React.useRef();

  React.useEffect(() => {
    let maybeHandler = (event: any) => {
      // Check if the event is outside of the dom node
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });

  return domNode;
};

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const languageRXS = useSelector((state: RootStore) => state.languageRXS);
  const langArr: any = [
    { 'en-US': 'EN', lang: 'english' },
    { 'es-ES': 'ES', lang: 'Spanish' },
    { 'zh-CN': 'CN', lang: 'Chinese' },
    { 'fr-FR': 'FR', lang: 'French' },
  ];
  const langArrFiltered = langArr.filter(
    (lang: any) => Object.keys(lang)[0] !== languageRXS
  );
  const langHead = langArr.find(
    (obj: any) => Object.keys(obj)[0] === languageRXS
  );

  // Keeps track of opened dropdown menu
  const [isOpen, setIsOpen] = React.useState({
    lang: false,
    movie: false,
    tvShow: false,
    people: false,
  });

  const langTL = React.useRef(gsap.timeline({ paused: true }));

  React.useEffect(() => {
    langTL.current
      .set('.nav__language-body', {
        css: { display: 'block' },
      })
      .to(
        '.nav__language-body div',
        {
          duration: 0.75,
          ease: 'back.out',
          stagger: { amount: 0.25, from: 'start' },
          css: {
            top: 0,
          },
        },
        'drop'
      )
      .to(
        '.nav__language-body div',
        {
          delay: 0.25,
          duration: 0.75,
          ease: 'back.out',
          stagger: { amount: 0.25, from: 'start' },
          css: {
            opacity: 1,
          },
        },
        'drop'
      );

    // Kill when un-mounted
    return () => {
      // langTL.current.kill();
    };
  }, []);

  const langRef = useClickOutside(() => {
    setIsOpen({ ...isOpen, lang: false });
    langTL.current.reverse();
  });

  const animateDropdownLanguageSelection = () => {
    if (!isOpen.lang) {
      langTL.current.play();
      setIsOpen({ ...isOpen, lang: true });
    } else {
      langTL.current.reverse();
      setIsOpen({ ...isOpen, lang: false });
    }
  };

  const handleLanguageSelection = (lang: string = 'en-EN') => {
    allUtils.langUTL(lang);
    dispatch(setLanguageAXN(lang));
    window.location.reload(true);
  };

  return (
    <nav data-test="navigation-component" className="nav">
      <ul>
        <li data-test="logo">
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li data-test="movies-text">
          {allUtils.transUTL('translateNavigation.movies')}
        </li>
        <li data-test="tv-shows-text">
          {allUtils.transUTL('translateNavigation.tvShows')}
        </li>
        <li data-test="people-text">
          {allUtils.transUTL('translateNavigation.people')}
        </li>
        <li ref={langRef} className="nav__language">
          <div
            data-test="language-pref"
            onClick={animateDropdownLanguageSelection}
            className="nav__language-head"
          >
            {langHead[`${languageRXS}`] && langHead[`${languageRXS}`]}
          </div>
          <div className="nav__language-body">
            {langArrFiltered.map((lang: any, index: number) => {
              const key: string[] = Object.keys(lang);
              const value: string[] = Object.values(lang);

              return (
                <div
                  data-test="language-item"
                  key={index}
                  onClick={() => {
                    handleLanguageSelection(key[0]);
                  }}
                  title={value[1]} // Contains country name
                >
                  {/* value[0] contains ios-alpha 2 country coude */}
                  {value[0]}
                </div>
              );
            })}
          </div>
        </li>
        <li data-test="bell-icon">
          <i className="fas fa-bell"></i>
        </li>
        <li data-test="profile-image">
          <div>G</div>
        </li>
        <li>
          <div></div>
          <div></div>
          <div></div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
