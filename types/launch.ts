export interface launch_site {
  site_id: string;
  site_name: string;
};

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
  launch_site: launch_site,
  rocket: rocket,
  links: links,
  launch_year: string,
  launch_success: string,
};

