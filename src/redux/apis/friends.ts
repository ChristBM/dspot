import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FriendsDetails } from '@utils/interfaces/FriendsDetails';
import { ListFriendData } from '@utils/interfaces/ListFriendData';

export const friendsApi = createApi({
  reducerPath: 'friendList',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://private-5bdb3-friendmock.apiary-mock.com',
  }),

  endpoints: (builder) => ({
    getFriends: builder.query<ListFriendData[], void>({
      query: () => '/friends',
      keepUnusedDataFor: 6000,
    }),
    getDetails: builder.query<FriendsDetails, string>({
      query: (id) => `/friends/${id}`,
      keepUnusedDataFor: 6000,
    }),
  }),
});

export const { useGetFriendsQuery, useGetDetailsQuery } = friendsApi;
