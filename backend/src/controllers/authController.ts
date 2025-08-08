import { Request, Response, NextFunction } from 'express';
// import services & models

export async function register(req: Request, res: Response, next: NextFunction) {
  // 1. Validate password policy
  // 2. Create user, hash password, send verification email
}

export async function login(req: Request, res: Response, next: NextFunction) {
  // 1. Check user, verify password, check email verified
  // 2. If 2FA enabled, require 2FA code
  // 3. Issue JWT
}

export async function verifyEmail(req: Request, res: Response, next: NextFunction) {
  // 1. Verify email token
}

export async function enable2FA(req: Request, res: Response, next: NextFunction) {
  // 1. Generate TOTP secret, send QR, save secret
}

export async function login2FA(req: Request, res: Response, next: NextFunction) {
  // 1. Verify TOTP code, issue JWT
}

export async function oauthCallback(req: Request, res: Response, next: NextFunction) {
  // 1. Handle OAuth2 callback
}