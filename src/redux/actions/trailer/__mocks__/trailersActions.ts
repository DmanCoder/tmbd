import { GET_TV_SHOW_TRAILERS } from '../trailerActionsTypes';

module.exports = {
  ...jest.requireActual('../trailerActions'),
  __esModule: true,
  getFreeTvShowsAXN: jest.fn().mockReturnValue({
    type: GET_TV_SHOW_TRAILERS,
    payload: {
      dates: { maximum: '2021-05-03', minimum: '2021-04-16' },
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: '/jMWkd0fuwbG39eJpzycJzPWMCww.jpg Face',
          genre_ids: [28, 878],
          id: 399566,
          original_language: 'en',
          original_title: 'Godzilla vs. Kong (This is a test response)',
          overview:
            'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
          popularity: 9975.169,
          poster_path: '/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
          trailers: {
            id: 65820,
            results: [
              {
                id: '5a6511070e0a2619fe02eee9',
                iso_639_1: 'en',
                iso_3166_1: 'US',
                key: 'wLtMUUUQhIg',
                name: 'VAN HELSING | Official Trailer - Premieres Sept 23rd at 10/9c | SYFY',
                site: 'YouTube',
                size: 1080,
                type: 'Trailer',
              },
            ],
          },
          release_date: '2021-03-24',
          title: 'Godzilla vs. Kong',
          video: false,
          vote_average: 8.4,
          vote_count: 3849,
        },
      ],
      total_pages: 11,
      total_results: 205,
    },
  }),
};
