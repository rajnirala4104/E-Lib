import { lazy } from 'react';

export const Navbar = lazy(() => import('./Navbar'));
export const Orders = lazy(() => import('./Orders'));
export const Finance = lazy(() => import('./Finance'));
export const BookCard = lazy(() => import('./BookCard'));
export const Inventory = lazy(() => import('./Inventory'))
export const Customers = lazy(() => import('./Customers'))
export const Dashboard = lazy(() => import('./Dashboard'))
export const Categories = lazy(() => import('./Categories'));
export const UserInfoPopup = lazy(() => import('./UserInfoPopup'));
export const BooksContainer = lazy(() => import('./BooksContainer'));
export const SearchedBookContainer = lazy(() => import('./SearchedBookContainer'));
export const AdminDashboardSideBar = lazy(() => import('./AdminDashboardSideBar'));
export const AdminDashboardHeader = lazy(() => import('./AdminDashboardHeader'));

