import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Transactions } from './pages/transactions/transactions';

export const routes: Routes = [
    {path: 'login',  loadComponent: () => import('./pages/login/login').then(c => c.Login)},
    {path: 'dashboard',     loadComponent: () => import('./pages/dashboard/dashboard').then(c => c.Dashboard)},
    {path: 'transactions',  loadComponent: () => import('./pages/transactions/transactions').then(c => c.Transactions)},

    {path: '', redirectTo: 'login', pathMatch: 'full'}
];
