export interface iUser {
  userName: string,
  avatarUrl: string,
  favorites: number
}

export interface iSearchFormData {
  city: string;
  dateIn: string | Date;
  dateOut: string | Date;
  maxPrice: number | string
}




