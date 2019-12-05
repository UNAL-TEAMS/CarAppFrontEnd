export interface User {
  _id?: string;
  email?: string;
  name?: string;
  password?: string;
  identification?: number;
  avatar?: string;
  cars?: [Car];
}

export interface Car {
  _id?: string;
  trade_mark?: string;
  model?: number;
  lastSoatDate?: Date;
  lastTecDate?: Date; // male; female
  reference?: string;
  license_plate?: string;
  picture?: string;
  currentKilometer?: number;
  last5krev?: number;
}
