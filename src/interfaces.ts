export interface iUser {
  userName: string,
  avatarUrl: string,
  favorites: number
}

export interface iSearchFormData {
  dateIn: string | Date;
  dateOut: string | Date;
  maxPrice?: number | string
}




