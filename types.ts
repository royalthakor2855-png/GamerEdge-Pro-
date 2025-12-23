export interface Tournament { id: string; game: string; title: string; entryFee: number; prizePool: number; totalSlots: number; filledSlots: number; startTime: string; type: string; }
export interface User { phoneNumber: string; username: string; walletBalance: number; isAdmin: boolean; avatar?: string; totalWinnings?: number; referralCode?: string; }
