"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

interface StoredUser {
  name: string
  email: string
  password: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const USERS_STORAGE_KEY = "verdant_users"
const CURRENT_USER_KEY = "verdant_current_user"

function getStoredUsers(): StoredUser[] {
  if (typeof window === "undefined") return []
  const stored = localStorage.getItem(USERS_STORAGE_KEY)
  return stored ? JSON.parse(stored) : []
}

function saveStoredUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users))
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  // Restore user session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem(CURRENT_USER_KEY)
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const users = getStoredUsers()
    const existingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase())
    
    if (!existingUser) {
      return { success: false, error: "No account found with this email. Please sign up first." }
    }
    
    if (existingUser.password !== password) {
      return { success: false, error: "Incorrect password. Please try again." }
    }
    
    const loggedInUser: User = {
      id: existingUser.email,
      name: existingUser.name,
      email: existingUser.email,
    }
    
    setUser(loggedInUser)
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(loggedInUser))
    return { success: true }
  }

  const signup = async (name: string, email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    await new Promise(resolve => setTimeout(resolve, 500))
    
    if (!name || !email || !password) {
      return { success: false, error: "All fields are required." }
    }
    
    if (password.length < 6) {
      return { success: false, error: "Password must be at least 6 characters." }
    }
    
    const users = getStoredUsers()
    const existingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase())
    
    if (existingUser) {
      return { success: false, error: "An account with this email already exists. Please login." }
    }
    
    const newUser: StoredUser = { name, email, password }
    saveStoredUsers([...users, newUser])
    
    const loggedInUser: User = {
      id: email,
      name: name,
      email: email,
    }
    
    setUser(loggedInUser)
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(loggedInUser))
    return { success: true }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem(CURRENT_USER_KEY)
  }

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      signup,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    return {
      user: null,
      isAuthenticated: false,
      login: async () => ({ success: false, error: "Auth not initialized" }),
      signup: async () => ({ success: false, error: "Auth not initialized" }),
      logout: () => {}
    }
  }
  return context
}
