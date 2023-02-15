
export interface rocket {
  rocket_name: string;
  rocket_type: string;
};

export interface links {
  flickr_images: string[]
}

export default interface launch {
  id: number,
  mission_name: string,
  details: string,
  launch_date_local: string,
  rocket: rocket,
  links: links,
};

