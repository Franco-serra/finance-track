import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { TransactionForm } from './pages/transaction-form/transaction-form';

export const routes: Routes = [
    {path: 'login',  loadComponent: () => import('./pages/login/login').then(c => c.Login)},
    {path: 'dashboard',     loadComponent: () => import('./pages/dashboard/dashboard').then(c => c.Dashboard)},
    {path: 'transactions',  loadComponent: () => import('./pages/transaction-form/transaction-form').then(c => c.TransactionForm)},

    {path: '', redirectTo: 'login', pathMatch: 'full'}
];
