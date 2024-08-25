import { atom } from 'recoil';

export const dashboardState = atom({
  key: 'dashboardState',
  default: [],
});

export const userDetails = atom({
  key: 'userDetails',
  default: {}
})
