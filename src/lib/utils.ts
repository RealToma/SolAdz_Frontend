import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Connection, clusterApiUrl } from '@solana/web3.js';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const connection = new Connection(clusterApiUrl('mainnet-beta'));