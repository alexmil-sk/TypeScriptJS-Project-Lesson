export interface iUser {
  userName: string,
  avatarUrl: string,
  favorites: unknown
}

export interface iSearchFormData {
  dateIn: string | Date;
  dateOut: string | Date;
  maxPrice?: number | string
}




