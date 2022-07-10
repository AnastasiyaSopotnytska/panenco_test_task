type Team = {
  'data': Array<TeamData>,
  'meta': {
    'total_pages': number,
    'current_page': number,
    'next_page': number | null,
    'per_page': number,
    'total_count': number
  }
};

type TeamData = {
  'id': number,
  'abbreviation': string,
  'city': string,
  'conference': string,
  'division': string,
  'full_name': string,
  'name': string
};

type Player = {
  'data': Array<PlayerData>,
  'meta': {
    'total_pages': number,
    'current_page': number,
    'next_page': number | null,
    'per_page': number,
    'total_count': number
  }
};

type PlayerData = {
  'id': number,
  'first_name': string,
  'last_name': string,
  'position': string,
  'height_feet': number,
  'height_inches': number,
  'weight_pounds': number,
  'team': {
    'id':number,
    'abbreviation': string,
    'city': string,
    'conference': string,
    'division': string,
    'full_name': string,
    'name': string
  }
};

type newTeam = {
  'id': number,
  'abbreviation': string,
  'city': string,
  'name': string
};
