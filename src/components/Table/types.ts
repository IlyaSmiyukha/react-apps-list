export type Node = {
  forkCount: number;
  nameWithOwner: string;
  url: string;
  stargazerCount: number;
}


export type props = {
  loading: boolean;
  list: Node[];
}
