// Authentication Service - Backend Placeholders
// TODO: Replace with actual backend implementation (Supabase, Firebase, etc.)

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  plan: 'free' | 'premium';
  createdAt: Date;
}

export interface AuthResponse {
  user: User | null;
  error?: string;
  token?: string;
}

class AuthService {
  private currentUser: User | null = null;

  // Email/Password Authentication
  async signUp(email: string, password: string, name: string): Promise<AuthResponse> {
    // TODO: Implement actual signup logic
    console.log('🔧 [PLACEHOLDER] Sign up:', { email, name });
    
    // Mock response
    await this.delay(1000);
    const user: User = {
      id: `user_${Date.now()}`,
      email,
      name,
      plan: 'free',
      createdAt: new Date(),
    };
    
    this.currentUser = user;
    return { user, token: `mock_token_${user.id}` };
  }

  async signIn(email: string, password: string): Promise<AuthResponse> {
    // TODO: Implement actual signin logic
    console.log('🔧 [PLACEHOLDER] Sign in:', { email });
    
    await this.delay(800);
    const user: User = {
      id: `user_existing`,
      email,name: 'Music Lover',
      plan: 'free',
      createdAt: new Date(),
    };
    
    this.currentUser = user;
    return { user, token: `mock_token_${user.id}` };
  }

  async signOut(): Promise<void> {
    // TODO: Implement actual signout logic
    console.log('🔧 [PLACEHOLDER] Sign out');
    
    await this.delay(500);
    this.currentUser = null;
  }

  // OAuth Authentication
  async signInWithGoogle(): Promise<AuthResponse> {
    // TODO: Implement Google OAuth
    console.log('🔧 [PLACEHOLDER] Google OAuth');
    
    await this.delay(1200);
    const user: User = {
      id: `google_user_${Date.now()}`,
      email: 'user@gmail.com',
      name: 'Google User',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      plan: 'free',
      createdAt: new Date(),
    };
    
    this.currentUser = user;
    return { user, token: `google_token_${user.id}` };
  }

  async signInWithGitHub(): Promise<AuthResponse> {
    // TODO: Implement GitHub OAuth
    console.log('🔧 [PLACEHOLDER] GitHub OAuth');
    
    await this.delay(1000);
    const user: User = {
      id: `github_user_${Date.now()}`,
      email: 'user@github.com',
      name: 'GitHub User',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      plan: 'free',
      createdAt: new Date(),
    };
    
    this.currentUser = user;
    return { user, token: `github_token_${user.id}` };
  }

  // Magic Link Authentication
  async sendMagicLink(email: string): Promise<{ success: boolean; error?: string }> {
    // TODO: Implement magic link sending
    console.log('🔧 [PLACEHOLDER] Send magic link to:', email);
    
    await this.delay(1500);
    return { success: true };
  }

  async verifyMagicLink(token: string): Promise<AuthResponse> {
    // TODO: Implement magic link verification
    console.log('🔧 [PLACEHOLDER] Verify magic link:', token);
    
    await this.delay(800);
    const user: User = {
      id: `magic_user_${Date.now()}`,
      email: 'user@example.com',
      name: 'Magic Link User',
      plan: 'free',
      createdAt: new Date(),
    };
    
    this.currentUser = user;
    return { user, token: `magic_token_${user.id}` };
  }

  // Password Reset
  async resetPassword(email: string): Promise<{ success: boolean; error?: string }> {
    // TODO: Implement password reset
    console.log('🔧 [PLACEHOLDER] Reset password for:', email);
    
    await this.delay(1000);
    return { success: true };
  }

  async updatePassword(newPassword: string, resetToken: string): Promise<{ success: boolean; error?: string }> {
    // TODO: Implement password update
    console.log('🔧 [PLACEHOLDER] Update password with token:', resetToken);
    
    await this.delay(800);
    return { success: true };
  }

  // User Management
  async getCurrentUser(): Promise<User | null> {
    // TODO: Get user from token/session
    console.log('🔧 [PLACEHOLDER] Get current user');
    
    return this.currentUser;
  }

  async updateProfile(updates: Partial<User>): Promise<AuthResponse> {
    // TODO: Implement profile update
    console.log('🔧 [PLACEHOLDER] Update profile:', updates);
    
    if (!this.currentUser) {
      return { user: null, error: 'Not authenticated' };
    }

    await this.delay(600);
    this.currentUser = { ...this.currentUser, ...updates };
    return { user: this.currentUser };
  }

  async deleteAccount(): Promise<{ success: boolean; error?: string }> {
    // TODO: Implement account deletion
    console.log('🔧 [PLACEHOLDER] Delete account');
    
    await this.delay(1000);
    this.currentUser = null;
    return { success: true };
  }

  // Session Management
  async refreshToken(): Promise<{ token?: string; error?: string }> {
    // TODO: Implement token refresh
    console.log('🔧 [PLACEHOLDER] Refresh token');
    
    await this.delay(500);
    return { token: `refreshed_token_${Date.now()}` };
  }

  async validateSession(): Promise<boolean> {
    // TODO: Validate current session
    console.log('🔧 [PLACEHOLDER] Validate session');
    
    await this.delay(300);
    return this.currentUser !== null;
  }

  // Utility
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export const authService = new AuthService();

// Environment Variables Required:
/*
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
NEXT_PUBLIC_GITHUB_CLIENT_ID=your_github_client_id
NEXT_PUBLIC_AUTH_REDIRECT_URL=http://localhost:3000/auth/callback
AUTH_SECRET=your_auth_secret
MAGIC_LINK_SECRET=your_magic_link_secret
*/