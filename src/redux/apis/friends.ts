import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FriendsDetails } from '@utils/interfaces/FriendsDetails';
import { ListFriendData } from '@utils/interfaces/ListFriendData';

export const friendsApi = createApi({
  reducerPath: 'friendList',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://private-5bdb3-friendmock.apiary-mock.com',
  }),

  keepUnusedDataFor: 600,

  endpoints: (builder) => ({
    getFriends: builder.query<ListFriendData[], void>({
      query: () => '/friends',
    }),
    getDetails: builder.query<FriendsDetails, string>({
      query: (id) => `/friends/${id}`,
    }),
  }),
});

export const { useGetFriendsQuery, useGetDetailsQuery } = friendsApi;
