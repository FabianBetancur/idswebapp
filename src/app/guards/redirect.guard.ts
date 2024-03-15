import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '@services/token.service';
import { inject, Injectable } from '@angular/core';

export const redirectGuard: CanActivateFn = () => {
  const isValidToken: string | unknown =
    inject(TokenService).isValidRefreshToken();
  if (isValidToken) {
    inject(Router).navigate(['/cms']);
  }
  return true;
};
