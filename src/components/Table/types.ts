export type node = {
  forkCount: number;
  nameWithOwner: string;
  url: string;
  stargazerCount: number;
  id: string;
}


export type propsType = {
  loading: boolean;
  list: node[];
}
