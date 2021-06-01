<!-- https://www.makeareadme.com/ -->
# TODO LIST
- Latest trailers
- Product page
- Input search
- language selection
- navigation items
- tab options
- animations
- (IMPORTANT) https://www.reddit.com/r/reactjs/comments/fjljtv/people_always_talk_about_putting_api_keys_in_env/

# API Repo
- https://github.com/DmanCoder/tmdb-api

# Naming Conventions

## Redux

- Redux action files suffix with the word `Action` e.g. -> `authActions`
- Redux action functions suffix with `AXN` (`Action` abbreviated) e.g. -> `loginUserAXN`
- Redux reducer files suffix with the word `Reducer` e.g. -> `authReducer`
- Redux state suffix with `RXS` e.g. -> `authRXS`

## State Hooks

- State Hooks suffix with `STH` e.g. `dataSourceSTH`

## Utilities

- Utility files are suffixed with `UTL` e.g. `loggerUTL`

## Validations

- Validations files are suffixed with `VAL` e.g. `loginVAL`

## Assets

- All assets (e.g. images and logos etc) suffix with the corresponding file extension e.g. `logoSVG`, `logoPNG`, `logoJPG`

# BEM Methodology

- Block: A functionally independent page component that can be reused. In HTML, blocks are represented by the class attribute.

- Element: A composite part of a block that can`t be used separately from it.

- Modifier: An entity that defines the appearance, state, or behavior of a block or element.

# Mobile First Aproach

- Always begin designing and developing with the mobile first approach in mind!
- Always begin designing and developing with the mobile first approach in mind!!
- Always begin designing and developing with the mobile first approach in mind!!!

# Installation

`npm i`

# Usage

`npm start`

# Contributing / Testing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

Testing tools include:

- Jest
- Enzyme
- Cypress

When targeting UI please use custom attributes e.g `data-test="my-target"`

Do not target using classes, id, selectors etc... for obvious reasons

Attributes are automatically ignored if their value is `undefined`, which we can use to our advantage!

# Test Coverage Report


File                             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------------------------|---------|----------|---------|---------|-----------------------
All files                        |   90.11 |     67.5 |   88.89 |   89.96 |
 animations                      |     100 |      100 |     100 |     100 |
  gsapConfig.ts                  |     100 |      100 |     100 |     100 |
 api                             |     100 |       50 |     100 |     100 |
  init.ts                        |     100 |       50 |     100 |     100 | 6-11
 components/app                  |     100 |      100 |     100 |     100 |
  app.tsx                        |     100 |      100 |     100 |     100 |
 components/app/helpers/language |      40 |       50 |     100 |      40 |
  languageDataSessionRestore.ts  |      40 |       50 |     100 |      40 | 12-14
 components/banner               |   88.46 |       75 |    87.5 |    87.5 |
  banner.tsx                     |   88.46 |       75 |    87.5 |    87.5 | 19-20,74
 components/footer               |     100 |      100 |     100 |     100 |
  footer.tsx                     |     100 |      100 |     100 |     100 |
 components/gallery              |     100 |       50 |     100 |     100 |
  gallery.tsx                    |     100 |       50 |     100 |     100 | 37-64
 components/graph/bar            |     100 |      100 |     100 |     100 |
  bar.tsx                        |     100 |      100 |     100 |     100 |
 components/navigation           |   78.57 |    28.57 |   73.33 |   78.05 |
  navigation.tsx                 |   78.57 |    28.57 |   73.33 |   78.05 | 23-24,102-103,107-112
 components/rating               |     100 |      100 |     100 |     100 |
  rating.tsx                     |     100 |      100 |     100 |     100 |
 components/rating/helpers       |     100 |      100 |     100 |     100 |
  handleSetColor.ts              |     100 |      100 |     100 |     100 |
 components/trailers             |   30.77 |       10 |   66.67 |   30.77 |
  trailers.tsx                   |   30.77 |       10 |   66.67 |   30.77 | 30-43
 i18n                            |     100 |      100 |     100 |     100 |
  i18n.ts                        |     100 |      100 |     100 |     100 |
 i18n/locals                     |     100 |      100 |     100 |     100 |
  en.ts                          |     100 |      100 |     100 |     100 |
  es.ts                          |     100 |      100 |     100 |     100 |
  fr.ts                          |     100 |      100 |     100 |     100 |
  zh.ts                          |     100 |      100 |     100 |     100 |
 i18n/translations/en/banner     |     100 |      100 |     100 |     100 |
  translateBanner.ts             |     100 |      100 |     100 |     100 |
 i18n/translations/en/footer     |     100 |      100 |     100 |     100 |
  translateFooter.ts             |     100 |      100 |     100 |     100 |
 i18n/translations/en/gallery    |     100 |      100 |     100 |     100 |
  translateGallery.ts            |     100 |      100 |     100 |     100 |
 i18n/translations/en/months     |     100 |      100 |     100 |     100 |
  translateMonths.ts             |     100 |      100 |     100 |     100 |
 i18n/translations/en/navigation |     100 |      100 |     100 |     100 |
  translateNavigation.ts         |     100 |      100 |     100 |     100 |
 i18n/translations/en/trailers   |     100 |      100 |     100 |     100 |
  translateTrailers.ts           |     100 |      100 |     100 |     100 |
 i18n/translations/es/banner     |     100 |      100 |     100 |     100 |
  translateBanner.ts             |     100 |      100 |     100 |     100 |
 i18n/translations/es/footer     |     100 |      100 |     100 |     100 |
  translateFooter.ts             |     100 |      100 |     100 |     100 |
 i18n/translations/es/gallery    |     100 |      100 |     100 |     100 |
  translateGallery.ts            |     100 |      100 |     100 |     100 |
 i18n/translations/es/months     |     100 |      100 |     100 |     100 |
  translateMonths.ts             |     100 |      100 |     100 |     100 |
 i18n/translations/es/navigation |     100 |      100 |     100 |     100 |
  translateNavigation.ts         |     100 |      100 |     100 |     100 |
 i18n/translations/es/trailers   |     100 |      100 |     100 |     100 |
  translateTrailers.ts           |     100 |      100 |     100 |     100 |
 i18n/translations/fr/banner     |     100 |      100 |     100 |     100 |
  translateBanner.ts             |     100 |      100 |     100 |     100 |
 i18n/translations/fr/footer     |     100 |      100 |     100 |     100 |
  translateFooter.ts             |     100 |      100 |     100 |     100 |
 i18n/translations/fr/gallery    |     100 |      100 |     100 |     100 |
  translateGallery.ts            |     100 |      100 |     100 |     100 |
 i18n/translations/fr/months     |     100 |      100 |     100 |     100 |
  translateMonths.ts             |     100 |      100 |     100 |     100 |
 i18n/translations/fr/navigation |     100 |      100 |     100 |     100 |
  translateNavigation.ts         |     100 |      100 |     100 |     100 |
 i18n/translations/fr/trailers   |     100 |      100 |     100 |     100 |
  translateTrailers.ts           |     100 |      100 |     100 |     100 |
 i18n/translations/zh/banner     |     100 |      100 |     100 |     100 |
  translateBanner.ts             |     100 |      100 |     100 |     100 |
 i18n/translations/zh/footer     |     100 |      100 |     100 |     100 |
  translateFooter.ts             |     100 |      100 |     100 |     100 |
 i18n/translations/zh/gallery    |     100 |      100 |     100 |     100 |
  translateGallery.ts            |     100 |      100 |     100 |     100 |
 i18n/translations/zh/months     |     100 |      100 |     100 |     100 |
  translateMonths.ts             |     100 |      100 |     100 |     100 |
 i18n/translations/zh/navigation |     100 |      100 |     100 |     100 |
  translateNavigation.ts         |     100 |      100 |     100 |     100 |
 i18n/translations/zh/trailers   |     100 |      100 |     100 |     100 |
  translateTrailers.ts           |     100 |      100 |     100 |     100 |
 redux/actions/errors            |     100 |      100 |     100 |     100 |
  errorsActions.ts               |     100 |      100 |     100 |     100 |
  errorsActionsType.ts           |     100 |      100 |     100 |     100 |
 redux/actions/free              |     100 |      100 |     100 |     100 |
  freeActions.ts                 |     100 |      100 |     100 |     100 |
  freeActionsTypes.ts            |     100 |      100 |     100 |     100 |
 redux/actions/language          |      40 |      100 |       0 |      50 |
  languageActions.ts             |      25 |      100 |       0 |   33.33 | 15-17
  languageActionsType.ts         |     100 |      100 |     100 |     100 |
 redux/actions/loading           |     100 |      100 |     100 |     100 |
  loadingActions.ts              |     100 |      100 |     100 |     100 |
  loadingActionsTypes.ts         |     100 |      100 |     100 |     100 |
 redux/actions/multiSearch       |     100 |      100 |     100 |     100 |
  multiSearchActions.ts          |     100 |      100 |     100 |     100 |
  multiSearchActionsTypes.ts     |     100 |      100 |     100 |     100 |
 redux/actions/popular           |     100 |      100 |     100 |     100 |
  popularActions.ts              |     100 |      100 |     100 |     100 |
  popularActionsTypes.ts         |     100 |      100 |     100 |     100 |
 redux/actions/trending          |     100 |       75 |     100 |     100 |
  trendingActions.ts             |     100 |       75 |     100 |     100 | 34
  trendingActionsTypes.ts        |     100 |      100 |     100 |     100 |
 redux/reducers                  |     100 |      100 |     100 |     100 |
  rootReducer.ts                 |     100 |      100 |     100 |     100 |
 redux/reducers/errors           |     100 |      100 |     100 |     100 |
  errorsReducer.ts               |     100 |      100 |     100 |     100 |
 redux/reducers/free             |     100 |      100 |     100 |     100 |
  freeReducer.ts                 |     100 |      100 |     100 |     100 |
  freeReducerTypes.ts            |       0 |        0 |       0 |       0 |
 redux/reducers/language         |     100 |      100 |     100 |     100 |
  languageReducer.ts             |     100 |      100 |     100 |     100 |
 redux/reducers/loading          |     100 |      100 |     100 |     100 |
  loadingReducer.ts              |     100 |      100 |     100 |     100 |
 redux/reducers/movies           |     100 |      100 |     100 |     100 |
  popularReducer.ts              |     100 |      100 |     100 |     100 |
  popularReducerTypes.ts         |       0 |        0 |       0 |       0 |
 redux/reducers/searchQuery      |     100 |      100 |     100 |     100 |
  multiSearchReducer.ts          |     100 |      100 |     100 |     100 |
 redux/reducers/trending         |     100 |      100 |     100 |     100 |
  trendingReducer.ts             |     100 |      100 |     100 |     100 |
 redux/store                     |     100 |      100 |     100 |     100 |
  store.ts                       |     100 |      100 |     100 |     100 |
 utils                           |     100 |     87.5 |     100 |     100 |
  isEmptyUTL.ts                  |     100 |     87.5 |     100 |     100 | 2
  monthsUTL.ts                   |     100 |      100 |     100 |     100 |
  transUTL.ts                    |     100 |      100 |     100 |     100 |
|

# Support

You can hit up any of the developers for help through the slack channel

or via email 😎. We are here to help :D.

# Roadmap

If you have ideas for releases in the future, it is a good idea to list them in the README.

- (IDEA)
- (IDEA)
- (IDEA)
- (IDEA)
- (IDEA)

# Authors and acknowledgment

- Denis Otim (DmanCoder) AKA - What a legend


# License

For open source projects, say how it is licensed.

# Project status

If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
